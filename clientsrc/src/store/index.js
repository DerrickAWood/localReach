import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    activeOrg:{},
    orgs:[]
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setActiveOrg(state, org) {
      state.activeOrg = org
    },
    setOrgs(state, orgs) {
      state.orgs = orgs
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getOrgs({ commit, dispatch }) {
      try {
        let res = await api.get('organizations');
        //commit("setProfile", res.data);
        commit('setOrgs', res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addOrg({ commit, dispatch }, orgData) {
      try {
        let res = await api.post("organizations/",orgData );
        this.dispatch("getOrgs")
        console.log("addOrg",res.data)
        commit('setActiveOrg', res.data);
        //this.dispatch("getOrg", res.data)
      } catch (error) {
        console.error(error);
      }
    }, 
    //changeProfile
    async changeProfile({ commit, dispatch }, profileData) {
      //console.log("changeProfile", profileData)
      try {
        let res = await api.put("profile/" + profileData.id ,profileData );
        console.log("changeProfile", res.data)
        //this.dispatch("getProfile")
        //console.log("addOrg",res.data)
        //commit('setActiveOrg', res.data);
        //this.dispatch("getOrg", res.data)
      } catch (error) {
        console.error(error);
      }
    }

  }
});
