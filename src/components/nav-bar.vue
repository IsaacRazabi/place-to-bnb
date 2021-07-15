<template>
    <section class="header-container">
      <img class="logo-img" src="@/assets/imgs/app-logo/logo_transparent.png">
      <div class="side-header">

      <nav class="nav-menu ">

        <router-link to="/" class="home" exact>Home</router-link> 
        <router-link to="/explore">explore</router-link> 
        <router-link to="/host">become a host</router-link>

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
          <router-link to="/user-profile">user profile</router-link>
          </div>
          </div>
        </div>
        </div>
      <section v-if="loggedInUser">
        <p>Hello {{ loggedInUser.fullname }}</p>
        <button @click="logout">Logout</button>
      </section>
    </section>

</template>

<script>

export default {
  name: "nav-bar",
  data() {
    return {
      loggedInUser: this.$store.getters.loggedinUser,
      isShow: true,
    };
  },
  components: {

  },
  computed: {},
  methods: {
        logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then(() => (this.loggedInUser = null));
    },
    toogleShow() {
      this.isShow = !this.isShow;
    },

  },

};
</script>
<style scoped>

.nav-menu {
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
}



.logo-img{
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

</style>