import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// @ts-ignore
import Welcome from "../Pages/Welcome.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
// @ts-ignore
import AddOrg from "../Pages/AddOrg.vue";
import {
  authGuard
} from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/AddOrg",
    name: "AddOrg",
    component: AddOrg,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;