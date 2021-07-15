<template>
<main>
 <navBar></navBar>
  <section v-if="stay" class="tedails-section">
    <div class="deatails-main-container">
      <h2 class="details-title">{{stay.name}}</h2>
      <div class="details-subtitle">
        <div>
          <img src="../assets/examp/red-star.jpg" alt="" srcset="">
          <span class="rating"> {{stay.reviews[0].rate}} </span>
          <span class="voters">({{stay.reviews[0].votes}} <a>reviews</a>) </span>
          <span> {{ stay.loc.address }}, {{ stay.loc.country }}</span>
        </div>
        <div class="share-n-save">
          <img src="../assets/examp/share-icon.jpg" alt="" srcset="">
          <span> Share </span>
          <img src="../assets/examp/save-icon.jpg" alt="" srcset="">
          <span> Save</span>
        </div>
      </div>
      <div class="details-galery">
          <img class="pic1" :src="showImage" alt="" srcset=""/>
          <img class="pic2" src="../assets/examp/exam-home2.jpg" alt="" srcset=""/>
          <img class="pic3" src="../assets/examp/exam-home4.jpg" alt="" srcset=""/>
          <img class="pic4" src="../assets/examp/exam-home3.jpg" alt="" srcset=""/>
          <img class="pic5" src="../assets/examp/exam-home5.jpg" alt="" srcset=""/>
      </div>
    </div>  
    <div>
      <p>{{ stay.loc.country }}</p>
      <p>{{ stay.loc.host }}</p>
      <p>{{ stay.loc.address }}</p>
      <p>price per night : {{ stay.price }}</p>
      <!-- <div v-for="(img,imgIdx) in stay.imgUrls"  :key="imgIdx">
        <img :src="img" >
      </div> -->
      <p>reviews : </p>
      <div v-for="(review,reviewsIdx) in stay.reviews"  :key="reviewsIdx">
        <p>{{review.rate}}</p>
        <p>{{review.txt}}</p>
        <p>{{review.by.fullname}}</p>
        <img :src="review.by.imgUrl" >
      </div>
    </div>
        <router-link  :to="'/stay/edit/'+stay._id">
              edit
            </router-link>
  </section>
  </main>
</template>

<script>
import { stayService } from "../services/stay.service.js";
import navBar from '../components/nav-bar.vue'
export default {
  props: {
    stay: {
      type: Object,
    },
    user : {
        type : Object
    },
    imgs :{
      type: Array,
    //   deafult : "../assets/images/images/4.jpg"
    }
  },
  // data() {
  //   return {
  //    stay: "",
  //   };
  // },
  computed :{
    showImage(){
    return this.stay.imgUrls[0]
    }
  },
  components:{
    navBar
  },
  methods: {
    showImages() {
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

<style>
h2{
  text-align: left;
}
.tedails-section{
    
    display: grid;
    grid-template-columns: 20% 1fr 20%;
    grid-auto-flow: dense;
}
.deatails-main-container {
        grid-column: 2;
}
.details-subtitle{
    display: flex;
    justify-content:space-between; 
    padding-bottom: 20px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
    font-size: 14px ;
    position: relative;
    color: rgb(113, 113, 113);
    /* text-decoration: underline; */
}
.rating{
    font-weight: 600 ;
}
.details-subtitle img{
  width: 15px;
  height: 15px;
} 
.share-n-save span{
  font-weight: 600 ;
  margin-right:10px;
  text-decoration-line:underline;
} 
.details-galery{
  width: 1240px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,25vh);
    grid-gap: 7px;
}
.details-galery .pic1 {
    grid-area: 1/1/3/3;
    border-radius: 10px 0 0 10px;
    height: 100%;
    width: 100%;
}
.details-galery .pic2 {
    grid-area: 1/3/2/4;
    height: 100%;
    width: 100%;
}
.details-galery .pic3 {
    grid-area: 2/3/3/4;
    height: 100%;
    width: 100%;
}
.details-galery .pic4 {
   grid-area: 1/4/2/5;
border-radius: 0 10px 0 0;
height: 100%;
    width: 100%;
}
.details-galery .pic5 {
    grid-area: 2/4/3/5;
    border-radius: 0 0 10px 0;
    height: 100%;
    width: 100%;
}


/* .detailes-main-pic img{
 width: 490px;
  height: 490px;
}
.details-sub-galery{
   
    justify-content:space-between; 
}
.details-sub-galery img{
  max-width: 270px;
  max-height: 270px;
} */

</style>
