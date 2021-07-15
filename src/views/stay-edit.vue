
<template>
<main>
<navBar></navBar>
  <section v-if="stayToEdit" class="stay-edit">
    <h1>{{ title }}</h1>
    <form @submit.prevent="saveStay">
      <label for="name">Name: </label>
      <input id="name" type="text" v-model="stayToEdit.name" />
      <label for=" summary"> decsribe your loaction </label>
      <input type="text" v-model="stayToEdit.summary" />
      <label for=" location"> Located at </label>
      <input type="text" v-model="stayToEdit.loc.address" />
      <label for="price">Price: </label>
      <input id="price" type="text" v-model.number="stayToEdit.price" />
      <label for="type">Type: </label>
      <select name="" placeholder="Select category" v-model="stayToEdit.type">
        <option value="house">house</option>
        <option value="bikta">bikta</option>
        <option value="ohel">ohel</option>
      </select>
      <label for="upload Photos">upload Photos</label>
      <input type="file" id="input" multiple />
      <button>Save</button>
    </form>
    <button><router-link to="/stay-app">back</router-link></button>
  </section>
  </main>
</template>

<script>
import { stayService } from '../services/stay.service.js';
import navBar from '../components/nav-bar.vue'
export default {
  data() {
    return {
      stayToEdit: {
        _id: "",
        name: "",
        summary: "",
        price: null,
        loc:{address:''},
        type: "",
        createdAt: Date.now(),
        imgUrls: [],
        reviews:[{rate:4.2}]
      },
    };
  },
  created() {
    const { stayId } = this.$route.params;
    //cheak if there is on the url an id to determend add or edit
    if (stayId) {
        stayService.getById(stayId).then((stay) => {
            this.stayToEdit = stay;
      });
    } 
    else {
      this.stayToEdit = stayService.getEmptyStay();
    }
  },
  methods: {
    saveStay() {
      console.log(this.stayToEdit);
      if(!this.stayToEdit.imgUrls.length){
     this.stayToEdit.imgUrls.push("https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large") 
      }
      // if (!this.stayToEdit.reviews.length){this.stayToEdit.reviews[0].rate=4.2}

    
      this.$store
        .dispatch({ type: "saveStay",  stay :this.stayToEdit })
        .then(()=>{
          this.$store.dispatch({ type: "loadStayes" });
         })
        .then(() => this.$router.push({ path: "/explore"}));
    },
  },
  computed: {
    title() {
      return this.$route.params.stayId ? "stay Edit" : "stay Add";
    },
  },
  components:{
    navBar
  }
};
</script>

<style>
</style>