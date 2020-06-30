<template>
	<div class="search-bar">
		<div class="search-bar-wrapper">
			<van-icon class="search" name="search" size="16px;" color="#858c96" @click="onSearchBarClick"></van-icon>
			<input placeholder-style="color: #858c96" @confirm = 'confirm' confirm-type='search' v-model='searchWord' @input='onChange' @click='onSearchClick' type="text" maxlength='50' class="input-wapper" :placeholder="hotSearch.length === 0 ? '搜索': ''" :focus="focus" :disabled="disabled">
			<van-icon class="clear" name="clear" size="16px;" color="#ccc" @click='onClearClick' v-if="searchWord.length > 0"></van-icon>
		</div>
	</div>
</template>
<script>
export default  {
  props: {
    focus: {
      type: Boolean,
	  default:true
	},
    disabled: {
      type: Boolean,
      default:false
	},
    hotSearch: {
      type: String,
	  default: ''
	}
  },
  data() {
    return {
      searchWord: '',
	}
  },
  methods: {
    onSearchClick() {
      this.$emit('onClick')
	},
	onClearClick() {
      this.searchWord = ''
      this.$emit('onClear')
	},
    onChange(e) {
      const {value} = e.mp.detail
	  this.$emit('onChange',value)
	},
    confirm(e) {
      const {value} = e.mp.detail
      this.$emit('confirm',value)
	},
	setValue(v) {
      this.searchWord = v
	},
	getValue() {
      return this.searchWord
	}
  }
}
</script>
<style scoped lang="scss">
.search-bar {
	padding: 15px 15.5px;
	.search-bar-wrapper {
		border-radius: 20px;
		height: 40px;
		background-color: #F5F7F9;
		display: flex;
		font-size: 12px;
		align-items: center;
		padding: 12px 16.8px;
		box-sizing: border-box;
		.input-wapper {
			flex: 1;
			margin: 0 8px;
		}
		.search {
			height: 100%;
			display: flex;
			align-items: center;
		}
		.clear {
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
}
</style>
