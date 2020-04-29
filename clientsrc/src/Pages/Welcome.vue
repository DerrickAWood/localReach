<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome Local Reach</h1>
    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, exercitationem, quos reiciendis nulla repellendus excepturi tempora unde iure perferendis vero ipsam fugit, cum illum deleniti in similique tenetur quasi laborum.</h4>
    <button @click="login" v-if="!$auth.isAuthenticated" class="btn btn-primary btn-lg">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: "welcome",

   methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
      this.$router.push({ name: "Home"})
    }
   }
};
</script>
