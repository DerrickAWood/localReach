<template>
  <div>
    <div>
      <!-- <button v-if="this.$auth.userInfo.email == this.noteData.creatorEmail" type="button" class="close text-danger" @click="deleteNote()">
        <span>&times;</span>
      </button>-->
      <p>name: {{orgData.name}}</p>
      <p>picture: {{orgData.picture}}</p>
      <p>address: {{orgData.address}}</p>
      <p>payment: {{orgData.payment}}</p>
      <p>creatorEmail: {{orgData.creatorEmail}}</p>
      <p>organizationEmail: {{orgData.organizationEmail}}</p>
      <p>banned: {{orgData.banned}}</p>
      <p>active: {{orgData.active}}</p>
      <p>validated: {{orgData.validated}}</p>
      <p>website: {{orgData.website}}</p>
      <p>links: {{orgData.links}}</p>
      <p>EIN: {{orgData.EIN}}</p>

          <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal2"
    >Edit Organization</button>

      <!-- Modal -->
      <!-- <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog text-center" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">Add Organization</h5>
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

                  v-model="orgData.name"
                  required
                />
                <h5 class="m-1 pr-2 pl-3 tskName">picture:</h5>
                <input
                  class="pr-4 pl-2 inputTask"
                  type="text"
                  placeholder="add picture..."
                  v-model="orgData.picture"
                  required
                />
                <h5 class="m-1 pr-2 pl-3 tskName">address:</h5>
                <input
                  class="pr-4 pl-2 inputTask"
                  type="text"
                  placeholder="add address..."
                  v-model="orgData.address"
                  required
                />
                <h5 class="m-1 pr-2 pl-3 tskName">payment:</h5>
                <input
                  class="pr-4 pl-2 inputTask"
                  type="text"
                  placeholder="add payment..."
                  v-model="orgData.payment"
                  required
                />
                <h5 class="m-1 pr-2 pl-3 tskName">email:</h5>
                <input
                  class="pr-4 pl-2 inputTask"
                  type="text"
                  placeholder="add email..."
                  v-model="orgData.organizationEmail"
                  required
                />
              </form>...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">xClose</button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="addOrg"
              >xSave edits</button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "org",
  //props: ["orgData"],
  data() {
    return {};
  },
  computed: {
    orgData() {
      return this.$store.state.activeOrg;
    },
    //methods: {
      // deleteNote() {
      //   if (window.confirm("Are you sure?")) {
      //     //console.log("deleteNote", this.noteData);
      //     this.$store.dispatch("deleteNote", this.noteData);
      //   }
      // },
      // changeComment() {
      //   //console.log("changeBlog", this.blogDetails)
      //   //this.$router.push({ name: "Home" });
      //   this.$store.dispatch("changeNote", this.noteData);
    //}
  }
};
</script>

<style>
</style>