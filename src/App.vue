<template>
  <div id="app">
    <router-view />
    <customFooter />
  </div>
</template>

<script>
import customFooter from "./components/footer";
export default {
  name: "App",
  components: {
    customFooter: customFooter,
  },
};
</script>
<style lang="scss">
html {
  background-color: black;
}
</style>






/*  <router-link to="/">Home</router-link> | */