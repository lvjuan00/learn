<template>
  <div id="app">
    <HelloWorld msg="learn1"/>
    <PageVuex/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageVuex from './components/PageVuex'
export default {
  name: 'app',
  components: {
    HelloWorld,
    PageVuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
