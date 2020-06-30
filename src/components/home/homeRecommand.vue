<template>
	<div class="remmand">
		<h2>为你推荐</h2>
		<div class="bookRecommand">
			<div class="imageBook">
				<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
				<div class="bookName">Android入门教程结合实战教学</div>
			</div>
			<div class="imageBook">
				<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
				<div class="bookName">Android入门教程</div>

			</div>
			<div class="imageBook">
				<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
				<div class="bookName">Android入门教程</div>
			</div>
		</div>
		<div class="changeBook">
			换一批
		</div>
	</div>
</template>
<script>
	import ImageView from '@/components/base/ImageView'
	export default {
	  components: {ImageView},
	  data() {
	    return {

		}
	  }
	}
</script>
<style lang="scss" scoped>
.remmand {
	margin: 0 20px;
	h2 {
		font-size: 22px;
		font-weight: bold;
		height: 55.5px;
		line-height: 55.5px;
	}
	.bookRecommand {
		display: flex;
		flex: 1;
		justify-content: space-around;
		.imageBook {
			width:101px;
			height: 192px;
			.bookName {
				font-size: 12px;
			}
		}
	}
	.changeBook {
		width: 100%;
		background: #fff;
		border: 2px solid #EDEEEE;
		border-radius: 44px;
		text-align: center;
		line-height: 41px;
		height: 41px;
		color: #3696EF;
	}
}
</style>
