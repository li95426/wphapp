<template>
<div class="swiper-container aaa">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in list" :key="i">
          <a href=""><img :src="i.pic" alt=""></a>
        </div>
    </div>
    <div class="swiper-pagination dian" id="swiperspan">
      
    </div>
</div>
</template>

<script>
import Swiper from "swiper";
export default {
    name:"WphAppliancesBanner",
    props:["list"],
    mounted(){
        new Swiper('.aaa', {
          preloadImages:false,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
          loop:true,
          pagination: {
            el: '.dian',
            clickable :true
          }
        })
    }
}
</script>

<style scoped>
    /*@import "../../assets/swiper.css";*/
  .swiper-container{
    width: 100%;
    height: 1.5rem;
  }
  .swiper-slide img{
    width: 100%;
    height: 1.5rem;
  }
</style>
