<template>
    <div class="item" @click="openModal()">
        <img v-if="loadImages != ''" :src="loadImages">
        <img v-else src="../assets/not-found-img.png" alt="" style="width: 150px; height: 150px;">
         
        <p>{{ item.name }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [],
            srcImages:[
                {name : "The Legend of Zelda", folder: "the-legend-of-zelda-nes", file: "capa.png"},
                {name : "The Legend of Zelda: A Link to the Past", folder: "tloz-a-link-to-the-past", file: "capa.jpg"},
                {name : "The Legend of Zelda: Ocarina of Time", folder: "tloz-ocarina-of-time", file: "capa.jpg"},
                {name : "The Legend of Zelda: Oracle of Ages", folder: "tloz-oracle-of-age", file: "capa.jpg"}, 
                {name : "The Legend of Zelda: Link's Awakening DX", folder: "tloz-link's-awakening-dx", file: "capa.jpg"},
                {name : "The Legend of Zelda: Majora's Mask", folder: "tloz-majora's-mask", file: "capa.png"},
                {name : "Zelda II: The Adventure of Link", folder: "tloz-the-adventure-of-link", file: "capa.jpg"},
                {name : "The Legend of Zelda: The Wind Waker", folder: "tloz-the-wind-waker", file: "capa.jpg"},
                //Characters
                {name : "Anjean", folder: "tloz", file: "anjean.png"},
                {name : "Animal Companion", folder: "tloz", file: "animalcompanion.png"},
                {name : "Ancient Oven", folder: "tloz", file: "ancientoven.png"},
                {name : "Angler Fish", folder: "tloz", file: "anglefish.png"},
                {name : "Captain Krin", folder: "tloz", file: "captainkrin.jpg"},
                {name : "Cara", folder: "tloz", file: "cara.jpg"},
                {name : "Anche", folder: "tloz", file: "Anche.jpg"},
                {name : "Carben", folder: "tloz", file: "carben.png"},
            ],
        }
    },
    props: ['item', 'title'],
    methods: {
        openModal() {
            const url = `${this.title}/${this.item.id}`
            let teste = []
            this.axios.get(url).then(res => {
                teste = res.data
            })
            console.log(teste)
        }
    },
    computed: {
        loadImages() {
            let filesrc = ""
            this.srcImages.filter(src => {
                if (this.item.name == src.name) {
                    filesrc = `./${src.folder}/${src.file}`
                }

            })
            console.log(filesrc)
            return filesrc
        }
    }
}
</script>
<style>
    .item:hover {
        transform: scale(1.1);
    }
    .item {
        width: 300px;
        height: 350px;
        margin: 50px 30px;

        box-shadow:0px 0px 5px 0px rgba(0,0,0,0.75);
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10px;

        cursor: pointer;
    }
    .item img {
        margin-top: 20px;
        width: 250px;
        height: 250px;
    }
    .item p {
        margin-top: 20px;
        font-size: 20px;
    }
</style>