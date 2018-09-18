<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Streckmittel-Melder">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <FetchJson :url="url">
      <StackLayout slot-scope="{ response: data, loading }">
        <ActivityIndicator v-if="loading" busy="true" />
        <GridLayout v-else>
          <Mapbox
            accessToken="pk.eyJ1IjoieXVzenV2IiwiYSI6ImNqbTR3MnNhZjBud3kza3FwNG9lcXRmbjMifQ.Cf9FhKTcQL6gvUh2yvWA2g"
            mapStyle="streets"
            latitude="53.165190"
            longitude="12.486542"
            hideCompass="false"
            zoomLevel="12"
            showUserLocation="true"
            disableZoom="false"
            disableRotation="false"
            disableScroll="false"
            disableTilt="false"
            @mapReady="onMapReady($event, data)"/>
        </GridLayout>
      </StackLayout>
    </FetchJson>
  </Page>
</template>

<script>
import * as http from 'http';
import CuttingAgentAlertsDetail from './CuttingAgentAlertsDetail';
import FetchJson from './FetchJson.vue';

export default {
  components: { CuttingAgentAlertsDetail, FetchJson },

  props: {
    url: {
      type: String,
      default: 'https://dhv-api.sternprodukt.de/cutting-agent-alerts'
    },
  },

  data () {
    return {
    };
  },

  methods: {
    onMapReady(args, data) {
      let markers = [];
      data.map(json => {
        markers.push({ ...json, onCalloutTap: () => {
          this.$navigateTo(CuttingAgentAlertsDetail, {
            context: {
              propsData: {
                id: json.id,
              },
            }
          });
        }})
      })
      args.map.addMarkers(markers);
    }
  },

};
</script>

<style scoped></style>
