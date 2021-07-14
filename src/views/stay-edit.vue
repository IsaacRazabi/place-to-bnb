
<template>
  <section v-if="stayToEdit" class="stay-edit">
    <h1>{{ title }}</h1>
    <form @submit.prevent="saveStay">
      <label for="name">Name: </label>
      <input id="name" type="text" v-model="stayToEdit.name" />
      <label for=" summary"> decsribe your loaction </label>
      <input type="text" v-model="stayToEdit.summary" />
      <label for=" location"> Located at </label>
      <input type="text" v-model="stayToEdit.loc" />
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
    {{stayToEdit}}
    <button><router-link to="/stay-app">back</router-link></button>
  </section>
</template>

<script>
import { stayService } from '../services/stay.service.js';

export default {
  data() {
    return {
      stayToEdit: {
        _id: "",
        name: "",
        summary: "",
        price: null,
        loc:'',
        type: "",
        createdAt: Date.now(),
        imgs: [],
      },
    };
  },
  created() {
    const { stayId } = this.$route.params;
    //cheak if there is on the url an id to determend add or edit
      console.log(stayId);
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
      this.$store
        .dispatch({ type: "saveStay",  stay :this.stayToEdit })
        .then(() => this.$router.push({ path: "/explore"}));
    },
  },
  computed: {
    title() {
      return this.$route.params.stayId ? "stay Edit" : "stay Add";
    },
  },
};
</script>

<style>
</style>