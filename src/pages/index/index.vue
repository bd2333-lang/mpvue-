<template>
	<div class="home">
		<SearchBar @onClick="onSearchClick" :disabled="false"></SearchBar>
		<homeCard></homeCard>
		<home-banner img='http://www.youbaobao.xyz/book/res/bg.jpg' title="mpvue2.0多端小程序上线" subTitle="马上学习"></home-banner>
		<!--为你推荐-->
		<home-recommand></home-recommand>
		<!--免费阅读-->
		<feeRead></feeRead>
        <!---->
		<!--<ImageView src="https://www.youbaobao.xyz/mpvue-res/big.jpg" mode="scaleTiFill" height="300px"></ImageView>-->
	</div>
</template>

<script>
	import  {get,post} from '@/utils/request'
	import SearchBar from '@/components/home/SearchBar'
	import homeCard from '@/components/home/homeCard'
    import HomeBanner from "@/components/home/homeBanner";
    import homeRecommand from "@/components/home/homeRecommand";
    import feeRead from "@/components/home/feeRead";

    export default {
    components: { HomeBanner, SearchBar,homeCard,homeRecommand,feeRead},
    data() {
      return {
      };
    },
    methods: {

    },
    created() {

    },
	methods: {
      //跳转页面
      onSearchClick() {

	  },
      add() {
      }
	}
  };
</script>
<style lang="scss" scoped>
</style>



