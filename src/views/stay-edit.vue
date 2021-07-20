
<template>
 <main>
<navBar></navBar>
<main class="add-container" v-if=" loggedInUser">
  <section v-if="stayToEdit" >
    <form class="stay-edit"  @submit.prevent="saveStay">
    <h1>{{ title }}</h1>
      <label for="name">Name: </label>
      <input class="edit-input" id="name" type="text" v-model="stayToEdit.name" />
      <label  for=" summary"> decsribe your loaction </label>
      <input class="edit-input" type="text" v-model="stayToEdit.summary" />
      <label for=" location"> Located at </label>
      <input class="edit-input" type="text" v-model="stayToEdit.loc.address" />
      <label for="price">Price: </label>
      <input class="edit-input" id="price" type="text" v-model.number="stayToEdit.price" />
      <label for="type">Type: </label>
      <select name="" placeholder="Select category" v-model="stayToEdit.type">
        <option value="house">house</option>
        <option value="bikta">bikta</option>
        <option value="ohel">ohel</option>
      </select>
      <!-- <label for="upload Photos">upload Photos</label>
      <input class="edit-input" type="file" id="input" multiple /> -->
      <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
  <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
</el-upload>
      <button>Save</button>
    </form>
    <button><router-link to="/explore">back</router-link></button>
  </section>
  </main>
  <main v-else>
<h1>
  you can easily sign-up and becomeone of our hostes !
</h1>
<router-link to="/sign-up">
<button>
  sign-up
</button>
 </router-link>
  </main>
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
       loggedInUser() {
      return this.$store.getters.loggedinUser
    }
  },
  components:{
    navBar
  }
  
}
</script>

<style  scoped>

.add-container{
      display: flex;
    flex-direction: column;
    align-items: center;
}
.stay-edit{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap:10px
    }
    .edit-input{
  min-width: 250px;
    /* width: 28%; */
    max-width: 400px;
    outline: none!important;
    margin-bottom: 7px;
    border-radius: 8px;
    height: 2.6rem;
    border-width: 1px;
}
button{
      min-width: 250px;
    /* width: 28%; */
    max-width: 400px;
    color: hotpink;
    font-size: 1rem;
}
</style>