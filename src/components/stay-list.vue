<template>
  <section>
    <div class="list-title">Places to stay near you</div>
    <div class="list-filter">
      <button @click="tooglePrice" class="btn-filter">Price</button>
      <button class="btn-filter">Loacation</button>
      <button @click="toogleType" class="btn-filter">Type of place</button>
    </div>
   {{stayes.length}}
    <ul>
      <li v-for="stay in stayes" :key="stay._id">
        <!-- <router-link :to="'/stay-details/' + stay._id"> -->
        <stay-preview :stay="stay"></stay-preview>
        
        <!-- </router-link> -->
      </li>
    </ul>


    <div v-bind:class="{ show: isPriceShow, priceContainer: !isPriceShow }">
      <main>
        <p>choose your price</p>
        <div class="block">
          <span class="demonstration">min price</span>
          <el-slider :max=1000 v-model="filterBy.priceStart"></el-slider>
          <p>{{ filterBy.priceStart }}₪</p>
        </div>
        <div class="block">
          <span class="demonstration">max price</span>
          <el-slider :max=1000  v-model="filterBy.priceEnd" ></el-slider>
          <p>{{ filterBy.priceEnd }}₪</p>
        </div>
      </main>
      <button @click="filterByPrice">search</button>
      <button @click="clearPrice">clear</button>
    </div>

    <div v-bind:class="{ show: isTypeShow, amenitiesContainer: !isTypeShow }">
      <main>
  <el-checkbox v-model="filterBy.amenities.TV">TV</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Wifi">Wifi</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Kitchen">Kitchen</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Smokingallowed">Smoking allowed</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Petsallowed">Pets allowed</el-checkbox>
  <el-checkbox v-model="filterBy.amenities.Cookingbasics">Cooking basics</el-checkbox>
      <button @click="filterByAmenities">search</button>
      <button @click="clearAmenities">clear</button>
</main> 

    </div>
  </section>
</template>

<script>
import stayPreview from "./preview.vue";
export default {
  data() {
    return {
      isPriceShow: true,
      isTypeShow: true,
      filterBy:{
        loc: "",
        dateStart: new Date().toISOString().substr(0, 10),
        dateEnd: new Date().toISOString().substr(0, 10),
        guests: 0,
              priceStart: 0,
      priceEnd: 1000,
      amenities:{
        TV:false,
Wifi:false,
Kitchen:false,
Smokingallowed:false,
Petsallowed:false,
Cookingbasics:false,
      }
      }
    };
  },
  props: {
    stayes: {
      type: Array,
    },
  },
  methods: {
    clearAmenities(){
      this.filterBy.amenities.TV=false;
this.filterBy.amenities.Wifi=false;
this.filterBy.amenities.Kitchen=false;
this.filterBy.amenities.Smokingallowed=false;
this.filterBy.amenities.Petsallowed=false;
this.filterBy.amenities.Cookingbasics=false;
 this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
  this.$store.dispatch("loadStayes");
    },
    clearPrice(){
 this.filterBy.priceStart= 0,
      this.filterBy.priceEnd= 1000;
       this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
        this.$store.dispatch("loadStayes");
    },
    tooglePrice() {
      this.isPriceShow = !this.isPriceShow;
    },
    toogleType() {
      this.isTypeShow = !this.isTypeShow;
    },
    filterByAmenities(){
  this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
      this.$store.dispatch("loadStayes");
    },
    filterByPrice() {
      this.$store.commit({ type: "filterStayes", filterBy:this.filterBy });
      this.$store.dispatch("loadStayes");
    },
  },
  computed:{
    priceToFilter(){return {priceStart:this.filterBy.priceStart , priceEnd:this.filterBy.priceEnd }}
  },
  components: {
    stayPreview,
  },
};
// :user="user"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
  margin: 12px;
  padding: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin: 0;
  padding: 0;
}
.list-title {
  padding-top: 30px;
  padding-left: 17px;
  text-align: left;
  font-size: 1.7em;
  font-weight: bold;
  padding-bottom: 20px;
}
.list-filter {
  padding-left: 17px;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
}
.btn-filter {
  text-align: center;
  border: 1px solid #b0b0b0;
  background-color: #fff;
  outline: none;
  margin: 0;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 16px;
  margin-right: 10px;
}
.btn-filter:hover {
  border: 1px solid rgb(34, 34, 34);
}

.show {
  display: none;
}
.priceContainer {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 155px;
  padding: 13px 108px;
  background: #fff;
  border: 0.5px solid hsla(0, 0%, 46.3%, 0.28);
  border-radius: 12px;
  line-height: 1.125rem;
  color: #717171;
  z-index: 999;
  width: 200px;
}
.amenitiesContainer{
    display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 155px;
  padding: 13px 108px;
  background: #fff;
  border: 0.5px solid hsla(0, 0%, 46.3%, 0.28);
  border-radius: 12px;
  line-height: 1.125rem;
  color: #717171;
  z-index: 999;
  width: 200px;
  left: 500px;
}
.block-range {
  position: absolute;
  opacity: 0.95;
  left: 180px;
  top: 254px;
  z-index: 10;
  background-color: #fff;
  border-radius: 18px;
  width: 190px;
  height: 180px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  padding: 10px 10px 10px 15px;
}
</style>
