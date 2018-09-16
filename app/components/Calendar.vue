<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Kalender">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <RadCalendar id="calendar" />

  </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 5);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>
