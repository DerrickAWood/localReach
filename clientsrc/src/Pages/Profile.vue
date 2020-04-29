<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
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
                required
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
            </form>...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addOrg">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <org></org>
  </div>
</template>

<script>
//inport Org from ".."
import Org from "../components/Org.vue";
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
    }
  },
  //
    methods: {
    addOrg() {
      console.log("addOrg", this.newOrg)
      this.$store.dispatch("addOrg", this.newOrg);
      this.newOrg = {};
    }
  }, 
  components: { Org }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
