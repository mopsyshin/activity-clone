import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListView from './views/ListView.vue';
import ProductDetail from './views/ProductDetail.vue';
import MagazineDetail from './views/MagazineDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'activity-home',
      component: Home,
    },
    {
      path: '/list/:type',
      name: 'list-view',
      props: true,
      component: ListView,
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      props: true,
      component: ProductDetail,
    },
    {
      path: '/magazine/:id',
      name: 'magazine-detail',
      props: true,
      component: MagazineDetail,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
