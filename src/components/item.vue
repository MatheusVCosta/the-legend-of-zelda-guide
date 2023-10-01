<template>
    <div class="item">
        <img src="../assets/the-legend-of-zelda-nes/logo.png">
        <p>{{ item.name }}</p>
    </div>
</template>
<script>
export default {
    props: ['item']
}
</script>
<style>
    .item {
        width: 280px;
        height: 350px;
        margin: 50px 30px;

        border: 1px solid #d4ce46;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10px;
    }
    .item img {
        margin-top: 20px;
        width: 200px;
        height: 250px;
    }
    .item p {
        margin-top: 20px;
        font-size: 20px;
    }
</style>