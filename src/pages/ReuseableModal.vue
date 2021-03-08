<template>
  <section class="flex w-full flex-wrap">
    <div class=" bg-black text-white w-full h-screen">
      <h1 class="text-2xl my-5">Reuseable Modal</h1>
      <Modal v-if="isRedModalOpen" @close="isRedModalOpen = false">
        <template #title>Red Modal</template>
        <template #body>
          <p>Hey there! This is slot, slotting. 😉</p>
        </template>
      </Modal>
      <button
        class="border rounded px-2 mx-4 bg-yellow-300 text-white"
        @click="isRedModalOpen = true"
      >
        Red Modal
      </button>
      <Modal v-if="isBlackModalOpen" @close="isBlackModalOpen = false">
        <template #title>Black Modal</template>
        <template #body>
          <p>🏄‍♀️</p>
        </template>
      </Modal>

      <button
        class="border rounded px-2 mx-4 bg-yellow-300 text-white"
        @click="isBlackModalOpen = true"
      >
        Black Modal
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlackModalOpen = ref(false);
    return { isRedModalOpen, isBlackModalOpen };
  },
};
</script>

<style></style>
