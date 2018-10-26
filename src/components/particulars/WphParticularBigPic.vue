<template>
  <div class="backBlack" @click="hideBox">
    <div class="swiper-container bbb">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(pic,index) in particulars.bannerPic" :key="index">
          <img :src="pic">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    props:["particulars","isshow"],
    methods:{
      newSwiper: function () {
        new Swiper('.bbb', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        });
      },
      hideBox(){
          this.$emit('childByValue', false)
      }
    },
    mounted(){
      this.newSwiper()
    }
  }
</script>

<style scoped>
.backBlack{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
</style>
