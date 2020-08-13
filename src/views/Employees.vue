<template>
  <v-container fluid>
    <Datatable :items="users" :headers="headers" :search="search" title="EMPLOYEES"></Datatable>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from "../components/Datatable";
import { getEmployees } from "../utilities/backend";
export default {
  name: "Home",
  components: { Datatable },
  data: () => ({
    users: [],
    headers: [
      { text: "id", value: "_id" },
      { text: "name", value: "name" },
      { text: "email", value: "email" },
      { text: "department", value: "department_Id.department_name" },
      { text: "absents", value: "absents" }
    ],
    search: ""
  }),
  methods: {
    async get_employess() {
      this.users = await getEmployees();
    }
  },
  created() {
    this.get_employess();
  }
};
</script>
