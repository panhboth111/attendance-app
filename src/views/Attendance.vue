<template>
  <v-container fluid>
    <Datatable :items="workchecks" :headers="headers" :search="search" title="EMPLOYEES"></Datatable>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Datatable from "../components/Datatable";
import { getWorkChecks } from "../utilities/backend";
export default {
  name: "Home",
  components: { Datatable },
  data: () => ({
    workchecks: [],
    headers: [
      { text: "id", value: "_id" },
      { text: "name", value: "name" },
      { text: "check in", value: "check_In" },
      { text: "check out", value: "check_Out" }
    ],
    search: ""
  }),
  methods: {
    async get_workchecks() {
      this.workchecks = await getWorkChecks();
    }
  },
  created() {
    this.get_workchecks();
  }
};
</script>
