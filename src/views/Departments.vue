<template>
  <v-container fluid>
    <Datatable :items="departments" :headers="headers" :search="search" title="DEPARTMENTS"></Datatable>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from "../components/Datatable";
import { getDepartments } from "../utilities/backend";
export default {
  name: "Home",
  components: { Datatable },
  data: () => ({
    departments: [],
    headers: [
      { text: "id", value: "_id" },
      { text: "name", value: "department_name" }
    ],
    search: ""
  }),
  methods: {
    async get_departments() {
      this.departments = await getDepartments();
      console.log(this.departments);
    }
  },
  created() {
    this.get_departments();
  }
};
</script>
