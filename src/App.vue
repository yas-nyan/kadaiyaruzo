<template>
  <div id="app">
    <navbar></navbar>
    <workingspace></workingspace>
    <appfooter></appfooter>
  </div>
</template>

<script>
//import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Workingspace from "./components/Workingspace";
import Appfooter from "./components/AppFooter";
export default {
  name: "app",
  components: {
    //Hello,
    Navbar,
    Workingspace,
    Appfooter
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
