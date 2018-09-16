<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button class="btn btn-primary" @tap="$router.push('/calendar')">Kalender</Button>
      <Button class="btn btn-primary" @tap="$router.push('/cutting-agent-alerts')">Streckmittel-Melder</Button>
    </StackLayout>

  </Page>
</template>
