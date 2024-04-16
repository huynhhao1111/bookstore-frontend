import BookStore from "@/views/BookStore.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
        {
        path: "/",
        name: "bookstore",
        component: BookStore,
        },
        
        
{
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
        },
        {
            path: "/books/new",
            name: "book.add",
            component: () => import("@/views/BookAdd.vue"),
            
            },
];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;