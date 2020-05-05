<template>
  <div class="home container-fluid">
    <div class="row m-3">
      <div class="col-6 ml-5">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Organization or Location"
            aria-label="Search"
            v-model="search"
          />
          <button
            class="btn btn-primary my-2 my-sm-0 mr-2"
            @click="searchOrgs()"
            type="submit"
          >Search</button>
        </form>
      </div>
      <div>
        <button class="btn btn-sm btn-primary" @click="next()">NEXT</button>
      </div>
    </div>

    <div class="card bg-dark text-white">
      <img :src="orgData.picture" class="card-img" alt />
      <div class="card-img-overlay text-center text-dark">
        <h1 class="card-title">{{orgData.name}}</h1>
      </div>
    </div>

    <!-- <div class="row">

      <div class="col-12 text-center">
        <img class="img-fluid w-80" :src="orgData.picture" />
      </div>

  </div>

    <div class="row text-center">
      <div class="col-12">
        <h1>{{orgData.name}}</h1>
      </div>
    </div>-->

    <div class="row text-center m-3">
      <div class="col-6 offset-3">
        <button
          class="btn btn-block btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          @click="setLoaded"
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
                <p>Modal body text goes here.</p>
                <div ref="paypal"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div ref="paypal"></div> -->
    </div>
    <hr />
    <org-details></org-details>
  </div>
</template>

<script>
import OrgDetails from "../components/OrgDetails";
export default {
  name: "home",

  data() {
    return {
      search: "",
      searchLocations: "",
      loaded: false
      //product: { price: 5, description: "You made a donation" }
    };
  },
  computed: {
    orgData() {
      return this.$store.state.activeOrg;
    },
    profile() {
      console.log("from profilex", this.$store.state.profile);
      return this.$store.state.profile;
    },
    currentIndex() {
      return this.$store.state.orgIndex;
    },
    numOrgs() {
      return this.$store.state.orgs.length;
    },
    orgs() {
      return this.$store.state.orgs;
    },
    filteredList() {
      let out = [];
      let list = this.$store.state.orgs;

      for (let i = 0; i < list.length; i++) {
        let listItem = list[i];
        // if (listItem.name.toLowerCase().includes(this.search.toLowerCase()) &&
        //  listItem.address.toLowerCase().includes(this.searchLocations.toLowerCase()) ){
        //    out.push(listItem)
        // }
        if (
          listItem.name.toLowerCase().includes(this.search.toLowerCase()) ||
          listItem.address.toLowerCase().includes(this.search.toLowerCase())
        ) {
          out.push(listItem);
        }
      }
      return out;
    }
  },
  mounted() {
    //debugger
    this.$store.dispatch("getOrgs");
    //this.$store.dispatch("next", 0);
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AXVku1rBN3Z1MbP9hLn_3u3PnILdDpe_iG5CWzvzgYfuyMATqQ-hybUMbn33mmFH041mm7lGMkJsWkK6";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    next() {
      let currentOrg = 0;
      currentOrg = this.currentIndex;
      currentOrg += 1;
      if (currentOrg == this.orgs.length) {
        currentOrg = 0;
      }
      this.$store.dispatch("next", currentOrg);
    },
    donate(donationType) {
      let amount = 0;
      amount = prompt("How much do you want to donate?", this.profile.default);

      if (amount) {
        let donation = {
          amount: amount,
          userId: this.profile.id,
          organizationId: this.orgData.id
        };
        console.log("from donateDefault", donation);
        this.$store.dispatch("donate", donation);
      }
    },
    async searchOrgs() {
      console.log("searchOrgs", this.filteredList);
      console.log("searchOrgs", this.filteredList[0]);
      this.$store.commit("setActiveOrg", this.filteredList[0]);
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            //console.log("setLoaded", );

            return actions.order.create({
              purchase_units: [
                {
                  description: "this is a donation",
                  amount: {
                    currency_code: "USD",
                    value: this.profile.default
                  }
                }
              ]
            });
          }
        })
        .render(this.$refs.paypal);
    }
  },
  components: { OrgDetails }
};
</script>

<style scoped>
img {
  max-height: 85%;
  min-height: 75%;
}
</style>
