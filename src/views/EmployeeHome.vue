<template>
  <v-container>
    <v-card>
      <v-container>
        <v-row>
          <v-col md="3" cols="12" sm="12" xl="3">
            <v-avatar size="150">
              <v-icon>{{profile}}</v-icon>
            </v-avatar>
          </v-col>
          <v-col md="9" cols="12" sm="12" xl="9">
            <v-card-title class="display-2 font-weight-light">{{user.name}}</v-card-title>
            <v-card-text class="headline font-weight-thin">{{user.email}}</v-card-text>
          </v-col>
        </v-row>
        <v-btn block class="mb-2" color="blue" dark @click="checkin">CHECK IN</v-btn>
        <v-btn block outlined color="red" @click="checkout">CHECK OUT</v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { mdiAccountCircle as profile } from "@mdi/js";
import { checkIn, checkOut } from "../utilities/backend";
export default {
  data: () => ({
    user: {},
    profile
  }),
  methods: {
    getUser() {
      this.user = this.$store.state.user;
    },
    async checkin() {
      const result = await checkIn();

      alert(result.message);
    },
    async checkout() {
      const result = await checkOut();
      alert(result.message);
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<style>
</style>