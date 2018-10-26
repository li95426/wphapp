<template>
  <div>
    <wph-particular-picbox :particulars="particularsList" v-on:childByValue="childByValue"></wph-particular-picbox>
    <wph-particular-information :particulars="particularsList" v-on:addresschange="addresschange" :address="addressdata"></wph-particular-information>
    <wph-particular-message :particulars="particularsList"></wph-particular-message>
    <wph-particular-add-carts></wph-particular-add-carts>
    <wph-particular-gotop></wph-particular-gotop>
    <wph-particular-big-pic :particulars="particularsList" v-if="isshow" v-on:childByValue="childByValue"></wph-particular-big-pic>
    <wph-particular-address v-if="address" v-on:hide="hide" v-on:addresschange="addresschange" v-on:getaddress="getaddress" :area="areas"></wph-particular-address>
  </div>
</template>

<script>
  import WphParticularPicbox from "../components/particulars/WphParticularPicbox"
  import WphParticularInformation from "../components/particulars/WphParticularInformation"
  import WphParticularMessage from "../components/particulars/WphParticularMessage"
  import WphParticularBigPic from  "../components/particulars/WphParticularBigPic"
  import WphParticularAddCarts from  "../components/particulars/WphParticularAddCarts"
  import WphParticularGotop from  "../components/particulars/WphParticularGotop"
  import WphParticularAddress from  "../components/particulars/WphParticularAddress"
  import particulars from "../../mock/mask.json"
  import area from  "../../mock/area.json"
  export default {
    name: "hotMask",
    components:{
      WphParticularPicbox,
      WphParticularInformation,
      WphParticularMessage,
      WphParticularBigPic,
      WphParticularAddCarts,
      WphParticularGotop,
      WphParticularAddress
    },
    data(){
      return {
        particularsList: [],
        isshow: false,
        address:false,
        areas:[],
        addressdata:"填写收货地址"
      }
    },
    methods:{
      childByValue: function (childValue) {
        this.isshow = childValue
      },
      addresschange: function (value) {
        this.address = value
      },
      getaddress: function (childValue) {
        // childValue就是子组件传过来的值
        this.addressdata = childValue
      },
      hide: function (value) {
        this.address = value
      },
    },
    created(){
      this.particularsList=particulars;
      this.areas=area
    }
  }
</script>

<style scoped>

</style>
