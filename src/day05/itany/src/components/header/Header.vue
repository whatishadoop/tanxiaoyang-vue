<template>
	<div class="header">
		{{seller.name}}
		<img :src="seller.avatar" alt="" @click="showDetail">
		<br>
		{{msg}}

		<!-- 弹出层 -->
		<Detail></Detail>
	</div>
</template>

<script>	
	import {mapGetters} from 'vuex'
	import Detail from '../detail/Detail.vue'

	export default {
		created(){
			this.$store.dispatch('getSeller');
		},
		computed:{  // 既要使用vuex的定义的计算属性也同时要是使用传统的计算属性，通过es6 语法 ...实现mapGetters函数返回值数组对象展开运算符将 getter 混入 computed 对象中，参考文章 -- vuex的辅助函数mapState前面的那三个点--对象展开运算符
			...mapGetters([
				'seller'
			]),
			msg(){  // 普通计算属性
				return 'welcome to itany';
			}
		},
		components:{
			Detail
		},
		methods:{
			showDetail(){
				this.$store.dispatch('showDetail');
			}
		}
	}
</script>

<style lang="less" scoped>
	.header{
		height: 134px;
		background-color: rgba(7,17,27,0.1);
		font-size: 14px;
		img{
			width: 64px;
			height:64px;
			border-radius: 2px;
		}
	}
</style>
