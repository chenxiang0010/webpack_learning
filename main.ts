import { createApp } from "vue";
// ./src/app就是./src/App.vue
import App from "./src/App.vue";
import "./src/assets/index.less";
import "./src/assets/style.css";
import "./src/test/date/printDate";

// 把app.vue挂在到index.html中id为app的节点下
createApp(App).mount("#app");
