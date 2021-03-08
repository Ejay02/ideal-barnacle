<template>
  <section class="mt-5 text-center">
    <button class="border px-2 rounded" @click="loginwithGoogle">
      Login With Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
    methods: {
    loginwithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
         this.$emit("close-login-from-google");
      });
        },
    },
}
</script>

<style></style>
