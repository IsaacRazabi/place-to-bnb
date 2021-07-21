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
        </span>
        <!-- <span class="cheak-in">
          <label for="cheak in">cheak in</label>
          <input v-model="filterBy.dateStart" type="date" />
        </span>
        <span class="cheak-out">
          <label for="cheak out"> cheak out </label>
          <input v-model="filterBy.dateEnd" type="date" />
        </span> -->

    <span class="demonstration">
    <el-date-picker
      v-model="filterBy.value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
</span>
  <!-- <div class="block">
    <span class="demonstration">Start date time 12:00:00, end date time 08:00:00</span>
    <el-date-picker
      v-model="filterBy.dateEnd"
      type="datetimerange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div> -->


        <span class="guests">
          <label for="guests"> add guests </label>
          <input type="number" v-model="filterBy.guests" />
        </span>
        <img class="red-btn" src="@/assets/imgs/app-logo/search-red-btn.jpg">
      </div>
    </section>
  </form>
</template>


<script>
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
    };
  },
  computed: {},
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
      this.$router.push({path: '/explore'})
         this.$store.dispatch("loadStayes");
    },
    // displayInput(){
    //     this.isSowen = !isSowen
    // }
  },
};
</script>

<style scoped>
.red-btn{
  border-radius: 50%;
  width: 60px;
}
.location{
  text-align: left;
}
input{
  color:gray;
}
input{
  border: 0;
}
.location {
  display: flex;
  flex-direction: column;
}
/* .location::after{
  content: 'location';
} */
.cheak-in {
  display: flex;
  flex-direction: column;
}
.cheak-out {
  display: flex;
  flex-direction: column;
}
.guests {
  display: flex;
  flex-direction: column;
}
.filter-wrraper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-inline-start: 8px;
  margin-inline-end: 8px;
}
</style>
