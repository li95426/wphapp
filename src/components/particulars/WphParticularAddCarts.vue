<template>
    <div class="box">
      <div class="carts"></div>
      <div  class="addCarts" @click="addgoods">加入购物车</div>
      <img id="img" ref="myimg" :src="particulars.bannerPic[0]" v-show="picmove">
    </div>
</template>

<script>
    export default {
        name: "WphParticularAddCarts",
      props:["particulars"],
      data(){
        return{
          picmove:false
        }
      },
      methods:{
          addgoods(){
            this.picmove=true;
            let top=-3;
            let left=2;
            let width=0.9;
            let mytime=setInterval(()=>{
              top+=.17;
              left-=.1;
              width-=.03;
              this.$refs.myimg.style.top=top+"rem";
              this.$refs.myimg.style.left=left+"rem";
              this.$refs.myimg.style.width=width+"rem";
              this.$refs.myimg.style.height=width+"rem";
              if(top>=0&&left<=0){
                clearInterval(mytime);
                this.picmove=false;
              }
            },30)
          }
      }
    }
</script>

<style scoped>
.box{
  width: 3.55rem;
  height: .66rem;
  position: fixed;
  background: white;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .1rem;
}
  .carts{
    width: .86rem;
    height: .42rem;
    border: 1px solid #e7e7e7;
    background: url("../../../static/particulars/carts_icon.jpg") no-repeat center;
  }
  .addCarts{
    width: 2.56rem;
    height: .44rem;
    background: #dd3d97;
    font-size: .15rem;
    color: white;
    font-weight: 600;
    line-height: .44rem;
    text-align: center;
  }
  #img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    left: 2rem;
  }
</style>
