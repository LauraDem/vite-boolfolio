import { createApp } from "vue";
import "./assets/scss/style.scss";

// import router
import { router } from "./router";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
