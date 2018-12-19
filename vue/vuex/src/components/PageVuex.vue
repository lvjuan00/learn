<template>
  <div>
    <h1>vuex---{{$store.state.count}}</h1>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default{
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
