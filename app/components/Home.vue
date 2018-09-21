<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary btn-green" @tap="$navigateTo(calendarPage)">Kalender</Button>
      <Button class="btn btn-primary btn-green" @tap="$navigateTo(cuttingAgentsMapPage)">Streckmittel-Melder</Button>
    </StackLayout>

  </Page>
</template>

<script>
import Counter from './Counter'
import HelloWorld from './HelloWorld'
import Calendar from './Calendar'
import CuttingAgentsMap from './CuttingAgentsMap'

export default {
  data() {
    return {
      counterPage: Counter,
      helloWorldPage: HelloWorld,
      calendarPage: Calendar,
      cuttingAgentsMapPage: CuttingAgentsMap
    }
  }
}
</script>

<style scoped>
.btn-green {
  background-color: #007825;
}
</style>
