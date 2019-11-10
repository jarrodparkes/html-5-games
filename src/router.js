import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
  },
  {
    path: "/dodge",
    name: "dodge",
    component: () => import(/* webpackChunkName: "dodge" */ "./views/Dodge.vue")
  },
  {
    path: "/snake",
    name: "snake",
    component: () => import(/* webpackChunkName: "snake" */ "./views/Snake.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
