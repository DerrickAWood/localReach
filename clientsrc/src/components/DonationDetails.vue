<template>
  <div class="container-fluid text-center">
    <div class="row" >
      <div class="col-2">
        <h1>{{donationData.amount}}</h1>
      </div>
      <div class="col-3">
        <h2>{{donationData.createdAt}}</h2>
      </div>
      <div class="col-2">
        <p>{{donationData.organizationId}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "org",
  props: ["donationData"],
  data() {
    return {};
  },
  // computed: {
  //   donationData() {
  //     return this.$store.state.donations;
  //   },
  // }
};
</script>

<style>
</style>