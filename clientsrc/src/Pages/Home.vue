<template>
  <div class="home container-fluid">
    <div class="row justify-content-between">
      <form class="form-inline my-2 my-lg-0 m-lg-2">
        <input
          class="form-control mr-sm-2 col-6"
          type="search"
          placeholder="Organization or Location"
          aria-label="Search"
          v-model="search"
        />
        <button class="btn btn-primary my-2 my-sm-0" @click="searchOrgs()" type="submit">Search</button>
      </form>
      <div>
        <button class="btn btn-primary my-2 my-sm-0 mr-2 mt-3 mt-lg-2" @click="next()">NEXT</button>
      </div>
      <div class="col-12 text-center">
        <h1 class="card-title">{{orgData.name}}</h1>
      </div>
    </div>

    <div class="card bg-dark text-white">
      <img :src="orgData.picture" class="card-img" alt />
      <div class="card-img-overlay text-center text-dark"></div>
    </div>

    <OrgDonation :orgData="orgData" v-if="orgData"></OrgDonation>
    <hr />
    <org-details></org-details>
  </div>
</template>

<script>
import OrgDonation from "../components/OrgDonation";
import OrgDetails from "../components/OrgDetails";
export default {
  name: "home",

  data() {
    return {
      search: "",
      searchLocations: "",
      loaded: false
      //product: { price: 5, description: "You made a donation" }
    };
  },
  computed: {
    orgData() {
      console.log("orgData", this.$store.state.activeOrg);
      return this.$store.state.activeOrg;
    },
    profile() {
      console.log("from profilex", this.$store.state.profile);
      return this.$store.state.profile;
    },
    currentIndex() {
      return this.$store.state.orgIndex;
    },
    numOrgs() {
      return this.$store.state.orgs.length;
    },
    orgs() {
      return this.$store.state.orgs;
    },
    filteredList() {
      let out = [];
      let list = this.$store.state.orgs;

      for (let i = 0; i < list.length; i++) {
        let listItem = list[i];
        if (
          listItem.name.toLowerCase().includes(this.search.toLowerCase()) ||
          listItem.address.toLowerCase().includes(this.search.toLowerCase())
        ) {
          out.push(listItem);
        }
      }
      this.$store.commit("setFilteredOrgs", out);
      return out;
    }
  },
  mounted() {
    this.$store.dispatch("getOrgs");
  },
  methods: {
    next() {
      // console.log("next", this.orgData.clientId);
      let currentOrg = 0;
      currentOrg = this.currentIndex;
      currentOrg += 1;
      if (currentOrg == this.filteredList.length) {
        currentOrg = 0;
      }
      this.$store.dispatch("next", currentOrg);
    },

    async searchOrgs() {
      this.$store.commit("setActiveOrg", this.filteredList[0]);
    }
  },
  components: { OrgDetails, OrgDonation }
};
</script>

<style scoped>
img {
  max-height: 85%;
  min-height: 75%;
}
</style>
