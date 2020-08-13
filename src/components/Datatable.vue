<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="12" sm="12" md="8" xl="9">
          <span class="display-1 font-weight-light grey--text">{{
            title
          }}</span>
        </v-col>
        <v-col cols="12" sm="12" md="4" xl="3">
          <v-text-field
            outlined
            label="Search"
            v-model="search"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      flat
      :search="search"
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1 px-5"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    search: String,
    items: Array,
    headers: Array,
    title: String,
  },
  data: () => ({}),
};
</script>

<style>
.v-chip.bad {
  background-color: rgb(247, 33, 33);
}
.v-chip.unknown {
  background: rgb(245, 172, 36);
}
.v-chip.known {
  background: rgb(35, 202, 35);
}
</style>
