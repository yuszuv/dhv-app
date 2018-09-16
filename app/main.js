require("nativescript-vue").registerElement("RadCalendar", () => require("nativescript-ui-calendar").RadCalendar);

import Vue from 'nativescript-vue';

const calendarModule = require("nativescript-ui-calendar");

import router from './router';

import store from './store';

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({

  router,
  template: `<Frame><router-view/></Frame>`,

  store,

}).$start();
