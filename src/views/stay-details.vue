<template>
  <section v-if="toy">
    <p>{{ stay.loc.country }}</p>
    <p>{{ stay.loc.host }}</p>
    <p>{{ stay.loc.address }}</p>
    <p>price per night : {{ stay.price }}</p>
    <img v-for="img in imgs" :key="img.id" :src="img" />
  </section>
</template>

<script>
import { stayService } from "../services/stay.service.js";
export default {
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {
      imgs: null,
    };
  },
  methods: {
    showImage() {
      return this.stay.imgUrls[0];
    },
  },
  created() {
    const { stayId } = this.$route.params;
    if (stayId)
      stayService.getById(stayId).then((stay) => {
        this.stay = stay;
      });
  },
};
</script>
