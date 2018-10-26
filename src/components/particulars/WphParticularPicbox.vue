<template>
  <div>
    <div class="swiper-container ccc" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(pic,index) in particulars.bannerPic" :key="index" @click="showBox">
          <img :src="pic" >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="back"></div>
    <div class="countTime">剩<span>2</span>天<span>13</span>时</div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  export default {
    name:"WphParticularPicbox",
    props:["particulars"],
    methods:{
      newSwiper(){
        new Swiper('.ccc', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
        })
      },
      showBox(){
        this.$emit('childByValue', true)
      }
    },
    mounted(){
      this.newSwiper()
    }
  }
</script>

<style>
  .swiper-container{
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
    height: 3.75rem;
  }
  .swiper-pagination span{
    background: black;
    border: 1px solid #fff;
    width: 5px;
    height: 5px;
  }
  .back{
    width: .42rem;
    height: .42rem;
    border-radius: 50%;
    z-index: 100;
    position: absolute;
    top: .1rem;
    left: .1rem;
    background:rgba(0,0,0,.5) url("../../../static/back_icon.jpg") no-repeat 50%;
  }
  .countTime{
    width: .74rem;
    height: .24rem;
    background: rgba(0,0,0,.5);
    border-top-left-radius: .12rem;
    border-bottom-left-radius: .12rem;
    z-index: 100;
    position: absolute;
    top: .1rem;
    right: 0;
    font-size: .14rem;
    color: white;
    line-height: .24rem;
    text-align: center;
  }
</style>
