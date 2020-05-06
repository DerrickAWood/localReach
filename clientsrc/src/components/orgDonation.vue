  <template>
    <div class="row text-center m-3">
      <div class="col-6 offset-3">
        <button
          class="btn btn-block btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >Donate</button>
        <div class="modal" id="exampleModal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Donate</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5 class="m-1 pr-2 pl-3 tskName">How Much Would You Like to Donate?</h5>
                <input
                  class="pr-4 pl-2 inputTask m-3"
                  type="text"
                  placeholder="add default amount..."
                  v-model="profile.default"
                  required
                />
                <div ref="paypal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<!-- finish a temp for orgdonation and put in all paypal info here -->

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