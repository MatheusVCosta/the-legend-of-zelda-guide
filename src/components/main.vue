<template >
    <dic class="main">
        <h1>The legend of zelda guide</h1>
        <p id="title">{{ title }}</p>
        <div class="container">
            <Item v-for="(data, i) in data" :key="i" :item="data" :title="title"></Item>
        </div>
    </dic>
</template>

<script>
import Item from "./item.vue"
export default {
    props: ['data', 'title'],
    components: {Item}
}
</script>
<style >
    h1, p{
        margin: 0;
        padding: 0;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main h1 {
        font-weight: 100;
        font-size: 60px;
        margin: 50px 0px 20px 0px;
        
    }
    .main #title {
        font-size: 40px;
    }
    .container {
        width:90vw;
        max-width: 2000px;
        border-radius: 15px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-bottom: 100px;

    }
</style>