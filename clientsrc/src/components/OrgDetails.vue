<template>
  <div class="OrgDetails container-fluid text-center">
    <div>
      <h1>{{orgData.name}}</h1>
      <h2>address: {{orgData.address}}</h2>
      <p>Website: <a :href="orgData.website">{{orgData.website}}</a></p>
      <p>links: {{orgData.links}}</p>
    </div>

    <button class="btn btn-primary">Connect</button>
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