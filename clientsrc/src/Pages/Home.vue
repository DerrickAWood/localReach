<template>
  <div class="home">
    <div class="row text-center">
      <div class="col-11">
        <img class="img-fluid w-80" :src="orgData.picture" />
      </div>
      <div class="col-1">
        <button class="btn btn-sm btn-primary" @click="next()">NEXT</button>
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
    <hr>
    <org-details></org-details>
  </div>
</template>

<script>
import OrgDetails from "../components/OrgDetails"
export default {
  name: "home",
  computed: {
    orgData() {
      return this.$store.state.activeOrg;
    },
    profile() {
      console.log("from profilex", this.$store.state.profile);
      return this.$store.state.profile;
    }
  },
  mounted() {
    this.$store.dispatch("getOrgs");
  },
  methods: {
    next(){
      this.$store.dispatch("next")
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
    }
  },
  components: { OrgDetails }
};
</script>
