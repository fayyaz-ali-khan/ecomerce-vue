import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home/HomeView.vue";
import MyAccountView from "../views/MyAccount/MyAccountView.vue";
import MyWishlist from "../views/MyAccount/WishlistView.vue";
import AuthView from "../views/Auth/AuthView.vue";
import ContactUs from "../views/ContactUs/ContactUsView.vue";
import { useAuth } from "../stores/auth.js";

const mainRoutes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/shop",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Shop/ShopView.vue"),
  },
];
const authRoutes = [
  {
    path: "/login",
    name: "Auth",
    component: AuthView,
    beforeEnter: (to, from, next) => {
      let auth = useAuth();
      if (auth.isAuth) {
        router.replace({ path: "/" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,

    {
      path: "/my-account",
      name: "my-account",
      component: MyWishlist,
    },
    {
      path: "/my-whishlist",
      name: "my-whishlist",
      component: MyAccountView,
    },
    ...authRoutes,
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs,
    },
  ],
});

export default router;
