let Cesium = window.Cesium;
function addLayer(viewer) {
  let Terrain = new Cesium.SuperMapImageryProvider({
    url:
      "http://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google"
  });
  viewer.imageryLayers.addImageryProvider(Terrain);
}
export default {
  addLayer
};
