<template>
<main class="nav-bar-container" v-bind:class="{ active: onTop }">
  <div class="nav-bar-main">
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
        <!-- <router-link  to="/office"><span>Back office</span></router-link> -->
               <router-link  to="/office"><span>Back office</span></router-link>

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
           <!-- <button>💳{{massages.length }}</button> -->
        </span>
        <!-- </div> -->
        <div v-bind:class="{ show: isShow }">
          <div v-bind:class="{ show: isShow }" class="dropdownContent">
          <router-link to="/sign-up">Log In</router-link>
          <router-link to="/sign-up">Sign Up</router-link>
          <router-link to="/office1"  v-if="loggedInUser" >user profile</router-link>
         <button @click="logout"> <router-link v-if="loggedInUser" to="/">Logout</router-link> </button> 
          </div>
          </div>
        </div>
        </div>
          <span v-if="massages.length "> 🔔 {{massages.length}} </span>
      <section v-if="loggedInUser">
        <p>Hello {{ loggedInUser.fullname }}</p>
        <!-- <button @click="logout">Logout</button> -->
      </section>

    </section>
       <stayFilter v-if=isFilterShow   class="filter" @filter="filter"></stayFilter>
</div>
</main>
</template>

<script>
     import stayFilter from '../components/stay-filter.vue'
     import {socketService} from '../services/socket.service'
export default {
  name: "nav-bar",
  data() {
    return {
      loggedInUser: this.$store.getters.loggedinUser,
      isShow: true,
      isFilterShow:false,
      onTop: false,
       massages: [],
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
     },
     isOnTop () {
       return this.onTop
      //  else {return false}
      // return true
     }
},
  methods: {
       filter(filterBy) {
      this.$store.commit({ type: "filterStayes", filterBy });
      this.$store.dispatch("loadStayes");
    },
     addMsg(msg) {
      this.massages.push(msg);
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
 changeTopic() {
      socketService.emit('chat topic', this.topic)
    },
  },
  created(){
   socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)

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

  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
  },
  destroy(){
    removeEventListener('scroll')
  }

};
</script>
<style scoped>
input, button, submit { border:none; background: white; } 
.active{
  background: red;
}
</style>