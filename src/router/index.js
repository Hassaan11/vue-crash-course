import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../views/Home";
import UserComponent from "@/components/User";
import UserDetails from "@/components/UserDetails";
import RegisterComponent from "@/components/Register";
import LoginComponent from "@/components/Signin";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserComponent,
  },
  {
    path: "/register",
    name: "RegisterComponent",
    component: RegisterComponent,
  },
  {
    path: "/login",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/users",
    name: "UserList",
    component: UserComponent,
  },
  {
    path: "/users/:userId",
    name: "UserDetails",
    component: UserDetails,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
