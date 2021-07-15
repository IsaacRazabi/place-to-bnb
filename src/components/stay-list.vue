<template>
  <section>
    <div class="list-title">Places to stay near you</div>
    <div class="list-filter">
      <button @click="tooglePrice" class="btn-filter">Price</button>
      <button class="btn-filter">Loacation</button>
      <button @click="toogleType" class="btn-filter">Type of place</button>
    </div>
    <ul>
      <li v-for="stay in stayes" :key="stay._id">
        <!-- <router-link :to="'/stay-details/' + stay._id"> -->
        <stay-preview :stay="stay"></stay-preview>
        <!-- </router-link> -->
      </li>
    </ul>

    <div v-bind:class="{ show: isPriceShow }">
      <div class="block-range">
        <span class="demonstration">Limit Price</span>
        <div
          role="slider"
          aria-valuemin="0"
          aria-valuemax="500"
          aria-orientation="horizontal"
          class="el-slider"
          aria-valuetext="0"
          aria-label="slider between 0 and 500"
        >
          <!---->
          <div class="el-slider__runway">
            <div class="el-slider__bar" style="width: 0%; left: 0%"></div>
            <div
              tabindex="0"
              class="el-slider__button-wrapper"
              style="left: 0%"
            >
              <div
                class="el-tooltip el-slider__button"
                aria-describedby="el-tooltip-973"
                tabindex="0"
              ></div>
            </div>
            <!----><!---->
          </div>
        </div>
        <button class="save-btn-list save-price">Search</button>
      </div>
    </div>

<div v-bind:class="{ show: isTypeShow }">
    <div
      role="group"
      aria-label="checkbox-group"
      class="el-checkbox-group amenities-container"
    >
      <label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="TV" /></span
        ><span class="el-checkbox__label">TV</span></label
      ><label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="Wifi" /></span
        ><span class="el-checkbox__label">Wifi</span></label
      ><label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="Air-conditioning" /></span
        ><span class="el-checkbox__label">Air-conditioning</span></label
      ><label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="Smoking allowed" /></span
        ><span class="el-checkbox__label">Smoking allowed</span></label
      ><label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="Pets allowed" /></span
        ><span class="el-checkbox__label">Pets allowed</span></label
      ><label class="el-checkbox"
        ><span class="el-checkbox__input"
          ><span class="el-checkbox__inner"></span
          ><input
            type="checkbox"
            aria-hidden="false"
            class="el-checkbox__original"
            value="Cooking basics" /></span
        ><span class="el-checkbox__label">Cooking basics</span></label
      ><button class="save-btn-list save-btn-amenities">Search</button>
    </div>
</div>

  </section>
</template>

<script>
import stayPreview from "./preview.vue";
export default {
  data() {
    return {
      isPriceShow: true,
       isTypeShow : true
    };
  },
  props: {
    stayes: {
      type: Array,
    },
  },
  methods: {
    tooglePrice() {
      this.isPriceShow = !this.isPriceShow;
    },
       toogleType() {
      this.isTypeShow = !this.isTypeShow;
    },
  },
  components: {
    stayPreview,
  },
};
// :user="user"
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
  margin: 12px;
  padding: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  margin: 0;
  padding: 0;
}
.list-title {
  padding-top: 30px;
  padding-left: 17px;
  text-align: left;
  font-size: 1.7em;
  font-weight: bold;
  padding-bottom: 20px;
}
.list-filter {
  padding-left: 17px;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 20px;
}
.btn-filter {
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
.btn-filter:hover {
  border: 1px solid rgb(34, 34, 34);
}

.show {
  display: none;
}
/* .price-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 155px;
  padding: 13px 108px;
  background: #fff;
  border: 0.5px solid hsla(0, 0%, 46.3%, 0.28);
  border-radius: 12px;
  line-height: 1.125rem;
  color: #717171;
  z-index: 999;
} */
.block-range {
  position: absolute;
  opacity: 0.95;
  left: 180px;
  top: 254px;
  z-index: 10;
  background-color: #fff;
  border-radius: 18px;
  width: 190px;
  height: 180px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  padding: 10px 10px 10px 15px;
}
.save-btn-list {
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 8px;
  outline: none;
  padding: 6px 6px;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: #222;
  color: #fff;
  width: 100px;
  justify-self: flex-end;
  align-self: flex-end;
  margin: 10px;
}
.el-slider__runway {
  width: 100%;
  height: 6px;
  margin: 16px 0;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}
.el-slider__bar {
  height: 6px;
  background-color: #409eff;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  position: absolute;
}
.el-slider__button-wrapper {
  height: 36px;
  width: 36px;
  z-index: 1001;
  top: -15px;
  transform: translateX(-50%);
  background-color: transparent;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: normal;
}
el-slider__button-wrapper .el-tooltip,
.el-slider__button-wrapper:after {
  vertical-align: middle;
  display: inline-block;
}
.amenities-container {
    position: absolute;
    opacity: .95;
    top: 256px;
    left:380px;
    z-index: 100000;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
    font-size: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 0 15px 15px;
    padding: 10px 0 0 10px;
    height: 180px;
    right: 0;
}
.el-checkbox {
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    margin-right: 30px;
}

.el-checkbox, .el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}
.el-checkbox__input {
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
}
.el-checkbox, .el-checkbox__input {
    display: inline-block;
    position: relative;
    white-space: nowrap;
}
.el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
.el-checkbox__inner:after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(
45deg
) scaleY(0);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
}
.el-checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
}
.el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
}
.el-checkbox__input.is-checked .el-checkbox__inner:after {
    transform: rotate(
45deg
) scaleY(1);
}
.save-btn-list {
    cursor: pointer;
    text-align: center;
    /* font-size: 12px; */
    /* line-height: 18px; */
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 8px;
    outline: none;
    padding: 6px 6px;
    transition: box-shadow .2s ease 0s,transform .1s ease 0s;
    border: none;
    background: #222;
    color: #fff;
    width: 100px;
    justify-self: flex-end;
    align-self: flex-end;
    margin: 10px;
}
</style>
