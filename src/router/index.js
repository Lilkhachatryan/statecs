import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home";

const routes = [
    {
        path: '/',
        component: Home
    },
]

const router = new VueRouter({
    routes,
})

router.beforeEach((to, from, next) => next())

export default router;
