import { createApp } from "vue";
import App from "./App.vue";

import MyFirstComponent from "@/components/MyFirstComponent";

const app = createApp(App);
app.component("MyFirstComponent", MyFirstComponent);
app.mount("#app");
