<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      v-if="$route.name !== 'login'"
      :src="sidebar"
    >
      <v-list nav dense class="display-1">
        <div class="text-center">
          <span class="white--text font-weight-light">DASH</span>
          <span class="blue-grey--text font-weight-medium">BOARD</span>
        </div>
        <v-divider></v-divider>
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <v-icon>{{ account }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title font-weight-light">{{
              user.name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle text-uppercase">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar flat app dense color="white" v-if="$route.name !== 'login'">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>{{ toggle }}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import {
  mdiAccount as employees,
  mdiAccountCircle as account,
  mdiMenu as toggle,
  mdiMenuRight as right,
  mdiNotebook as attendance,
  mdiHome as Home,
  mdiAccountBoxMultiple as users,
} from "@mdi/js";
import sidebar from "../assets/sidebar-2.jpg";
export default {
  name: "App",
  components: {},
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  data: () => ({
    right,
    sidebar,
    account,
    toggle,
    miniVariant: false,
    drawer: true,
    items: [
      { title: "EMPLOYEES", icon: employees, url: "/" },
      { title: "ATTENDANCE", icon: attendance, url: "/attendance" },
      { title: "USERS", icon: users, url: "/users" },
    ],
    employeeItems: [{ title: "Home", icon: Home, url: "/home" }],
  }),
  methods: {},
};
</script>

<style></style>
