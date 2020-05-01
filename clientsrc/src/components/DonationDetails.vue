<template>
  <div class="container-fluid">
    <div class="row" >
      <div class="col-1">
        <h3>{{donationData.amount}}</h3>
      </div>
      <div class="col-4">
        <h5>{{new Date(donationData.createdAt).toDateString()}}</h5>
        <!-- <h2>{{new Date(donationData.createdAt).toString()}}</h2> -->
      </div>
      <div class="col-6">
        <!-- <h5>{{donationData.organizationId}}</h5> -->
        <h5>{{donationData.organization.name}}</h5>
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