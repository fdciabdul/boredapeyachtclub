import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routesOptions = [
  {
    path: '/',
    name: 'Get Started',
    componentPath: 'GetStarted',
  },
  {
    path: '/home',
    name: 'Home',
    componentPath: 'Home',
  },
  {
    path: '/gallery',
    name: 'Gallery',
    componentPath: 'Gallery',
  },
];

const routes = routesOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/views/${route.componentPath}.vue`),
  };
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
