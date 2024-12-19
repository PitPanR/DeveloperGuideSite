import { createApp } from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from '/src/router/index.js'


const app = createApp(App);
app.use(router).use(Buefy).mount('#app')