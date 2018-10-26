<template>
  <div>
    <wph-appliances-banner :list="bannerListData"></wph-appliances-banner>
    <wph-appliances-brand-show :show="brandShowList"></wph-appliances-brand-show>
    <wph-appliances-shop v-for="(shop,index) in shopPicList" :key="index" :shops="shop" :num="index"></wph-appliances-shop>
    <wph-appliances-activity :list="detailList" v-for="(detail,i) in detailList" :key="detail[0]"  :detail="detail" :ii="i"></wph-appliances-activity>
  </div>
</template>

<script>
  import WphAppliancesBanner from "../components/appliances/WphAppliancesBanner.vue"
  import WphAppliancesBrandShow from "../components/appliances/WphAppliancesBrandShow.vue"
  import WphAppliancesShop from "../components/appliances/WphAppliancesShop.vue"
  import WphAppliancesActivity from "../components/appliances/WphAppliancesActivity.vue"
  import bannerList from "../../mock/appliancesBanner.json"
  import brandShow from "../../mock/brandShow.json"
  import shop from "../../mock/shop.json"
  import appliancesDetail from "../../mock/appliancesDetail.json"
  export default {
      name: "appliances",
      components:{
        WphAppliancesBanner,
        WphAppliancesBrandShow,
        WphAppliancesShop,
        WphAppliancesActivity
      },
      data(){
        return{
          bannerListData:[],
          brandShowList:[],
          shopPicList:[],
          detailList:[]
        }
      },
      methods:{
        _initData(){
          this.bannerListData=bannerList;
          this.brandShowList=brandShow;
          this.shopPicList=shop;
          this.detailList=appliancesDetail
        }
      },
      created(){
        this._initData()
      }
    }
</script>

<style scoped>

</style>
