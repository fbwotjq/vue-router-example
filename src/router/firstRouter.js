import App from '../App.vue'

export const Home = { template: "<p>home page</p>" }
export const About = { template: "<p>about page</p>" }
export const NotFound = { template: "<p>Page not found</p>" }
export const routes = {
  "/": Home,
  "/about": About,
  "/temp": App
}
