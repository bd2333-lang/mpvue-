<template>
	<div class="image-bar" @click="onClick">
		<img
		:src="src"
		:mode='mode'
		:class="round ? 'round image': 'image'"
		:style="{height}"
		:lazy-load="lazyLoad" alt=""
		@load="onLoad"
		@error="onError"
		v-show="!isLoading && !error"
		/>
		<img
				src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
				:mode='mode'
				:class="round ? 'round image': 'image'"
				:style="{height}"
				:lazy-load="lazyLoad" alt=""
				v-show="isLoading ||error"

		/>
	</div>
</template>
<script>
  export default {
    props: {
      src: {
        type: String,
        default: ""
      },
      mode: {
        type: String,
        default: "widthFix"
      },
      lazyLoad: {
        type: Boolean,
        default: true
      },
      round: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: "auto"
      }
    },
    data() {
      return {
        isLoading: true,
        error: false,
      }
    },
    methods: {
      onClick() {
        this.$emit('onClick')
	  },
	  onLoad() {
        this.isLoading = false;
        this.error = false;
	  },
	  onError() {
        this.isLoading = false;
        this.error = false;
	  }
	}
  };
</script>
<style scoped lang="scss">
.image-bar {
	width: 100%;
	image {
		width: 100%;
		&.round {
			border-radius: 50%;
		}
	}

}
</style>
