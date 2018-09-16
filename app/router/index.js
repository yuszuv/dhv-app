import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Calendar from '../components/Calendar';
import CuttingAgentsMap from '../components/CuttingAgentsMap';

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {
      path: '/calendar',
      component: Calendar,
      meta: {
        title: 'Calendar',
      },
    },
    {
      path: '/cutting-agent-alerts',
      component: CuttingAgentsMap,
      meta: {
        title: 'Cutting Agent Alerts',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/cutting-agent-alerts');

export default router;
