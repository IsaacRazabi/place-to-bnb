
<template>
<section>
     <div id="map" style="width: 100%; height: 400px"></div>
</section>
</template>

<script>
  
export default {
 
  data() {
    return {
        gMap: ''
    }
  },

  computed: {
  
},
  methods: {
      initMap(lat = 32.0749831, lng = 34.9120554) {
    return this._connectGoogleApi()
        .then(() => {
            this.gMap = new google.maps.Map(
                document.querySelector('#map'), {
                center: { lat, lng },
                zoom: 15
            })
            return this.gMap
        })
    },

 _connectGoogleApi() {
        if (window.google) return Promise.resolve()
        const API_KEY = 'AIzaSyCbite0Sj6yV5I4oJPBkTebcmdfT01sW9w'; 
        var elGoogleApi = document.createElement('script');
        elGoogleApi.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
        elGoogleApi.async = true;
        document.body.append(elGoogleApi);
    
        return new Promise((resolve, reject) => {
            elGoogleApi.onload = resolve;
            elGoogleApi.onerror = () => reject('Google script failed to load')
        })
    }
  },
  created(){
this.initMap()
  },
  destroyed() {

  },

};
</script>
<style scoped>

</style>


