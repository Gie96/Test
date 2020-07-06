import Vue from "vue";
import VueRouter from "vue-router";
// eslint-disable-next-line no-unused-vars
import Home from "../views/Home.vue";
// eslint-disable-next-line no-unused-vars

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
