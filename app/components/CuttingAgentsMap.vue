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
import * as utils from "utils/utils";

export default {
  data () {
    return {
      markers: []
    };
  },

  methods: {
    onMapReady(args) {
      args.map.addMarkers(this.markers);
    }
  },

  created() {
    this.markers = [
      {
        id: 1,
        lat: 53.165190,
        lng: 12.486542,
        title: "16.09.18: Rahmstufe",
        subtitle: "Home of The Polyglot Developer!",
        onCalloutTap: () => {
          this.$router.push('/cutting-agent-alerts/1');
        }
      },
      {
        id: 2,
        lat: 53.131695,
        lng: 12.513761,
        title: "15.09.18: Burg Goldbeck",
        subtitle: "Home of The Polyglot Developer!",
        onCalloutTap: () => {
          this.$router.push('/cutting-agent-alerts/2');
        }
      },
      {
        id: 3,
        lat: 53.163232,
        lng: 12.485249,
        title: "04.05.18: Marktplatz Wittstock",
        subtitle: "Home of The Polyglot Developer!",
        onCalloutTap: () => {
          this.$router.push('/cutting-agent-alerts/3');
        }
      },
    ]
  }
};
</script>

<style scoped></style>
