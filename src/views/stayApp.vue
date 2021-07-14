<template>
  <section v-if="stayes">
    <stayList :stayes="stayes"></stayList>
  </section>
</template>

<script>
// import preview from "../components/preview.vue";
import stayList from "../components/stay-list.vue";

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
   
    stayList,
  },
  created() {
    this.$store.dispatch({ type: "loadStayes" });
  },
};
</script>

<style scoped>
</style>
