import Home from "../../page/Home/Home.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Person from "../../page/Person/Person.vue";
import NotFound from "../../page/NotFound/NotFound.vue";
import Admin from "@/page/Admin/Admin.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/person",
        component: localStorage.getItem("access_token") ? Person : NotFound,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
    {
        path: "/admin",
        component: Admin,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
