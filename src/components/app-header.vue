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
           :src="getImgSlide"
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
    
      isShow: true,
      
    };
  },
  components: {
    stayFilter,
    navBar,
  },
  computed: {
    getImgSlide(){
      let src=''
      if (this.imgUrl === 1) src= require('@/assets/imgs/bgc/1-brazil_b.jpg')
        if (this.imgUrl === 2) src= require('@/assets/imgs/bgc/Airbnb-Beachfront-Greece.webp');
      if (this.imgUrl === 3) src= require('@/assets/imgs/bgc/airbnb-example-home-1000x667.jpg');
      return src
    },
      loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
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
  /* position: fixed;
    width: 100%;
    z-index: 1000; */
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
.bgc-img {
  height: 80vh;
  width: 100%;
}
.filter-container {
  display: flex;
  justify-content: center;
}
</style>