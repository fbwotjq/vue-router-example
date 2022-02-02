import Vue from "vue"
import VueRouter from "vue-router"
import Post from "../view/component/Post";

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
    {
      path: "/posts",
      component: {
        template: "<div>Posts <br/>" +
          "<router-link to='/posts/new'>New Post</router-link> " +
          "<router-link to='/posts/detail'>New Post</router-link> " +
          "<router-link to='/posts/1'>1</router-link> " +
          "<router-link to='/posts/2'>2</router-link> " +
          "<router-link to='/posts/3'>3</router-link> " +
          "<router-view></router-view>" +
          "</div>",
      },
      children: [ // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
        {path: "new", component: {template: "<div>New Post</div>"}},
        {path: "detail", component: {template: "<div>Post Detail</div>"}},
        {path: ':id', component: Post}
      ],
    },
    {path: "*", component: NotFound},
  ]
})
