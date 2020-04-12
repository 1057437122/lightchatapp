<template>
  <div>
    <a-button type="primary" @click="login">Login</a-button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    login() {
      console.log("login");
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("user_birthday");
      provider.setCustomParameters({
        display: "popup"
      });
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          console.log(result);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
</script>
