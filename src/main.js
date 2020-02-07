import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
const http = axios.create({
  baseURL: "",
  timeout: 10000
});
Object.defineProperties(Vue.prototype, {
  $axios: {
    get() {
      return http;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
