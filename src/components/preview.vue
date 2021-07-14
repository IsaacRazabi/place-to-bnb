<template>
<div class="card-container">
      <div class="card">
    <router-link  :to="'/stay/edit/'+stay._id">edit</router-link>
   <router-link  :to="'/stay/details/'+stay._id">
              <p>{{stay.loc.country}}</p>
                <p>{{stay.loc.address}}</p>
             <p>price per night : {{stay.price}}</p>
             <img :src="showImage"/>
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
img{
  width: 100%;
}
.card-container{
  display: flex;
  flex-wrap: wrap;
  border-radius: 33% solid black;
}
.card{
  flex-basis: 33%;
}
  
</style>

