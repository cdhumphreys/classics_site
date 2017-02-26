import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import Main from 'components/Main';
import Plot from 'components/Plot';
import Revise from 'components/Revise';
import Test from 'components/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/plot',
      name: 'Plot',
      component: Plot
    },
    {
      path: '/plot/revise/:bookNumber',
      name: 'Revise',
      component: Revise
    },
    {
      path: '/plot/test/:bookNumber',
      name: 'Test',
      component: Test
    }
  ]
});
