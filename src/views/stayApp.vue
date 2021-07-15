<template>
<main>
<navBar></navBar>
  <section v-if="stayes">
    <stayList :stayes="stayes"></stayList>
  </section>
  </main>
</template>

<script>
// import preview from "../components/preview.vue";
import stayList from "../components/stay-list.vue";
import navBar from '../components/nav-bar.vue'

export default {
  props: {},
  data() {
    return {
    
    };
  },
  methods: {

  },

  computed: {
    stayes() {
      return this.$store.getters.stayesToDisplay;
    },
  },
  components: {
    // preview,

   navBar,
    stayList,
  },
  created() {
    this.$store.dispatch({ type: "loadStayes" });
  },
};
</script>

<style scoped>
</style>
