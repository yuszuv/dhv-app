<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Streckmittel-Details">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
    </ActionBar>

    <FetchJson :url="detailUrl">
      <StackLayout slot-scope="{ response: detail, loading }">
        <ActivityIndicator v-if="loading" busy="true" />
        <Label v-else class="h1" :text="detail.title" />
        <!-- <Label class="h2" :text="detail.formattedLocation" /> -->
        <!-- <Label :text="description" /> -->
      </StackLayout>
    </FetchJson>
  </Page>
</template>

<script>
import FetchJson from './FetchJson.vue';

export default {
  components: { FetchJson },
  props: {
    id: {
      required: true
    }
  },

  // data() {
  //   return {
  //     detail: null,
  //   }
  // },

  computed: {
    detailUrl() {
      return `https://dhv-api.sternprodukt.de/cutting-agent-alerts/${this.id}`;
    },
  },

}
</script>
