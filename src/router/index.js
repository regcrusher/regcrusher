import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Project from '@/components/Project';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/project/:projectkey',
      name: 'project',
      component: Project
    }
  ]
});
