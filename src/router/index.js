import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter) // 뷰 어플리케이션에 라우터 플러그인을 추가한다.

export const Home = {template: "<p>home page</p>"}
export const About = {template: "<p>about page</p>"}
export const NotFound = {template: "<p>Page not found</p>"}

export default new VueRouter({
  mode: "history",
  routes: [ // 라우트 정의 부분
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: '/login', component: {template: '<div>Login</div>'}},
    {path: '/logout', component: {template: '<div>Logout</div>'}},
    {path: '/posts', component: {template: '<div>Posts</div>'}},
    {path: '/posts/new', component: {template: '<div>New Post</div>'}},
    {path: '/posts/detail', component: {template: '<div>Post Detail</div>'}},
    {path: "*", component: NotFound},
  ]
})
