import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import playground from '../views/playGround.vue';
import forIf from '../views/forIf.vue';


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/play',
    name: 'play',
    component: playground,
  },
  {
    path: '/forif',
    name: 'forIf',
    component: forIf,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;