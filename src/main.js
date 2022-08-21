import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router/router";
import store from "./store";
import { makeServer } from "./server/server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(store)
  .mount("#app");
