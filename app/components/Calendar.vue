<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Kalender">

    <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
      <!-- <ios> -->
      <!--   <ActionItem text="Options" ios.position="right" @tap="onOptionsTapped" /> -->
      <!-- </ios> -->
      <android>
        <ActionItem text="Week" android.position="popup" @tap="setViewMode('Week')" />
        <ActionItem text="Month" android.position="popup" @tap="setViewMode('Month')" />
        <ActionItem text="Month names" android.position="popup" @tap="setViewMode('MonthNames')" />
        <ActionItem text="Year" android.position="popup" @tap="setViewMode('Year')" />
        <ActionItem text="Day" android.position="popup" @tap="setViewMode('Day')" />
      </android>
    </ActionBar.actionItems>

    </ActionBar>

    <RadCalendar id="calendar"
      :eventSource="calendarEvents" 
      :viewMode="calendarViewMode"

      eventsViewMode="Inline" 
      selectionMode="Single" 
      transitionMode="Stack" 
      locale="de-DE"
      
      @inlineEventSelected="onInlineEventSelected"
      />


  </Page>
</template>

<script>
  import { mapActions } from 'vuex';
  import { Color } from 'color';
  import * as calendarModule from 'nativescript-ui-calendar';

  export default {

    data() {
      return {
        calendarEvents: [],
        calendarViewMode: 'Month'
      }
    },

    methods:{
      onInlineEventSelected(args) {
        console.log(args.object);
      },
      setViewMode(mode) {
        this.calendarViewMode = mode;
      },

    },

    created() {
      let events = [];
      let now = new Date();
      let startDate;
      let endDate;
      let event;
      let colors = [new Color("#f00"), new Color("#007825"), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
      for (let i = 1; i < 10; i++) {
        startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
        endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
        event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
        events.push(event);
        if (i % 3 == 0) {
          event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
          events.push(event);
        }
      }
      this.calendarEvents = events;
    },

  };
</script>
