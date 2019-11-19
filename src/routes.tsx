import VueRouter, { RouteConfig } from 'vue-router';
import BasicView from "./views/BasicView";


export const routes: RouteConfig[] = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    component: BasicView,
    path: '/'
  },
];

export default new VueRouter({
  routes
})