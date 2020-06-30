<template>
	<div class="remmand">
		<h2>免费阅读</h2>
		<div class="bookRecommand">
            <div class="books">
                    <div class="imageBook">
                        <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>

                    </div>
                    <div class="bookName">
                        <span>Android入门</span>
                        <div class="bookInfo">
                            <span>张琪</span>
                            <span>计算机科学</span>
                        </div>
                    </div>
                </div>
            <div class="books">
                <div class="imageBook">
                    <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>

                </div>
                <div class="bookName">
                    <span>Android入门</span>
                    <div class="bookInfo">
                        <span>张琪</span>
                        <span>计算机科学</span>
                    </div>
                </div>
            </div>
            <div class="books">
                    <div class="imageBook">
                        <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
                    </div>
                    <div class="bookName">
                        <span>Android入门</span>
                        <div class="bookInfo">
                            <span>张琪</span>
                            <span>计算机科学</span>
                        </div>
                    </div>
            </div>
            <div class="books">
                <div class="imageBook">
                    <ImageView src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></ImageView>
                </div>
                <div class="bookName">
                    <span>Android入门</span>
                    <div class="bookInfo">
                        <span>张琪</span>
                        <span>计算机科学</span>
                    </div>
                </div>
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
            flex-wrap: wrap;
            .books {
                width: 48%;
                margin-right: 12px;

                display:flex;
                .imageBook {
                    display:flex;
                    width: 88px;
                    height: 145px;
                }
                .bookName {
                    display: flex;
                    margin-left: 9px;
                    padding-top: 10px;
                    font-size:14px;
                    font-weight:700;
                    flex-direction: column;
                    .bookTitle {
                        width: 40px;
                        height: 18px;
                    }
                    .bookInfo {
                        display: flex;
                        flex-direction: column;
                        font-size: 12px;
                        color: #868686;
                        margin-top: 16px;
                        line-height: 28px;                    }

                }
            }
            .books:nth-child(2n) {
                margin-right: 0px;
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
