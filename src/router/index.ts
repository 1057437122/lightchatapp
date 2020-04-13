import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import { auth } from "../helper";
// import * as firebase from "firebase/app";
// import "firebase/auth";
import { getToken } from "@/utils";
import store from "@/store";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  // const currentUser = firebase.auth().currentUser;
  let token: string | undefined = store.state.token;
  if (!token) token = getToken();
  debugger;
  if (requiresAuth && !token) {
    next("/login");
  } else if (requiresAuth && token) {
    next();
  } else {
    next();
  }
});
export default router;
