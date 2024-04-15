import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/pages/Main';
import Registration from '@/pages/Registration';
import Login from '@/pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'main',
      path: '/',
      component: Main
    },
    {
      name: 'registration',
      path: '/registration/',
      component: Registration
    },
    {
      name: 'login',
      path: '/login/',
      component: Login
    }
  ]
});