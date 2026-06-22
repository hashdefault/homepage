import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./assets/design/styles.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
