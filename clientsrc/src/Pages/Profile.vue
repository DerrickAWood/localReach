<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <form @submit.prevent="changeProfile()">
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
    </form>

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Organization</button>

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
            <h5 class="modal-title" id="exampleModalLabel">Add Organization</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="mb-3" @submit.prevent="addOrg">
              <h5 class="m-1 pr-2 pl-3 tskName">Name:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add name of organization..."
                v-model="newOrg.name"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">picture:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add picture..."
                v-model="newOrg.picture"
              />
              <h5 class="m-1 pr-2 pl-3 tskName">address:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add address..."
                v-model="newOrg.address"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">payment:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add payment..."
                v-model="newOrg.payment"
                required
              />
              <h5 class="m-1 pr-2 pl-3 tskName">email:</h5>
              <input
                class="pr-4 pl-2 inputTask"
                type="text"
                placeholder="add email..."
                v-model="newOrg.organizationEmail"
                required
              />

              <div class="form-group">
                <label for="body">Website</label>
                <input
                  type="text"
                  name="body"
                  id
                  class="form-control"
                  placeholder="enter website link..."
                  aria-describedby="helpId"
                  v-model="newOrg.website"
                />
              </div>
              <div class="form-group">
                <label for="body">links</label>
                <input
                  type="text"
                  name="body"
                  id
                  class="form-control"
                  placeholder="enter social media links..."
                  aria-describedby="helpId"
                  v-model="newOrg.links"
                />
              </div>
              <div class="form-group">
                <label for="body">EIN</label>
                <input
                  type="text"
                  name="body"
                  id
                  class="form-control"
                  placeholder="enter EIN..."
                  aria-describedby="helpId"
                  v-model="newOrg.EIN"
                  required
                />
              </div>
            </form>...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="addOrg"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <org></org> -->
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
    }
  },
  //
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
