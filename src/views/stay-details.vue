<template>
  <section v-if="stay" class="details-section">
    <div class="deatails-head-container">
      <h2 class="details-title" >{{ stay.name }}</h2>
      <div class="details-subtitle">
        <div>
          <img src="../assets/examp/red-star.jpg" alt="" srcset="" />
          <span class="rating"> {{ stay.reviews[0].rate }} </span>
          <span class="voters"
            >({{ stay.reviews[0].votes }} <a>reviews</a>)
          </span>
          <span>· {{ stay.loc.address }}, {{ stay.loc.country }}</span>
        </div>
        <div class="share-n-save">
          <img src="../assets/examp/share-icon.jpg" alt="" srcset="" />
          <span> Share </span>
          <img src="../assets/examp/save-icon.jpg" alt="" srcset="" />
          <span> Save</span>
        </div>
      </div>
      <div class="details-galery">
        <img class="pic1" :src="showImage" alt="" srcset="" />
        <img class="pic2" src="../assets/examp/exam-home2.jpg"/>
        <img class="pic3" src="../assets/examp/exam-home4.jpg"/>
        <img class="pic4" src="../assets/examp/exam-home3.jpg"/>
        <img class="pic5" src="../assets/examp/exam-home5.jpg"/>
      </div>
    </div>

    <main class="details-main-container">

      <div class="details-left-column">
        <div class="details-left-column-title">
          <div class="title-details">
          <h2>Entire house hosted by  {{stay.host.fullname}}</h2>
          <span>3 guests · 1 bedroom · 2 beds · 1 bath</span>
          </div>
          <div class="details-left-column-avatar">
            <img src="../assets/examp/exam-avatar.jpg"/>
          </div>
        </div>

        <div class="ditails-description">
          <div class="ditails-description-sections">
            <div class="ditails-description-icon">
              <img src="../assets/examp/great-location-icon.jpg"/>
            </div>
            <div class="ditails-description-title">
              <h3>Great location</h3>
              <p>93% of recent guests gave the location a 5-star rating.</p>
            </div>
          </div>
          <div class="ditails-description-sections">
            <div class="ditails-description-icon">
              <img src="../assets/examp/wifi-icon.jpg"/>
            </div>
            <div class="ditails-description-title">
              <h3>Wifi</h3>
              <p>Guests often search for this popular amenity.</p>
            </div>
          </div>
          <div class="ditails-description-sections">
            <div class="ditails-description-icon">
              <img src="../assets/examp/outstanding-hosp-icon.jpg"/>
            </div>
            <div class="ditails-description-title">
              <h3>Outstanding hospitality</h3>
              <p>6 recent guests complimented Maayan for outstanding hospitality.</p>
            </div>
          </div>
        </div>
        <div class="details-all-about">
          <h3>All about {{stay.host.fullname}}’s place</h3>
          <p>
            Our home is located in the Galilee close to tzfat and the kineret lake.
            The place is perfect for families (with kids) ,couples, solo adventurers, business travelers.
            we built this home by our own hands , and it feels really cozy and homy
          </p>
        </div>
        <h3>What this place offers</h3>      
        <div class="details-offers">
          <div class="details-offers-column-left">
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Kitchen-icon.jpg"/>
              <div>Kitchen</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Free-parking-on-premises-icon.jpg"/>
              <div>Free parking on premises</div>
            </div>
           <div class="details-offers-column">
              <img src="../assets/examp/icons/Window-AC-unit-icon.jpg"/>
              <div>Window AC unit</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Patio-or-balcony-icon.jpg"/>
              <div>Patio or balcony</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Refrigerator-icon.jpg"/>
              <div>Refrigerator</div>
            </div>
          </div>
          <div class="details-offers-column-right">
            <div class="details-offers-column">
              <img src="../assets/examp/icons/wifi-icon.jpg"/>
              <div>Wifi</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/tv-icon.jpg"/>
              <div>TV</div>
            </div>
           <div class="details-offers-column">
              <img src="../assets/examp/icons/Bathtub-icon.jpg"/>
              <div>Bathtub</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Backyard-icon.jpg"/>
              <div>Backyard</div>
            </div>
            <div class="details-offers-column">
              <img src="../assets/examp/icons/Oven-icon.jpg"/>
              <div>Oven</div>
            </div>
          </div>
        </div>

      </div>
    
      <div class="details-right-column">
        <div class="details-reservation">
          <div class="details-reservation-box">
            <div class="details-reservation-title">
              <div class="details-reservation-price">
                <p>
                  <span class="cost">
                    ₪{{stay.price}} 
                  </span>
                   <span>
                   / night 
                   </span>
                </p>
              </div>
              <div class="details-reservation-rating">
                <img src="../assets/examp/red-star.jpg" alt="" srcset="" />
                <span class="rating"> {{ stay.reviews[0].rate }} </span>
                <span class="voters">({{ stay.reviews[0].votes }})</span>
              </div>
            </div>
            <form>
              <div class="details-reservation-Order">
                <div class="details-reservation-check-in">
                  <p>CHECK IN</p>
                  <p><input placeholder="" class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" /></p>
                  </div>
                <div class="details-reservation-check-out">
                  <p>CHECK OUT</p>
                  <p><input placeholder="" class="textbox-n" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="date" /></p>
                  </div>
                <div class="details-reservation-guests"><p>GUESTS</p><p><input type="number"/></p></div>
              </div>
              <div class="form-btn-approval">
                <button>Check availability</button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </main>
    <aside class="details-reviews">
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar1.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Phillip</h5>
            <span>April 2018</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              This place is amazing! I would recommend it to anyone who wants to stay in the region. 
              It is close to both Haifa and Tiberias with a view that is the best in the region.
          </p>
        </div>
      </div>
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar2.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Susan</h5>
            <span>April 2017</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              We had a wonderful stay at Maayan's place. The location is lovely, high on a mountain with an amazing view.
              The house was spacious, clean, and well-equipped 
          </p>
        </div>
      </div>
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar3.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Elishai</h5>
            <span>August 2020</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              We stayed two night during the weekend with our extended family . 
              The house was very accommodating, great shower. Wonderful for summer
          </p>
        </div>
      </div>
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar4.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Mika</h5>
            <span>March 2018</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              A great and funky place with a fantastic view of Galilea mountains. 
              Very convenient if you want to explore Northern Israel. 
              A bit far from grocery stores/restaurants but compensated by tranquility.
          </p>
        </div>
      </div>
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar5.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Noa</h5>
            <span>April 2021</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              House is great to relax in. Pleasant breeze even during mid August. Relaxing porch with couches and dining area. 
              Hararit is quite and has access to some light hiking in the surrounding forests
          </p>
        </div>
      </div>
      <div class="details-reviews-box">
        <div class="details-reviews-user-details">
          <div class="details-reviews-user-img">
            <img src="../assets/examp/exam-avatar6.jpg"/>
          </div>
          <div class="details-reviews-user-name-n-date">
            <h5>Jenny</h5>
            <span>August 2020</span>
          </div>
        </div>
        <div class="details-review-text">
          <p>
              We stayed at this house for 2 night in August, 6 adults and one 1.3 years old child. The house is beautiful and the view is amazing. My son is in love with this place and all the toys.
              Notice that there is no air conditioning in the rooms, so some of them are quite hot, even though there is a fan there.
          </p>
        </div>
      </div>
    </aside>
    <div>
    
    </div>




    <!-- <div>
      <p>{{ stay.loc.country }}</p>
      <p>{{ stay.loc.host }}</p>
      <p>{{ stay.loc.address }}</p>
      <p>price per night : {{ stay.price }}</p>
      <div v-for="(img,imgIdx) in stay.imgUrls"  :key="imgIdx">
        <img :src="img" >
      </div>
      <p>reviews :</p>
      <div v-for="(review, reviewsIdx) in stay.reviews" :key="reviewsIdx">
        <p>{{ review.rate }}</p>
        <p>{{ review.txt }}</p>
        <p>{{ review.by.fullname }}</p>
        <img :src="review.by.imgUrl" />
      </div>
    </div> -->
  </section>
</template>

<script>
import { stayService } from "../services/stay.service.js";
export default {
  props: {
    stay: {
      type: Object,
    },
    user: {
      type: Object,
    },
    imgs: {
      type: Array,
      //   deafult : "../assets/images/images/4.jpg"
    },
  },
  // data() {
  //   return {
  //    stay: "",
  //   };
  // },
  computed: {
    showImage() {
      return this.stay.imgUrls[0];
    },
    showAvatarImage(){
      return this.stay.host.imgUrl;
    }
  },
  methods: {
    showImages() {
      return this.stay.imgUrls;
    },
  },
  created() {
    window.scrollTo(0,0);
    const { stayId } = this.$route.params;
    stayService.getById(stayId).then((stay) => {
      this.stay = stay;
    });
    console.log(this.stay);
  },
};
</script>

<style>
.details-reservation-Order input{
  border: none;
}
.details-reservation-Order p{
  text-align: left;
  padding-left:10px;
  color: black;
  font-size: 12px;

}
.details-reservation-Order{
  display: flex;
  flex-wrap: wrap;
}
.details-reservation-check-in{
  width: 49%;
  height: 50%;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-top-left-radius: 15px;
}
.details-reservation-check-out{
  width: 50%;
  height: 50%;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top-right-radius: 15px;
}
.details-reservation-guests{
  width: 100%;
  height: 50%;
  border: 1px solid black;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.form-btn-approval{
  padding-bottom: 20px;
}
.form-btn-approval button{
    width: 100%;
    height: 48px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    color: white;
    background-color: rgb(255, 56, 92);
}
.details-reservation-rating{
    position: relative;
    top: 18px;
}
.details-reservation-rating img{
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
.details-reservation-title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin: 0 5px;
}
.cost{
  font-size: 20px ;
  line-height: 20px ;
  font-weight: 800;
}
.details-reservation-box{
  text-align: center;
}
.details-reservation-Order{
  width: 400px;
  height: 170px;
  /* border: 1px solid black; */
  margin-bottom: 30px;
  border-radius: 15px;
}
.details-main-container{
  display: flex;
}
.details-reservation {
    border: 1px solid #ddd;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 20%);
    padding: 24px 24px 0 24px;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 70px;
    border-radius: 15px;
    width: 400px;
    position: sticky;
    top: 100px;
}
.details-review-text{
  width: 80%;
}
.details-reviews{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.details-reviews-box{
  width: 50%;
  text-align: left;
  padding-top:50px;
  align-items: center
}
.details-reviews-user-details{
  width: 50%;
  display: flex;
}
.details-reviews-user-img img{
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.details-reviews-user-name-n-date{
  margin-left:12px ;
}
.details-reviews-user-name-n-date span{
    color: rgb(113, 113, 113) ;
    font-weight: 400 ;
    font-size: 14px ; 
    line-height: 20px;
    position: relative;
    bottom: 20px;
    font-family: Cereal;
}
h3{
  text-align: left;
}
.details-offers{
  display: flex;
  padding: 10px 0px 40px 0px;
  border-bottom: 1px solid #ddd;
}
.details-offers-column{
  display: flex;
  align-items: center ;
  padding-bottom: 16px;
  margin-right: 45px;
}
.details-offers-column img{
  margin-right: 15px;
  border-radius: 50%;
}
.details-offers{
  text-align: left;
}
.details-all-about{
  text-align: left;
  padding: 40px 0px 40px 0px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 60px;
}
.details-all-about p{
  line-height: 24px;
  color: #222222;
  font-size: 16px;
}
.ditails-description{
    padding: 40px 0px 40px 0px;
    border-bottom: 1px solid #ddd;
}
.ditails-description-title{
  text-align: left;
}
.ditails-description-title p{
  font-size: 16px ;
  line-height: 5px ;
}

.ditails-description-sections{
  display:flex
}
.ditails-description-icon img{
  margin-top:15px;
  padding-right: 15px;
  width: 29px;
}
.details-left-column-avatar{
  padding-top:15px;
}
.details-left-column-avatar img{
  width: 56px;
  height: 56px;;
  border-radius: 50%;
}
.details-left-column{
  width: 50%;
}
.details-left-column-title{
    display: flex;
    align-items: center;
    justify-content:space-between; 
    padding-bottom: 30px;
    border-bottom: 1px solid #ddd
}
.title-details{
 text-align: left;
}
.details-left-column-title span {
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
  Helvetica Neue, sans-serif;
  font-weight: 400 ;
  font-size: 16px;
  text-align: left;
}
h2 {
  text-align: left;
}
.details-section {
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-auto-flow: dense;
}
.deatails-head-container {
  grid-column: 2;
  margin-bottom: 50px;
}
.details-subtitle {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", sans-serif;
  font-size: 14px;
  position: relative;
  color: rgb(113, 113, 113);
  /* text-decoration: underline; */
}
.rating {
  font-weight: 600;
}
.details-subtitle img {
  width: 15px;
  height: 15px;
}
.share-n-save span {
  font-weight: 600;
  margin-right: 10px;
  text-decoration-line: underline;
}
.details-galery {
  width: 1240px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 25vh);
  grid-gap: 7px;
}
.details-galery .pic1 {
  grid-area: 1/1/3/3;
  border-radius: 10px 0 0 10px;
  height: 100%;
  width: 100%;
}
.details-galery .pic2 {
  grid-area: 1/3/2/4;
  height: 100%;
  width: 100%;
}
.details-galery .pic3 {
  grid-area: 2/3/3/4;
  height: 100%;
  width: 100%;
}
.details-galery .pic4 {
  grid-area: 1/4/2/5;
  border-radius: 0 10px 0 0;
  height: 100%;
  width: 100%;
}
.details-galery .pic5 {
  grid-area: 2/4/3/5;
  border-radius: 0 0 10px 0;
  height: 100%;
  width: 100%;
}

/* .detailes-main-pic img{
 width: 490px;
  height: 490px;
}
.details-sub-galery{
   
    justify-content:space-between; 
}
.details-sub-galery img{
  max-width: 270px;
  max-height: 270px;
} */
</style>
