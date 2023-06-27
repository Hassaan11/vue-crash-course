import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

createApp(App)
  .use(router)
  .use(Vue3Toasity, {
    autoClose: 3000,
  })
  .mount("#app");
