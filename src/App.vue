<template>
  <Header></Header>
  <h1>The legend zelda guide</h1>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {Header}

}
</script>

<style>
body {
  background-color: #0e5135;
  margin: 0;
  padding: 0;
}
@font-face {
    font-family: zelda-font;
    src: url('./assets/zelda-font.otf');
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
}
#app h1 {
  color: #d4ce46;
  font-family: zelda-font;
  font-weight: 100;
  font-size: 100px;
}
</style>
