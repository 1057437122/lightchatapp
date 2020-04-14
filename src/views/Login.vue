<template>
  <div>
    <a-button type="primary" @click="login">Login</a-button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import { facebookUserLogin } from "../helper";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    async login() {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope("user_birthday");
      //read_custom_friendlists
      provider.addScope("user_friends");
      provider.setCustomParameters({
        display: "popup"
      });
      const ret = await facebookUserLogin(provider);
      if (!ret.success) {
        alert("Error");
        return;
      }
      this.$store.dispatch("userLogin", ret.response);
      this.$router.push("/about");
    }
  }
});
</script>
