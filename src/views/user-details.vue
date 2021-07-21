<template>
  <main>
    <navBar></navBar>
    
    <section class="center" v-if="user">
      <div>
        <img class="user-img" src="@/assets/examp/user-avatar.png" />
        <h4>{{ user.fullname }}</h4>
      </div>

      <div v-if="user.stayes">
        <!-- <div v-if="user._id === user.stay.host._id ">  -->
        <h2>yout stayes</h2>
        <div>
          <ul>
            <li class="a-clean" v-for="(stay, idx) in user.stayes" :key="idx">
              <!-- <router-link :to="`/stay/details/${order.stay.stayId}`"> -->
              <!-- <img src="review.stay.imgsUrl[0]"/> -->
              <p> stay name : {{ stay.name }}</p>
              <p> price per night : {{stay.price}}</p>
              <p> stay summary: {{stay.summary}}</p>
              <p>type : {{stay.type}}</p>
              <img src="user.stay.imgUrls[0]" >

              <!-- </router-link>   -->
            </li>
          </ul>
        </div>
      </div>
      <!-- </div> -->

      <h2>your orders</h2>
      <div v-if="user.orders">
        <ul>
          <li class="a-clean" v-for="(order, idx) in user.orders" :key="idx">
            <!-- <router-link :to="`/stay/details/${order.stay.stayId}`"> -->
            <!-- <img src="review.stay.imgsUrl[0]"/> -->

            <p>ordere at : {{ order.createdAt }}</p>
            <p>order price: {{ order.totalPrice }}</p>
            <p>cheak in : {{ order.dates[0] }}</p>
            <p>check out : {{ order.dates[1] }}</p>
            <p>number of guests: {{ order.guests }}</p>
            <p>location : {{ order.stay.name }}</p>
            <p>status: {{ order.status }}</p>

            <!-- </router-link>  -->
          </li>
        </ul>
      </div>
      <h2>your reviews</h2>
      <div v-if="user.reviews">
        <ul>
          <li class="a-clean" v-for="(review, idx) in user.reviews" :key="idx">
            <!-- <router-link :to="`/stay/details/${review.stay.stayId}`"> -->
            <!-- <p> About {{review.stay.loc.address }} </p> -->
            <!-- <img src="review.stay.imgsUrl[0]"/> -->
            {{ review.txt }}
            <el-rate
              v-if="review.rate"
              v-model="review.rate"
              :colors="colors"
              disabled
            >
            </el-rate>
            <!-- </router-link>  -->
          </li>
        </ul>
      </div>
      <details>
        <summary>pesrsonal info</summary>
        <pre>user name : {{ user.username }}</pre>
        <pre> full name : {{ user.fullname }}</pre>
        <pre v-if="user.reviews.length">
 reviews added : {{ user.reviews.length }}</pre
        >
        <pre> add profile img 
      <pre> orders: {{ user.orders.length }}</pre>

             <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
 :on-success="handleSuccess"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
      </pre>
      </details>
    </section>
  </main>
</template>

<script>
import { userService } from "../services/user.service.js";
import navBar from "../components/nav-bar.vue";

export default {
  data() {
    return {
      user: "",
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
  },
  components: {
    navBar,
  },
  async created() {
    // const {id} = this.$route.params.id;
    const user = await userService.getById(this.userId);
    this.user = user;
  },
  // watch: {
  //   userId: {
  //     handler() {
  //       this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId });
  //     },
  //     immediate: true,
  //   },
  // },
  computed: {
    // user() {
    //   return this.$store.getters.watchedUser;
    // },
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
.a-clean {
  text-decoration: none;
  list-style: none;
}
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
h2,
h2,
h4,
h1 {
  text-align: center;
}
.user-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
</style>