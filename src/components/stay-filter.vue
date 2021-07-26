<template>
  <form @submit.prevent="setFilter">
    <section class="stay-filter">
      <div class="filter-wrraper">
        <span class="location only-location">
          <label> Location </label>
          <input
            v-if="this.$route.name === 'explore'"
            @input="setFilter"
            v-model="filterBy.loc.address"
            type="text"
            color="rgb(180, 169, 169);"
            placeholder="Where are you going? "
          />
          <input
            v-else
            v-model="filterBy.loc.address"
            type="text"
            placeholder="Where are you going? "
          />
        </span>
        <span class="location">
          <label> Check in </label>
          <input
            class="textbox-n"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            color="rgb(180, 169, 169);"
            placeholder="Add dates "
          />
          
        </span>
        <span class="location">
          <label> Check out </label>
          <input
            class="textbox-n"
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            color="rgb(180, 169, 169);"
            placeholder="Add dates "
          />
          
        </span>
        <span class="location only-guests">
          <label> Guests </label>
          <input
            
            type="number"
            color="rgb(180, 169, 169);"
            placeholder="Add guests "
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

        <!-- <span class="demonstration">
    <el-date-picker
      v-model="filterBy.value1"
      type="daterange"
      range-separator="To"
      outline="none"
      border= "0px solid"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
</span> -->
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

        <!-- <span class="guests">
          <label for="guests"> Add guests </label>
          <input type="number" v-model="filterBy.guests" />
        </span> -->
       <button>
         <img class="red-btn" src="@/assets/imgs/app-logo/search-red-btn.jpg" />
         </button>
      </div>
    </section>
  </form>
</template>


<script>
import { stayService } from "../services/stay.service.js";
export default {
  name: "stay-filter",
  components: {},
  props: {},
  created() {},
  data() {
    return {
      filterBy: {
        loc: { address: "" },
        dateStart: new Date().toISOString().substr(0, 10),
        dateEnd: new Date().toISOString().substr(0, 10),
        guests: 0,
        priceStart: 0,
        priceEnd: 1000,
        amenities: {
          TV: false,
          Wifi: false,
          Kitchen: false,
          Smokingallowed: false,
          Petsallowed: false,
          Cookingbasics: false,
        },
      },
      isSowen: false,
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      searchWords: stayService.loadSearchNames() || [],
      completeWords: [],
    };
  },
  computed: {},
  methods: {
    setFilter() {
      this.$emit("filter", JSON.parse(JSON.stringify(this.filterBy)));
      this.activeAutoComplete();
      this.$router.push({ path: "/explore" });
      this.$store.dispatch("loadStayes");
    },
    activeAutoComplete() {
      if (this.searchWords.includes(this.filterBy.loc.address)) return;
      this.searchWords.push(this.filterBy.loc.address);
      stayService.saveSearchNames(this.searchWords);
    },
    // createAutoComplete(names) {
    //   this.completeWords = names;
    // },
    // compareWords(word1, word2) {
    //   let rounds = 0;
    //   for (let index = 0; index < word2.length; index++) {
        
    //     if (word1[index] === word2[index]) rounds++;
    //   }
    //   if (rounds === word2.length) return word2;
    // },
  },
  watch: {
    filterBy: {
      handler(newVal) {
        const filteredNames = this.searchWords.filter((word) => {
          return word.startsWith(newVal.loc.address)
        });
          this.completeWords = filteredNames;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
input,
button,
submit {
  border: none;
  background: white;
}
.a-clean {
  text-decoration: none;
  list-style: none;
}

</style>
