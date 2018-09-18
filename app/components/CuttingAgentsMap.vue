<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Streckmittel-Melder">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    <GridLayout>
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
        @mapReady="onMapReady($event)"/>
    </GridLayout>
  </Page>
</template>

<script>
import * as http from 'http';
import CuttingAgentAlertsDetail from './CuttingAgentAlertsDetail';

export default {
  components: { CuttingAgentAlertsDetail },
  data () {
    return {
      map: null
    };
  },

  methods: {
    onMapReady(args) {
      this.map = args.map;
    }
  },

  mounted() {
    fetch("https://dhv-api.sternprodukt.de/cutting-agent-alerts", {
      headers: { 'Authorization': 'Bearer GO13TNBbf5jJ6Ts8xf64d8GetfpnLSaj' }
    })
      .then(response => response.json(), error => console.log(error))
      .then(data => {
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
        this.map.addMarkers(markers);
      })
    //})
  },

};
</script>

<style scoped></style>
