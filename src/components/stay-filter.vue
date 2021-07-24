<template>
  <form @submit.prevent="setFilter">
    <section class="stay-filter">
      <div class="filter-wrraper">
        <span class="location">
          <label> location </label>
              <input v-if="this.$route.name==='explore'"
            @input="setFilter"
            v-model="filterBy.loc.address"
            type="text"
            placeholder="where are you going? "
          />
          <input v-else
            v-model="filterBy.loc.address"
            type="text"
            placeholder="where are you going? "
          />

<div  v-if="filterBy.loc.address "  > 
<input type="search" list="completeWords"  placeholder=""/> 
<datalist id="completeWords"   v-for="(word,idx) in completeWords" :key="idx">
  <option>{{completeWords[0]}} </option>
  <option >{{completeWords[1]}}</option>
  <option >{{completeWords[2]}}</option>
  <option >{{completeWords[3]}}</option>
  <option >{{completeWords[4]}}</option>
  <option >{{completeWords[5]}}</option>
  <option >{{completeWords[6]}}</option>
  <option >{{completeWords[7]}}</option>
  <option >{{completeWords[8]}}</option>
  <option >{{completeWords[9]}}</option>
  <option >{{completeWords[10]}}</option>
</datalist>



<!-- <select v-if="newMail.to">
<option v-for="word in completeWords" >
  {{word}}
</option>
</select> -->

</div>

        </span>
    <span class="demonstration">
    <el-date-picker
      v-model="filterBy.value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
</span>
        <span class="guests">
          <label for="guests"> add guests </label>
          <input type="number" v-model="filterBy.guests" />
        </span>
        <button> <img  class="red-btn" src="@/assets/imgs/app-logo/search-red-btn.jpg"></button>
      </div>
    </section>
  </form>
</template>


<script>
// import {stayService} from '../services/stay.service.js'
export default {
  name: "stay-filter",
  components: {},
  props: {},
  created() {},
  data() {
    return {
      filterBy: {
        loc: {address:''},
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
      },
      isSowen: false,
       value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      //   searchWords: stayService.loadSearchNames()||[],
      // completeWords : [],
    };
  },
  computed: {},
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
      // this.activeAutoComplete()
      this.$router.push({path: '/explore'})
         this.$store.dispatch("loadStayes");
    },
      // activeAutoComplete() {

      // this.searchWords.splice(0, this.searchWords.length - 1);
      // console.log(this.filterBy.loc.address);
      // let userSearchInput = this.filterBy.loc.address.substring(0,this.filterBy.loc.address.indexOf("@"));
      // console.log(userSearchInput);

    //   if ((this.searchWords).includes(this.filterBy.loc.address)) return; 
    //   this.searchWords.push(this.filterBy.loc.address);
    //   stayService.saveSearchNames(this.searchWords)
    // },
    //    createAutComplete(names){
    //   this.completeWords = names
    // },
  },
  // watch: {
  //   filterBy: {
  //     handler(newVal) {
  //       for (let index = 0; index < this.searchWords.length; index++) {
  //         if (this.filterBy.loc.address[0] === this.searchWords[index][0]) {
  //           const filteredNames = this.searchWords.filter((name)=>{
  //             if (name[0]===newVal.loc.address[0]) return name
  //           })
  //           this.createAutComplete(filteredNames)

            
  //         }
  //       }
        
  //     },
  //     deep: true,
  //   },
    
  // },
};
</script>

<style scoped>
input, button, submit { border:none; background: white; } 
</style>
