<template>
  <div class="welcome container-fluid">

    <div class="card bg-dark text-white m-3">
  <img src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img" alt="">
  <div class="card-img-overlay text-center">
    <h1 class="card-title">Welcome to Local Reach</h1>
    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, exercitationem, quos reiciendis nulla repellendus excepturi tempora unde iure perferendis vero ipsam fugit, cum illum deleniti in similique tenetur quasi laborum.</h4>
    <button @click="login" v-if="!$auth.isAuthenticated" class="btn btn-primary btn-lg">Sign Up</button>
  </div>
</div>


    <!-- <img alt="Vue logo" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=450&q=150" />
    <h1>Welcome Local Reach</h1>
    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, exercitationem, quos reiciendis nulla repellendus excepturi tempora unde iure perferendis vero ipsam fugit, cum illum deleniti in similique tenetur quasi laborum.</h4>
    <button @click="login" v-if="!$auth.isAuthenticated" class="btn btn-primary btn-lg">Sign Up</button> -->
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
