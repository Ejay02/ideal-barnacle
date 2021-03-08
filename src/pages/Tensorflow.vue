<template>
  <section class="flex w-full">
    <div class="m-auto bg-black text-white w-full h-screen">
      <div class="mt-10">
          <div class="text-center w-full">
        <h1 class="text-2xl mt-4">Tensorflow Object Detection</h1>
        <small>Try with cellphone only</small>
          </div>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center">
            <button
              v-if="!isStreaming"
              @click="openCamera"
              class="w-30 rounded bg-gradient-to-r from-gray-500 to-black text-white px-2 py-1 shadow-md "
            >
              Open Camera
            </button>
            <div v-else class="flex justify-between">
              <button
                @click="closeCamera"
                class="w-30 rounded bg-gradient-to-r from-pink-500 to-yellow-300 text-white px-2 py-1 shadow-md "
              >
                Close Camera
              </button>
              <button
                @click="snapshot"
                class="w-30 rounded bg-gradient-to-r from-pink-500 to-yellow-300 text-white px-2 py-1 shadow-md "
              >
                Snapshot
              </button>
            </div>
          </div>
          <video ref=" videoRef" autoplay="true" width="100" />
        </div>
        <div class="flex flex-wrap justify-center">
          <img
            ref="imgRef"
            src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60"
            width="200"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <button
              @click="detect"
              class="w-30 rounded bg-gradient-to-r from-purple-500 to-blue-600 text-white p-2 shadow-md "
            >
              <span v-if="isLoading">Loading...</span>
              <span v-else>Detect Object</span>
            </button>
            <div v-if="result.length > 0">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref("");
    const videoRef = ref("");
    const isLoading = ref(false);
    const isStreaming = ref(false);
    const result = ref([]);

    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;
      const model = await cocoSsd.load();
      // Classify the image.
      const predictions = await model.detect(img);
      result.value = predictions;
      isLoading.value = false;
    }

    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind === "videoinput");
        const camId = cams[0].deviceId;
        navigator.mediaDevices
          .getUserMedia({ video: { deviceId: { exact: camId } } })
          .then((stream) => {
            isStreaming.value = true;
            videoRef.value.srcObject = stream;
          });
      }
    }

    function closeCamera() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track) => track.stop());
      isStreaming.value = false;
    }

    function snapshot() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    }

    return {
      imgRef,
      result,
      detect,
      snapshot,
      isLoading,
      openCamera,
      videoRef,
      isStreaming,
      closeCamera,
    };
  },
};
</script>

<style></style>
