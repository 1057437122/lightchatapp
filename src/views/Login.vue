<template>
  <div>
    <a-button type="primary" @click="login">Login</a-button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import * as firebase from "firebase/app";
import "firebase/auth";
import { setToken } from "../utils";
import axios from "axios";
import { facebookUserLogin } from "../helper";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    async login() {
      console.log("login");
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

      axios
        .get(
          `https://graph.facebook.com/v6.0/me?fields=id,name&access_token=${ret.response}`
        )
        .then(res => {
          console.log(res);
          debugger;
          //
          this.$store.dispatch("setUserInfo", {
            uid: res.data.id,
            accessToken: ret.response
          });
        });
    }
  }
});
</script>
