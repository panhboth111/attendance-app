<template>
  <v-app>
    <AppBar v-if="$router.name !== 'login'" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import cookie from "./utilities/cookie";
export default {
  name: "App",

  components: {
    AppBar
  },

  data: () => ({
    user: null
  }),
  methods: {
    async getUser() {
      if (this.$route.name !== "login") {
        await this.$store.dispatch("setUser");
        this.user = this.$store.state.user;
      }
    },
    authorization() {
      const auth_token = cookie.getCookie("auth-token");
      const route_name = this.$route.name;
      const role = this.user.role;
      console.log(auth_token);
      if (auth_token && route_name == "login") window.location.replace("/");
      if (!auth_token && route_name != "login")
        window.location.replace("/login");
      if (
        role !== "Super Admin" &&
        role !== "Admin" &&
        route_name !== "employee_home"
      )
        window.location.replace("/home");
      // if (role == "super admin" && route_name == "employee_home")
      //   window.location.replace("/");
    }
  },
  async created() {
    await this.getUser();
    await this.authorization();
    console.log(this.$store.state.user);
  }
};
</script>
