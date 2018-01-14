<template>
	<div id="home">
		<app-header></app-header>
		<div class="main">
			<app-nav class="app-nav"></app-nav>
			<router-view class="content"></router-view>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<!-- 2行为：处理逻辑 -->
<script>
	/* 局部注册组件 */
	import Nav from './Nav'
	import Editor from './Editor'
	import Header from './Header'
	import Footer from './Footer'
	import Atricle from './Article'

	export default {
		name: 'home',
		data() {
			return {

			}
		},
		methods: {
			
		},
		/* 注册组件 */
		components: {
			"app-nav": Nav,
			"app-header": Header,
			"app-footer": Footer,
			"app-editor": Editor,
			"app-article": Atricle
		}
	}
</script>

<!-- 3样式：解决样式-->
<style scoped>
	.content {
		width: 70%;
		margin: 0 auto;
		float: left;
	}
</style>