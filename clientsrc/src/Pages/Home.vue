<template>
  <div class="home container-fluid">
    <div class="row justify-content-around">
      <div class="col-1 p-0">
        <button class="btn btn-primary mt-2 mt-lg-2" @click="next(-1)">&lt;</button>
      </div>
      <div class="col-8">
        <div class="input-group mt-2">
          <input
            type="search"
            class="form-control"
            placeholder="Organization or Location"
            aria-label="Search"
            aria-describedby="button-addon2"
            v-model="search"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              @click="searchOrgs()"
              id="button-addon2"
            >Find</button>
          </div>
        </div>

        <!-- <form class="form-inline my-2 my-lg-0 m-lg-2">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Organization or Location"
          aria-label="Search"
          v-model="search"
        />
        <button class="btn btn-primary my-2 my-sm-0" @click="searchOrgs()" type="submit">Search</button>
        </form>-->
      </div>
      <div class="col-1 p-0">
        <button class="btn btn-primary mt-2 mt-lg-2" @click="next(1)">&gt;</button>
      </div>
      <div class="col-12 text-center">
        <h3 class="card-title">{{orgData.name}}</h3>
      </div>
    </div>

    <div class="card bg-dark text-white">
      <img :src="orgData.picture" class="card-img img-fluid" id="swipe" alt />
      <div class="card-img-overlay text-center text-dark"></div>
    </div>

    <OrgDonation :orgData="orgData" v-if="orgData"></OrgDonation>
    <hr />
    <org-details></org-details>
  </div>
</template>

<script>
import OrgDonation from "../components/OrgDonation";
import OrgDetails from "../components/OrgDetails";
export default {
  name: "home",

  data() {
    return {
      search: "",
      searchLocations: "",
      loaded: false,
      container: document.getElementById("swipe"),
      initialX: null,
      initialY: null
      //product: { price: 5, description: "You made a donation" }
    };
  },
  computed: {
    orgData() {
      //console.log("orgData", this.$store.state.activeOrg);
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
        if (
          listItem.name.toLowerCase().includes(this.search.toLowerCase()) ||
          listItem.address.toLowerCase().includes(this.search.toLowerCase())
        ) {
          out.push(listItem);
        }
      }
      this.$store.commit("setFilteredOrgs", out);
      return out;
    }
  },
  mounted() {
    this.$store.dispatch("getOrgs");
    console.log("mounted", document.getElementById("swipe"));
    // console.log("mounted", this.container);
    //let container = document.getElementById("swipe");
    //this.container.addEventListener("touchstart", startTouch, false);
    // container.addEventListener("touchmove", moveTouch, false);
    window.addEventListener(
      "load",
      function() {
        var touchsurface = document.getElementById("swipe"),
          startX,
          startY,
          dist,
          threshold = 150, //required min distance traveled to be considered swipe
          allowedTime = 200, // maximum time allowed to travel that distance
          elapsedTime,
          startTime;

        function handleswipe(isrightswipe) {
          if (isrightswipe)
            // touchsurface.innerHTML =
            // 'Congrats, you\'ve made a <span style="color:red">right swipe!</span>';
            console.log("right");
          else {
            console.log("else");
            //touchsurface.innerHTML = "Condition for right swipe not met yet";
          }
        }

        touchsurface.addEventListener(
          "touchstart",
          function(e) {
            // touchsurface.innerHTML = "";
            var touchobj = e.changedTouches[0];
            dist = 0;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            startTime = new Date().getTime(); // record time when finger first makes contact with surface
            e.preventDefault();
          },
          false
        );

        touchsurface.addEventListener(
          "touchmove",
          function(e) {
            e.preventDefault(); // prevent scrolling when inside DIV
          },
          false
        );

        touchsurface.addEventListener(
          "touchend",
          function(e) {
            var touchobj = e.changedTouches[0];
            dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime; // get time elapsed
            // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
            var swiperightBol =
              elapsedTime <= allowedTime &&
              dist >= threshold &&
              Math.abs(touchobj.pageY - startY) <= 100;
            handleswipe(swiperightBol);
            e.preventDefault();
          },
          false
        );
      },
      false
    ); // end window.onload
  },
  methods: {
    next(num) {
      // console.log("next", this.orgData.clientId);
      let currentOrg = 0;
      currentOrg = this.currentIndex;
      currentOrg += num;

      //console.log( "next%",  currentOrg % (this.filteredList.length) )

      if (currentOrg == this.filteredList.length) {
        currentOrg = 0;
      }
      if (currentOrg == -1) {
        currentOrg = this.filteredList.length - 1;
      }
      //console.log("nextIF", currentOrg)
      this.$store.dispatch("next", currentOrg);
    },

    startTouch(e) {
      console.log("startTouch");
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    },

    async searchOrgs() {
      this.$store.commit("setActiveOrg", this.filteredList[0]);
    }
  },
  components: { OrgDetails, OrgDonation }
};
</script>

<style scoped>
img {
  /* max-height: 75vh; */
  /* min-height: 75%; */
  /* max-width: auto; */
  /* max-width: 95vw; */
  height: 50vh;
  image-rendering: auto;
}
</style>
