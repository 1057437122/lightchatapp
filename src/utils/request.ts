import axios from "axios";
import store from "@/store";
import { message } from "ant-design-vue";
const service = axios.create({
  baseURL: "https://graph.facebook.com/v6.0", // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
  config => {
    if (store.state.accessToken) {
      config.params["access_token"] = store.state.accessToken;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    //error.response.data.error.message
    message.info("error" + error.message);
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
