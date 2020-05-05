<template>
  <div class="container-fluid">
    <div class="row" >
      <li class="list-group-item"> {{new Date(donationData.createdAt).toDateString()}}  $ {{donationData.amount}}.00  -  {{donationData.organization.name}} </li>
      <hr>
      <!-- <li class="list-group-item">Cras justo odio</li> -->
      <!-- <div class="col-1">
        <h3>{{donationData.amount}}</h3>
      </div>
      <div class="col-4">
        <h5>{{new Date(donationData.createdAt).toDateString()}}</h5>
      </div>
      <div class="col-6">
        <h5>{{donationData.organization.name}}</h5>
      </div> -->
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