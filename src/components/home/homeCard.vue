<template>
	<div class="home-card">
		<div class="home-inner">
			<div class="userInfo">
				<div class="avatar-image">
					<ImageView round src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"/>
				</div>
				<div class="nickName">米老鼠</div>
				<div class="bookNum">书架共三本好书</div>
				<div class="circle"></div>
				<div>特别精选</div>
			</div>
			<div class="bookshelf">
				<div class="bookWrapper">
					<div class="book-image" @click="onBookClick">
						<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
					</div>
					<div class="book-image">
						<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
					</div>
					<div class="book-image">
						<ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
					</div>
				</div>
				<div class="shelf-book" @click="gotoShelf">
					<div class="shelf">书架</div>
					<van-icon color='#848986' class="error" name="arrow"></van-icon>
				</div>
			</div>
			<div class="feelbook" @click="feedBackClick">
				<div class="feedback">反馈</div>
			</div>
		</div>
		<van-dialog id="van-dialog"></van-dialog>
	</div>
</template>
<script>
	import ImageView from '@/components/base/ImageView'
	import Dialog from 'vant-weapp/dist/dialog/dialog'
	export default {
	  components: {ImageView},
	  props: {
	    data: Object,
        //是否签到
		hasSign: {
	      type: Boolean,
		  default: false
		},
		//签到天数
		signDay: {
	      type: Number,
		  default: 0,
		}

	  },
	  data() {
	    return {
			//跳转到书架
          gotoShelf() {

		  },
          onBookClick() {

		  },
		  //签到事件
          sign() {

		  },
          feedBackClick() {
            Dialog.confirm({
			  title: '反馈',
			  message: "您是否确认提交反馈信息？",
			  confirmButtonText: '是',
			  cancelButtonText: "否"
			}).then(() => {
			  console.log('点击后事件')
			}).catch(() => {
              console.log('点击后事件 cuowu')

            })
		  }

		}
	  }
	}
</script>
<style lang="scss" scoped>
.home-card {
	margin: 22px 20px 0 20px;
	border-radius: 15px;
	position: relative;
	background-color: #54475F;
	.home-inner {
		padding: 21.5px 17px 20px 20px;
		box-sizing: border-box;
		.userInfo {
			display: flex;
			font-size: 12px;
			color: #B3B4B7;
			align-items: center;
			.avatar-image {
				width: 20px;
				height: 20px;
				margin-right: 12px;
				border-radius: 50%;
			}
			.nickName {
				color: #fff;
				magrin: 0 10px;
			}
			.bookNum {
				margin: 0 10px;
			}
			.circle {
					width: 4px;
					margin-right: 12px;
					height: 4px;
					border-radius: 50%;
					background-color: #A0A0A0;
			}

		}
		.bookshelf {
			display: flex;
			margin: 12px 0;
			.bookWrapper {
				display: flex;
				flex: 1;
				justify-content: space-around;
				.book-image {
					width: 72px;
					height: 101px;
				}

			}
			.shelf-book {
				display: flex;
				align-items: center;

				.shelf {
					font-size: 11px;
					width: 11px;
					color: #fff;
					word-break: break-word;
					opacity: .8;
				}
			}
		}
		.feelbook {
			position: absolute;
			right: 0px;
			top: 19.5px;
			font-size: 11px;
			line-height: 23.5px;
			text-align: center;
			width: 44.5px;
			height: 23.5px;
			background: #7E7F84;
			border-radius: 100px 0 0 100px;
			.feedback {
				color: #FFFFFF;
				opacity: 1;
			}
		}

	}
}
</style>
