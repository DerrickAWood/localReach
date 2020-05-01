<template>
  <div class="home">
    <div class="row text-center">
      <div class="col-8 justify-content-start">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Organizations"
            aria-label="Search"
            v-model="search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0 mr-2"
            @click="searchOrgs()"
            type="submit"
          >Search</button>
        </form>
      </div>
      <div class="col-1 d-flex justify-content-end">
        <button class="btn btn-sm btn-primary" @click="next()">NEXT</button>
      </div>
      <div class="col-11">
        <img class="img-fluid w-80" :src="orgData.picture" />
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12">
        <h1>{{orgData.name}}</h1>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-6 offset-3">
        <button class="btn btn-block btn-primary" @click="donate()">Donate</button>
      </div>
    </div>
    <hr />
    <org-details></org-details>
  </div>
</template>

<script>
import OrgDetails from "../components/OrgDetails";
export default {
  name: "home",

  data() {
    return {
      search: ""
    };
  },
  computed: {
    orgData() {
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
    Orgs() {
      return this.$store.state.orgs;
    },
    filteredList() {
      let postList = this.$store.state.orgs;
      return postList.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
        //return post.address.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    //debugger
    this.$store.dispatch("getOrgs");
    //this.$store.dispatch("next", 0);
  },
  methods: {
    next() {
      let currentOrg = 0;
      currentOrg = this.currentIndex;
      currentOrg += 1;
      if (currentOrg == this.Orgs.length) {
        currentOrg = 0;
      }
      this.$store.dispatch("next", currentOrg);
    },
    donate(donationType) {
      let amount = 0;
      amount = prompt("How much do you want to donate?", this.profile.default);

      if (amount) {
        let donation = {
          amount: amount,
          userId: this.profile.id,
          organizationId: this.orgData.id
        };
        console.log("from donateDefault", donation);
        this.$store.dispatch("donateDefault", donation);
      }
    },
    async searchOrgs() {
      console.log("searchOrgs", this.filteredList);
      console.log("searchOrgs", this.filteredList[0]);
      this.$store.commit("setActiveOrg", this.filteredList[0]);
    }
  },
  components: { OrgDetails }
};
</script>

<style scoped>
img {
  max-width: 85%;
  min-width: 75%;
}
</style>
