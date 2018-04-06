<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Appfooter from "./components/AppFooter";
export default {
  name: "app",
  components: {
    //Hello,
    Navbar,
    Appfooter,
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>
