<template>
  <v-container fluid>
    <v-btn class="mb-5" color="blue-grey" small dark link to="/add">ADD USER</v-btn>
    <Datatable :items="users" :headers="headers" :search="search" title="USERS"></Datatable>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from "../components/Datatable";

export default {
  name: "Home",
  components: { Datatable },
  data: () => ({
    users: [],
    headers: [
      { text: "id", value: "id" },
      { text: "name", value: "name" },
      { text: "role", value: "role" }
    ],
    search: ""
  }),
  methods: {}
};
</script>
