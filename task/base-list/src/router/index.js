import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// import BookListView from "../views/BookListView.vue";

// One way for lazy loading
// const BookListView = () =>
//   import(/* webpackChunkName: "books" */ "../views/BookListView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/books",
    name: "books",
    // Works with the lazy loading as import
    // component: BookListView,
    component: () =>
      import(/* webpackChunkName: "books" */ "../views/BookListView.vue"),
  },
  {
    path: "/books/:id",
    name: "booksDetail",
    component: () => import("../views/BooksDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
