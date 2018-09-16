<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Streckmittel-Details">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back"
      @tap="$router.push('/cutting-agent-alerts')"/>
    </ActionBar>

    <GridLayout>
      <Label :text="$route.params.id" />
    </GridLayout>
  </Page>
</template>

<script>
export default {}
</script>
