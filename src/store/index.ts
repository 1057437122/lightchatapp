import Vue from "vue";
import Vuex from "vuex";
import { setToken, setId } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    uid: ""
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      state.uid = userInfo.uid;
      state.token = userInfo.accessToken;
    }
  },
  actions: {
    setUserInfo(context, userInfo) {
      setToken(userInfo.accessToken);
      setId(userInfo.id);
      context.commit("SET_USERINFO", userInfo);
    }
  },
  modules: {}
});
