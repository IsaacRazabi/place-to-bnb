<template>
<main class="nav-bar-main">
    <section class="header-container" v-bind:class="{ filterShow: isFilterShow }">

     
    <router-link to="/" class="home" exact>    <img class="logo-img" src="@/assets/imgs/app-logo/placetobnbred-long.jpg"> </router-link>
       <button class="search-btn" v-if="this.$route.name==='explore'" @click="showFilter" > start your search  </button>


      <div class="side-header">

      <nav class="nav-menu ">

        <router-link to="/" class="home" exact>Home</router-link> 
        <router-link to="/explore">explore</router-link> 
        <router-link  to="/host">become a host</router-link>
        <router-link  to="/office">Back office</router-link>

      </nav>

       <div class="dropdown">
        <span  class=" user" @click="toogleShow">
          <img
            class="header-img"
            src="@/assets/imgs/user-login/download.png"
          /><img
            class="header-img"
            src="@/assets/imgs/user-login/userGuest.a58b1fc1.jpg"
          />
        </span>
        <!-- </div> -->
        <div v-bind:class="{ show: isShow }">
          <div v-bind:class="{ show: isShow }" class="dropdownContent">
          <router-link to="/sign-up">Log In</router-link>
          <router-link to="/sign-up">Sign Up</router-link>
          <router-link v-if="loggedInUser" :to="`/user/${loggedInUser._id}`">user profile</router-link>
          </div>
          </div>
        </div>
        </div>
      <section v-if="loggedInUser">
        <p>Hello {{ loggedInUser.fullname }}</p>
        <button @click="logout">Logout</button>
      </section>

    </section>
       <stayFilter v-if=isFilterShow   class="filter" @filter="filter"></stayFilter>
</main>
</template>

<script>
     import stayFilter from '../components/stay-filter.vue'
export default {
  name: "nav-bar",
  data() {
    return {
      loggedInUser: this.$store.getters.loggedinUser,
      isShow: true,
      isFilterShow:false,
      onTop: true,
      // isScroll: true,
    };
  },
  components: {
   stayFilter,
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    },
     isScroll(){
      if (this.onTop) return true
      else {return false}
     }
},
  methods: {
       filter(filterBy) {
      this.$store.commit({ type: "filterStayes", filterBy });
      this.$store.dispatch("loadStayes");
    },
    showFilter(){
this.isFilterShow = !this.isFilterShow
    },
        logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    toogleShow() {
      this.isShow = !this.isShow;
    },

  },
  created(){


window.addEventListener("scroll", function(){
if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) 
{
   this.onTop = false
}
else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) 
{
   this.onTop =true
}

});

//  window.addEventListener("scroll", function(){
// if(window.pageYOffset > 0){
//   this.isScroll = false
//   console.log('sss',this.isScroll);
// } 
// else {
//   this.isScroll = false
//    console.log('dsfds',this.isScroll);
// }
//  })

  

//  window.addEventListener("scroll", function(){
// if(window.scrollTop!==0){
// this.onTop = false
// console.log('sdf');
// } 
//  })
  },
  destroy(){
    removeEventListener('scroll')
  }

};
</script>
<style scoped>
.nav-bar-main{
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    grid-auto-flow: dense;

}
* {
    grid-column: 2;
}

.nav-menu {
  margin-inline-start: auto;
}
.header-container {
  height: 90px;
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
}



.logo-img{
    width: 270px;
    height: 70px;
  /* height: 200px; */
  
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
}
/* .drop-btn{
  } */
.user{
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
}

/* .filterShow{
 height: 170px;
} */
.search-btn{
  padding: 20px 50px;
    background: none;
    outline: none;
    border-radius: 30px;
    border: 1px solid #ddd;
}
.filter-wrraper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-inline-start: 8px;
  margin-inline-end: 8px;
}

.filter {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed;
  top: 80px; */
  border-radius: 50px;
  background-color: #fff;
  height: 40px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  padding: 20px 0;
}
.filter * > {
  width: 250px;
}

.showNavOnScroll{
    position: fixed;
    z-index: 1;
  
}
</style>