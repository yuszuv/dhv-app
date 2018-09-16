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
            return { };
        },
        methods: {
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: 53.165190,
                        lng: 12.486542,
                        title: "Tracy, CA",
                        subtitle: "Home of The Polyglot Developer!",
                        onCalloutTap: () => {
                            utils.openUrl("https://www.thepolyglotdeveloper.com");
                        }
                    }
                ]);
            }
        }
    };
</script>

<style scoped></style>
