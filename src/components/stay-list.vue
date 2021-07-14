<template>
  <ul>
    <li v-for="stay in stayes" :key="stay._id">
      <!-- <router-link :to="'/stay-details/' + stay._id"> -->
        <stay-preview
          :stay="stay"
        ></stay-preview>
      <!-- </router-link> -->
    </li>
  </ul>
</template>

<script>
import stayPreview from "./preview.vue";
export default {
  props: {
    stayes: {
      type: Array,
    },

  },
methods: {
},
  components: {
    stayPreview,
  },
};
  // :user="user"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
