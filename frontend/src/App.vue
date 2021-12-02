<template>
    <div id="app">
        <Home/>
    </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
    name: 'App',
    components: {
        Home
    }
}
</script>

<style lang="scss">
// @import 'bootstrap/scss/bootstrap';
// @import 'bootstrap-vue/src/index';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #b5b5b5;
}

</style>
