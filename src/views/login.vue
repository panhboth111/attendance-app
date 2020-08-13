<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="10" sm="6" md="5">
        <v-card flat>
          <v-card-title class="headline blue--text">
            <div class>Sign In</div>
          </v-card-title>

          <v-card-text>
            <v-form v-model="valid" ref="login">
              <v-text-field
                label="Email"
                type="email"
                prepend-icon="mdi-account"
                v-model="signinUser.email"
              />

              <v-text-field
                label="Password"
                type="password"
                prepend-icon="mdi-lock"
                v-model="signinUser.pwd"
              />
            </v-form>
          </v-card-text>

          <v-alert color="red" :value="error" icon="close">The email or password is in correct.</v-alert>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn block x-small outlined class="blue--text" @click="signIn">Login</v-btn>
          </v-card-actions>
          <div class="caption font-weight-light text-center mt-8 px-10">
            <span class="blue--text">For got password?</span>
            Copyright © 2020 by WEB TEAM of Kirirom Institute of Technology
          </div>
          <div class="text-center">
            <v-btn text icon x-small class>
              <span class="text-lowercase">help</span>
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signin } from "../utilities/backend";
export default {
  props: {
    source: String
  },
  data() {
    return {
      valid: false,
      signinUser: {
        email: null,
        pwd: null
      },
      error: false
    };
  },
  methods: {
    async signIn() {
      await signin(this.signinUser);
    }
  },
  created() {}
};
</script>

<style></style>