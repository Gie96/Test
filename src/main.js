import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

import { Button, Select } from "element-ui";
Vue.use(Button);
Vue.use(Select);

import addLayer from "./js/addImageryProcider";
Vue.prototype.addLayer = addLayer;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
