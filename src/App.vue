<template>
  <Header @optionMenu="getItemByType"></Header>
  <Main :data="data" :title="itemName"></Main>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/header.vue'
import Main from '@/components/main.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  data() {
    return {
      data: [],
      itemName: "games"
    }
  },
  components: {Header, Main, Footer},
  methods: {
    getItemByType(itemName) {
      this.itemName = itemName
      this.axios.get(itemName).then(res => {
        this.data = res.data.data
      })
    },
  },
  // created() {
  //     this.axios.get(this.itemName).then(res => {
  //       this.data = res.data.data
  //     })
  //     console.log(this.data)
  //   }

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #0e5135;
  color: #d4ce46;
  font-family: zelda-font;
}
@font-face {
    font-family: zelda-font;
    src: url('./assets/zelda-font.otf');
  }
#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
