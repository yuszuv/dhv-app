<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$navigateTo(counterPage)">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button class="btn btn-primary" @tap="$navigateTo(calendarPage)">Kalender</Button>
      <Button class="btn btn-primary" @tap="$navigateTo(cuttingAgentsMapPage)">Streckmittel-Melder</Button>
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
