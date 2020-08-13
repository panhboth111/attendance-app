import Vue from "vue";
import Vuex from "vuex";
import { getUser } from "../utilities/backend";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async setUser({ commit }) {
      console.log("hiiii");
      const user = await getUser();
      console.log("user");
      console.log(user);
      commit("SET_USER", user);
    },
  },
  modules: {},
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
});
