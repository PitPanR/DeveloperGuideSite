import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import home from "/src/view/home.vue";

const routes = [
    {
        path:"/", //路径描述
        name:"home",
        component: home // 主动引用，无论是否访问均加载页面
    },
]

const router = createRouter({
    history:createWebHistory(), // 跳转方式
    routes :routes // 路由配置
})
export default router