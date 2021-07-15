<template>
  <section v-if="stay">
<navBar></navBar>
    <p>{{ stay.loc.country }}</p>
    <p>{{ stay.loc.host }}</p>
    <p>{{ stay.loc.address }}</p>
    <p>price per night : {{ stay.price }}</p>
    <div v-for="(img,imgIdx) in stay.imgUrls"  :key="imgIdx">
    <img :src="img" >
    </div>
    <p>reviews : </p>
     <div v-for="(review,reviewsIdx) in stay.reviews"  :key="reviewsIdx">
<p>{{review.rate}}</p>
<p>{{review.txt}}</p>
<p>{{review.by.fullname}}</p>
<img :src="review.by.imgUrl" >
    </div>
        <router-link  :to="'/stay/edit/'+stay._id">
              edit
            </router-link>
  </section>
</template>

<script>
import { stayService } from "../services/stay.service.js";
import navBar from '../components/nav-bar.vue'
export default {
  // props: {
  //   stay: {
  //     type: Object,
  //   },
  // },
  data() {
    return {
     stay: "",
    };
  },
  components:{
    navBar
  },
  methods: {
    showImage() {
      return this.stay.imgUrls;
    },
  },
  created() {
    const { stayId } = this.$route.params;
      stayService.getById(stayId).then((stay) => {
        this.stay = stay;
      });
        console.log(this.stay);
  },
};
</script>
