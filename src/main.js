import { createApp } from "vue";
import "./assets/scss/style.scss";

// import router
import { router } from "./router";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
library.add(faPaperPlane);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
