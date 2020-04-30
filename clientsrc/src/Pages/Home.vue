<template>
  <div class="home">
    <div class="row">
      <div class="col-9">
        <img class="img-fluid" :src="orgData.picture" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h1>{{orgData.name}}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button class="btn btn-block btn-primary" @click="donate()">Donate</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  components: {}
};
</script>
