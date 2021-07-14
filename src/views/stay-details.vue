<template>
  <section v-if="stay">
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
  </section>
</template>

<script>
import { stayService } from "../services/stay.service.js";
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
