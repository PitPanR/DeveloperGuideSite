import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '/src/router/index.js'
import '@mdi/font/css/materialdesignicons.min.css'
import './assets/style/main.scss';

const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app')