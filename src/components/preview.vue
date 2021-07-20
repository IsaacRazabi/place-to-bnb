<template>
<div class="card-container">
      <div class="card">
        <router-link  :to="'/stay/details/'+stay._id">
          <img :src="showImage"/>
          <div class="card-details"> 
            <img src="../assets/examp/red-star.jpg" alt="" srcset="">
            <span v-if="stay.reviews.rate" class="rating"> {{stay.reviews[0].rate}} </span>
            <span v-if="stay.reviews.votes" class="voters">({{stay.reviews[0].votes}})</span>
            <!-- <p>{{stay.loc.country}}</p> -->
            <p>Entire apartment - {{stay.loc.address}}</p>
            <p>{{stay.name}}</p>
            <p>
              <span class="cost">
                 ₪{{stay.price}} 
              </span>
              <span>
                / night 
              </span>
            </p>
          </div>
        </router-link>
      </div>
</div>
</template>

<script>

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
  computed :{
showImage(){
return this.stay.imgUrls[0]
}
  },
methods: {

},
  data() {
    return {
    
    };
  }
}
</script>

<style scoped>
.card-details{
  color: rgb(34, 34, 34);
  font-size: 16px ;
  line-height: 10px ;
  text-decoration-line: none;
  text-decoration-style: none;
}
a:link {
  text-decoration: none;
}
.voters{
  color: rgb(113, 113, 113);
  font-size: 14px ;
}
.rating{
  font-size: 14px ;
}
.cost{
  font-size: 16px ;
  line-height: 20px ;
  font-weight: 800;
}
img{
  width: 360px;
  height: 240px;
  border-radius: 15px;

}
.card-container{
  display: flex;
  flex-wrap: wrap;
  border-radius: 33% solid black;

}
.card{
  flex-basis: 33%;
}
.card-details{
  text-align: left;
}
.card-details img{
  width: 15px;
  height: 15px;
}  
</style>

