import Vue from 'vue'
import {NotFound, routes} from "./router/firstRouter";

new Vue({
  el: '#app',
  computed: {
    ViewComponent() {
      return routes[window.location.pathname] || NotFound
    },
  },
  render(h) {
    return h(this.ViewComponent)
  },
})
