import Vue from 'vue'
import router from "./router"; // import {NotFound, routes} from "./router/firstRouter";
import App from './App.vue'

new Vue({
  el: "#app",
  render: h => h(App),
  // 라우터 객체를 넘겨준다
  router,
})
