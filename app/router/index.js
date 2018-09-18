import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import HelloWorld from '../components/HelloWorld';
import Counter from '../components/Counter';
import Calendar from '../components/Calendar';
import CuttingAgentsMap from '../components/CuttingAgentsMap';
import CuttingAgentsAlertDetail from '../components/CuttingAgentAlertsDetail';


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
    {
      path: '/cutting-agent-alerts/:id',
      component: CuttingAgentsAlertDetail,
      props: true,
      meta: {
        title: 'Cutting Agent Alert Details',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

export default router;
