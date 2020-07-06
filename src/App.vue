<template>
  <div id="app">
    <CesiumViewer />
  </div>
</template>

<script>
import CesiumViewer from "./components/CesiumViewer";
export default {
  name: "Home",
  components: {
    CesiumViewer
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #eee;
}
</style>
