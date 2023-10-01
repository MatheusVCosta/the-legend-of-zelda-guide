<template>
    <div class="header">
        <div class="nav">
            <img src="../assets/logo.png" alt="">
            <ul>
                <li v-for="(item, i) in itemsMenu" :key="i" @click="menuSelected(i)">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsMenu: [
                "Games",
                "Staff",
                "Characters",
                "Monsters",
                "Bosses",
                "Dugens",
                "Places",
                "Items"
            ]
        }
    },
    methods: {
        menuSelected(i) {
            const optionMenu = this.itemsMenu[i]
            console.log(optionMenu)
        }
    }
}
</script>

<style>
.header {
    width: 100%;
    height: 100px;
    background-color:	#0d9263;
    display: flex;
    justify-content: center;
}
.nav {
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
}
.nav img {
    width: 200px;
}

.nav ul{
    /* width: 500px; */
    list-style: none;
    display: flex;
    flex-direction: row;
}
.nav ul li {
    margin: 10px;
    color: #d4ce46;
    font-family: zelda-font;
    font-weight: 100;
    font-size: 1.7rem;
    cursor:pointer
}
</style>