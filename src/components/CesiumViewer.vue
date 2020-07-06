<template>
  <div>
    <div id="cesiumContainer"></div>
    <div id="floatButton">
      <el-button type="primary" size="mini" @click="addLayerT"
        >添加图层</el-button
      >
    </div>
  </div>
</template>

<script>
const Cesium = window.Cesium;
export default {
  data() {
    return {};
  },
  mounted() {
    this.initViewer();
  },
  methods: {
    initViewer() {
      this.$store.state.viewer = new Cesium.Viewer("cesiumContainer", {
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        imageryProvider: googleMapProvider
      });
      this.$store.state.viewer._cesiumWidget._creditContainer.style.display =
        "none";
      this.$store.state.viewer.scene.globe.showGroundAtmosphere = false;
      let googleMapProvider = new Cesium.UrlTemplateImageryProvider({
        url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
      });
    },
    addLayerT() {
      this.addLayer.addLayer(this.$store.state.viewer);
    }
    // addLayer() {
    //   let Terrain = new Cesium.SuperMapImageryProvider({
    //     url:
    //       "http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google"
    //   });
    //   this.$store.state.viewer.imageryLayers.addImageryProvider(Terrain);
    // }
  }
};
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#floatButton {
  position: relative;
  width: 10%;
  height: 10%;
}
</style>
