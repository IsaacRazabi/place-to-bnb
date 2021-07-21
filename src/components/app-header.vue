<template>
  <main>
    <navBar></navBar>
    <main>
      <div class="main-display">
        <div class="filter-container">
          <stayFilter class="filter" @filter="filter"></stayFilter>
        </div>
        <img
          class="bgc-img"
          src="@/assets/imgs/bgc/Airbnb-Beachfront-Greece.webp"
          alt=""
        />
      </div>
    </main>
  </main>
</template>

<script>
import stayFilter from "../components/stay-filter.vue";
import navBar from "./nav-bar.vue";
export default {
  name: "app-header",
  data() {
    return {
      interval: null,
      imgUrl: 1,
      loggedInUser: this.$store.getters.loggedinUser,
      isShow: true,
    };
  },
  components: {
    stayFilter,
    navBar,
  },
  computed: {},
  created() {
    this.interval = setInterval(() => {
      this.imgUrl++;
      if (this.imgUrl > 3) this.imgUrl = 1;
    }, 6000);
  },
  methods: {
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    toogleShow() {
      this.isShow = !this.isShow;
    },
    // filter(filterBy) {
    //     console.log(filterBy);
    // 	this.$store.commit({ type:'filterToys', filterBy })
    // 	this.$store.dispatch("loadToys")
    // },
    filter(filterBy) {
      this.$store.commit({ type: "filterStayes", filterBy });
      this.$store.dispatch("loadStayes");
    },
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>
<style scoped>
.main-display {
  position: relative;
  grid-column: 1/-1;
}

.filter {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  border-radius: 50px;
  background-color: #fff;
  height: 40px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  padding: 20px 0;
}
.filter * > {
  width: 250px;
}
/* .nav-menu {
  margin-inline-start: auto;
}
.header-container {
  height: 80px;
  background-color: #fff !important;
  position: sticky;
  top: 0;
  box-shadow: 0 10px 10px -10px rgb(33 35 38 / 10%);
  z-index: 50;
  display: flex;
justify-content: space-between;
  align-items: center;
}
.logIn-dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 5px 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid black;
}
.header-img {
  width: 28px;
  height: 25px;
  padding: 0 0 0 2px;
} */

.bgc-img {
  height: 80vh;
  width: 100%;
}
/* .logo-img{
    width: 200px;
  height: 200px;
}
.nav-menu{
  display: flex;
  flex-direction: row;
        justify-content: space-between;
        gap: 8px;
}
.side-header{
  display: flex;
            height: 100%;
    align-items: center;
    gap: 8px;
} */
/* .drop-btn{
  } */
/* .user{
  cursor: pointer;
  border: 1px solid #dadada;
    border-radius: 40px;
}


.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.show{
   display: none;
}
.dropdownContent {
 
  position: absolute;
  background-color:white;
  min-width: 65px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownContent a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownContent a:hover {
  background-color: #ddd;
} */

.filter-container {
  display: flex;
  justify-content: center;
}
</style>