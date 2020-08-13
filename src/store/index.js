import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "Neak Panhboth",
      role: "Alpha Admin",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
});
