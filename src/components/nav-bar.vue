<template>
<main class="nav-bar-main">
    <section class="header-container" v-bind:class="{ filterShow: isFilterShow }">

     
    <router-link to="/" class="home" exact>
    <div class="logo-container">
      <div class="logo-img-container">
        <img class="logo-img" src="@/assets/imgs/app-logo/placetobnbred-logo.jpg">
      </div>
      <div class="logo-title">
        placetobnb
      </div>
    </div>  
     </router-link>
       <button class="search-btn" v-if="this.$route.name==='explore'" @click="showFilter" > start your search  </button>


      <div class="side-header">

      <nav class="nav-menu">

        <router-link to="/" class="home" exact><span>Home</span></router-link> 
        <router-link to="/explore"><span>explore</span></router-link> 
        <router-link  to="/host"><span>become a host</span></router-link>
        <router-link  to="/office"><span>Back office</span></router-link>
               <router-link  to="/office1"><span>Back office1</span></router-link>

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

</style>