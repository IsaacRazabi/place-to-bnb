<template>
  <form @submit.prevent="setFilter">
    <section class="stay-filter">
      <div class="filter-wrraper">
        <span class="location">
          <label> location </label>
          <input
            v-if="this.$route.name === 'explore'"
            @input="setFilter"
            v-model="filterBy.loc.address"
            type="text"
            placeholder="where are you going? "
          />
          <input
            v-else
            v-model="filterBy.loc.address"
            type="text"
            placeholder="where are you going? "
          />

          <div v-if="filterBy.loc.address">
                <input  list="completeWords"  />
                <datalist id="completeWords">
                  <option  v-for="(word, idx) in completeWords"
                :key="idx">{{ word }}</option>
                </datalist>

        

          </div>

        </span>
        <span class="demonstration">
          <el-date-picker
            v-model="filterBy.value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          >
          </el-date-picker>
        </span>
        <span class="guests">
          <label for="guests"> add guests </label>
          <input type="number" v-model="filterBy.guests" />
        </span>
        <button>
          <img
            class="red-btn"
            src="@/assets/imgs/app-logo/search-red-btn.jpg"
          />
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
