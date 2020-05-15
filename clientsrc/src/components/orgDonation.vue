  <template>
  <div class="OrgDonation row text-center m-3">
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
                placeholder="amount..."
                 v-model="profile.amount"
                required
              />
              <div ref="paypal"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button @click="checkPaypal">Clickme</button> -->
    </div>
  </div>
</template>

<!-- finish a temp for orgdonation and put in all paypal info here -->

    <script>
export default {
  name: "OrgDonation",
  props: ["orgData"],
  data() {
    return {};
  },
  computed: {
    // orgData() {
    //   return this.$store.state.activeOrg;
    // },
    profile() {
      console.log("from profilex", this.$store.state.profile);
      return this.$store.state.profile;
    }
  },
  mounted() {
    console.log("beforeUpdate", this.orgData);
    const script = document.createElement("script");
    if (this.orgData.clientId) {
      // script.src =
      //   "https://www.paypal.com/sdk/js?client-id=AXVku1rBN3Z1MbP9hLn_3u3PnILdDpe_iG5CWzvzgYfuyMATqQ-hybUMbn33mmFH041mm7lGMkJsWkK6";
      // "https://www.paypal.com/sdk/js?client-id=AXesV42Zwn2DWTLAVi_KpQsClbGyzfQ_0HgVtPCcOVe9FHBUm69UK111l3vzIfQ2iKH7Wu8H9o50UPxA";
      script.src = `https://www.paypal.com/sdk/js?client-id=${this.orgData.clientId}`;
      //script.id = "clientId";
    } else {
      console.log("else");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AXesV42Zwn2DWTLAVi_KpQsClbGyzfQ_0HgVtPCcOVe9FHBUm69UK111l3vzIfQ2iKH7Wu8H9o50UPxA";
    }
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    donate(amount) {
      if (amount) {
        let donation = {
          amount: amount,
          userId: this.profile.id,
          organizationId: this.orgData.id
        };
        // console.log("from donateDefault", donation);
        this.$store.dispatch("donate", donation);
      }
    },

    // checkPaypal() {
    //   console.log(window.paypal);
    // },

    //ANCHOR try to access paypal pay now button in window
    setLoaded: function(loaded) {
      let data = {};
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            let data2 = actions.order.create({
              purchase_units: [
                {
                  description: "this is a donation",
                  amount: {
                    currency_code: "USD",
                    value: this.profile.amount
                  }
                }
              ]
            });
            return data2;
          },
          onApprove: async (data, actions) => {
            let data3 = await actions.order.capture()
            this.donate(this.profile.amount);
            return data3
          }
        })
        .render(this.$refs.paypal);
    }
  },
  components: {}
};
</script>

<style>
</style>