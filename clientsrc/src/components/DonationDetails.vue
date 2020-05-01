<template>
  <div class="container-fluid text-center">
    <div class="row" >
      <div class="col-1">
        <h3>{{donationData.amount}}</h3>
      </div>
      <div class="col-4">
        <h5>{{new Date(donationData.createdAt).toDateString()}}</h5>
        <!-- <h2>{{new Date(donationData.createdAt).toString()}}</h2> -->
      </div>
      <div class="col-2">
        <h5>{{donationData.organizationId}}</h5>
        <p>{{donationData.organization.name}}</p>
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