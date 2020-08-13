import Vue from "vue";
import VueRouter from "vue-router";
import Employees from "../views/Employees.vue";
import EmployeeHome from "../views/EmployeeHome.vue";
import Attendance from "../views/Attendance.vue";
import Users from "../views/Users.vue";
import login from "../views/login.vue";
import addUser from "../views/addUser.vue";
import Departments from "../views/Departments.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "employees",
    component: Employees,
  },
  {
    path: "/home",
    name: "employee_home",
    component: EmployeeHome,
  },
  {
    path: "/attendance",
    component: Attendance,
    name: "attendance",
  },
  {
    path: "/users",
    component: Users,
    name: "users",
  },
  {
    path: "/add",
    component: addUser,
    name: "add",
  },
  {
    path: "/login",
    component: login,
    name: "login",
  },
  {
    path: "/departments",
    component: Departments,
    name: "departments",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
