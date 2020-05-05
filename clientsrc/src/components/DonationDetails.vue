<template>
  <div class="container-fluid">
    <div class="row">
      <li class="list-group-item text-center">
        {{new Date(donationData.createdAt).toDateString()}} $ {{donationData.amount}}.00
        <p class="text-center">{{donationData.organization.name}}</p>
      </li>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "org",
  props: ["donationData"],
  data() {
    return {};
  }
  // computed: {
  //   donationData() {
  //     return this.$store.state.donations;
  //   },
  // }
};
</script>

<style>
</style>