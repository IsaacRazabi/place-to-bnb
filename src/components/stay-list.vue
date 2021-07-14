<template>
<section>
  <div class="list-title">
    Places to stay near you
  </div>
  <div class="list-filter">
    <button class="btn-filter">Loacation</button>
    <button class="btn-filter">Type of place</button>
    <button class="btn-filter">Price</button>
  </div>
  <ul>
    <li v-for="stay in stayes" :key="stay._id">
      <!-- <router-link :to="'/stay-details/' + stay._id"> -->
        <stay-preview
          :stay="stay"
        ></stay-preview>
      <!-- </router-link> -->
    </li>
  </ul>
</section>
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
  li{
    list-style-type: none;
    margin: 12px;
    padding: 0;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    margin: 0;
    padding: 0;
  }
  .list-title{
    padding-top: 30px;
    padding-left: 17px;
    text-align: left;
    font-size: 1.7em;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .list-filter{
    padding-left: 17px;
    text-align: left;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .btn-filter{
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
  .btn-filter:hover{
    border: 1px solid rgb(34, 34, 34);
  }
</style>
