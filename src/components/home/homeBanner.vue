<template>
	<div class="home-banner">
		<div class="banner-img" :style="{backgroundImage: 'url('+ img + ')'}">
			<div class="title">{{title}}</div>
			<div class="subTitle">{{subTitle}}</div>
		</div>
	</div>
</template>
<script>
	export default {
	  props: {
        img: {
          type: String,
		  default:''
		},
		title:{
          type: String,
		  default: "",
		},
		subTitle: {
          type: String,
		  default: '',
		}
	  },
	  data() {
	    return {

		}
	  },
	  methods: {
	    bannerClick() {
			this.$emit('onClick')
		}
	  }
	}
</script>
<style lang="scss" scoped>
	.home-banner {
		display: flex;
		position: relative;
		margin: 20px 20px;
		.banner-img {
			flex:1;
			border-radius: 15px;
			height: 125px;
			.title {
				position: absolute;
				z-index: 9999;
				top: 30px;
				left: 50%;
				width: 260px;
				text-align: center;
				transform: translateX(-50%);
				color: #fff;
			}
			.subTitle {
				position: absolute;
				z-index: 9999;
				color: #fff;
				left: 50%;
				transform: translateX(-50%);
				top: 75px;
				border-radius: 12px;
				background-color: #3183FF;
				width: 120px;
				height: 35px;
				line-height: 35px;
				text-align: center;
			}
		}
	}
</style>
