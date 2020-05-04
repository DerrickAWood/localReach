<template>
  <div class="about container-fluid m-3 text-center">
    <div class="row">
    <div class="col-4">

    <div class="card" style="width: 18rem;">
  <img :src="profile.picture" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Welcome, {{ profile.name }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">email: {{ profile.email }}</li>
    <li class="list-group-item">Location: {{ profile.location }}</li>
    <li class="list-group-item">Payment Info: {{ profile.payment }}</li>
    <li class="list-group-item">Default Payment Amount: {{ profile.default }}</li>
  </ul>
  <div class="card-body">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Edit</button>
  </div>
</div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-header">
    Donation Total: {{ donationTotal }}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>


</div>




    <!-- <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <h2>email: {{ profile.email }}</h2>
    <h2>Location: {{ profile.location }}</h2>
    <h2>Payment Info: {{ profile.payment }}</h2>
    <h2>Default Payment Amount: {{ profile.default }}</h2> -->







    <!-- <form @submit.prevent="changeProfile()">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          name="title"
          id
          class="form-control"
          placeholder="enter name..."
          aria-describedby="helpId"
          v-model="profile.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="body">Location</label>
        <input
          type="text"
          name="body"
          id
          class="form-control"
          placeholder="enter Location..."
          aria-describedby="helpId"
          v-model="profile.location"
        />
      </div>
      <div class="form-group">
        <label for="body">payment</label>
        <input
          type="text"
          name="body"
          id
          class="form-control"
          placeholder="enter payment..."
          aria-describedby="helpId"
          v-model="profile.payment"
        />
      </div>
      <div class="form-group">
        <label for="body">picture</label>
        <input
          type="text"
          name="body"
          id
          class="form-control"
          placeholder="enter picture..."
          aria-describedby="helpId"
          v-model="profile.picture"
          required
        />
      </div>
      <div class="form-group">
        <label for="body">default</label>
        <input
          type="text"
          name="body"
          id
          class="form-control"
          placeholder="enter default donation amount..."
          aria-describedby="helpId"
          v-model="profile.default"
          required
        />
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form> -->

    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Edit</button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog text-center" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="mb-3" @submit.prevent="changeProfile">
              <h5 class="m-1 pr-2 pl-3 tskName">Name:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add name..."
                v-model="profile.name"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">Location:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="enter location..."
                v-model="profile.location"
              />
              <h5 class="m-1 pr-2 pl-3 tskName">Payment Information:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add payment information..."
                v-model="profile.payment"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">Picture:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add picture..."
                v-model="profile.picture"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">Default Donation Amount:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add default amount..."
                v-model="profile.default"
                required
              />
            </form>...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="changeProfile"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- <org></org> -->
    <h1>Donation Total: {{ donationTotal }}</h1>
    <DonationDetails
      class=""
      v-for="donationItem in donations"
      :donationData="donationItem"
      :key="donationItem._id"
    ></DonationDetails>
  </div>
</template>

<script>
//inport Org from ".."
import DonationDetails from "../components/DonationDetails.vue";
//import Org from "../components/Org.vue";
export default {
  name: "Profile",
  data() {
    return {
      newOrg: {}
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    donations() {
      return this.$store.state.donations;
    },
    donationTotal() {
      let i = 0
      let donations = this.$store.state.donations
      let total = 0
      for (i = 0; i < donations.length ; i++){
        total+= donations[i].amount
      }
      return total;
    }
  },
  mounted() {
    this.$store.dispatch("getDonations");
  },
  methods: {
    addOrg() {
      console.log("addOrg", this.newOrg);
      this.$store.dispatch("addOrg", this.newOrg);
      this.newOrg = {};
    },
    changeProfile() {
      console.log("changeProfile", this.profile);
      this.$store.dispatch("changeProfile", this.profile);
    }
  },
  components: { DonationDetails }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
