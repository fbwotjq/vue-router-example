import Vue from "vue"
import VueRouter from "vue-router"

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

export const Home = { template: "<p>home page</p>" }
export const About = { template: "<p>about page</p>" }
export const NotFound = { template: "<p>Page not found</p>" }

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "*", component: NotFound },
  ],
})

export default router
