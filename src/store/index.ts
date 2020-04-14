import Vue from "vue";
import Vuex from "vuex";
import { setToken, getToken } from "@/utils";
import { getMyInfo } from "@/api/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: "",
    id: "",
    name: ""
  },
  mutations: {
    SET_MYINFO(state, userInfo) {
      state.id = userInfo.id;
      state.name = userInfo.name;
    },
    SET_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    }
  },
  actions: {
    userLogin(context, accessToken) {
      setToken(accessToken);
      context.commit("SET_ACCESS_TOKEN", accessToken);
    },
    async getMyInfo(context) {
      if (!this.state.accessToken) {
        const accessToken = getToken();
        if (!accessToken) {
          return null;
        }
        context.commit("SET_ACCESS_TOKEN", accessToken);
      }
      // this is only allowed to call when there is a
      if (this.state.id && this.state.name) {
        return {
          id: this.state.id,
          name: this.state.name
        };
      } else {
        // get by api
        const { data } = await getMyInfo({ fields: "id,name" });
        context.commit("SET_MYINFO", data);
        return data;
      }
    }
  },
  modules: {}
});
