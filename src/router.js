import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AuthServiceMock from './services/AuthServiceMock.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "about" */ './views/Vote.vue'),
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "about" */ './views/Score.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (AuthServiceMock.loggedIn()) {
      next();
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
