<template>
  <v-container>
    <v-card>
      <v-container>
        <v-btn color="red" dark small link to="/users">back</v-btn>
        <v-form class="ma-12" @submit.prevent="addUser">
          <v-text-field label="name" outlined dense v-model="user.name"></v-text-field>
          <v-text-field label="email" outlined dense v-model="user.email"></v-text-field>
          <v-text-field label="password" outlined dense v-model="user.pwd"></v-text-field>
          <v-switch label="admin?" v-model="user.admin"></v-switch>
          <v-btn color="blue" block dark small type="submit">SUBMIT</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import { createUser } from "../utilities/backend";
export default {
  data: () => ({
    user: {
      name: null,
      email: null,
      pwd: null,
      admin: false
    }
  }),
  methods: {
    async addUser() {
      await createUser(this.user);
    }
  }
};
</script>

<style>
</style>