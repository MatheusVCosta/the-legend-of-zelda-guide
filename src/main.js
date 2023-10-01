import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
const axiosInstance = axios.create({
    baseURL: "https://zelda.fanapis.com/api"
})

app.use(VueAxios, axiosInstance)
app.mount('#app')
