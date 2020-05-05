<template>
  <div class="OrgDetails">
    <div class="row text-center">
      <div class="col-10 offset-1">
    <div class="card" style="">
  <div class="card-header">
  <h5> About This Organization </h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: {{orgData.name}}</li>
    <li class="list-group-item">address: {{orgData.address}}</li>
    <li class="list-group-item">Website: <a :href="orgData.website">{{orgData.website}}</a></li>
    <li class="list-group-item">links: {{orgData.links}}</li>
    <li class="list-group-item"><button class="btn btn-primary">Connect</button></li>
  </ul>
      </div>
</div>
    </div>
      <div class="col-4">
      </div>

    <!-- <div>
      <h1>{{orgData.name}}</h1>
      <h2>address: {{orgData.address}}</h2>
      <p>Website: <a :href="orgData.website">{{orgData.website}}</a></p>
      <p>links: {{orgData.links}}</p>
    </div>

    <button class="btn btn-primary">Connect</button> -->
  </div>
</template>

<script>
export default {
  name: "org",
  data() {
    return {};
  },
  computed: {
    orgData() {
      return this.$store.state.activeOrg;
    },
  }
};
</script>

<style>
</style>