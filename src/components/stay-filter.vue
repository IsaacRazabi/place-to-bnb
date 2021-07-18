<template>
  <form @submit.prevent="setFilter">
    <section class="stay-filter">
      <div class="filter-wrraper">
        <span class="location">
          <label> location </label>
              <input v-if="this.$route.name==='explore'"
            @input="setFilter"
            v-model="filterBy.loc"
            type="text"
            placeholder="where are you going? "
          />
          <input v-else
            v-model="filterBy.loc"
            type="text"
            placeholder="where are you going? "
          />
        </span>
        <span class="cheak-in">
          <label for="cheak in">cheak in</label>
          <input v-model="filterBy.dateStart" type="date" />
        </span>
        <span class="cheak-out">
          <label for="cheak out"> cheak out </label>
          <input v-model="filterBy.dateEnd" type="date" />
        </span>
        <span class="guests">
          <label for="guests"> add guests </label>
          <input type="number" v-model="filterBy.guests" />
        </span>
        <button>🔎</button>
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
      },
      isSowen: false,
    };
  },
  computed: {},
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
         this.$store.dispatch("loadStayes");
      // this.$router.push({path: '/explore'})
    },
    // displayInput(){
    //     this.isSowen = !isSowen
    // }
  },
};
</script>

<style scoped>
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
