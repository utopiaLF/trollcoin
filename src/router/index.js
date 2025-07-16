import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Referrals from "../views/Referrals.vue";
import Leaderboard from "../views/Leaderboard.vue";

const routes = [
    { path: '/', component: Home},
    { path: '/refs', component: Referrals},
    { path: '/leaderboard', component: Leaderboard},
    { path: '/about', component: About}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;