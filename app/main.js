require("nativescript-vue").registerElement("RadCalendar", () => require("nativescript-ui-calendar").RadCalendar);

import Vue from 'nativescript-vue';

Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)

const calendarModule = require("nativescript-ui-calendar");
require("nativescript-vue").registerElement("CalendarMonthViewStyle", () => require("nativescript-ui-calendar").CalendarMonthViewStyle);

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
