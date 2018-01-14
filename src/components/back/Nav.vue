<template>
	<div id="app-nav">
		<at-menu active-name="1-1" inline-collapsed>
			<at-submenu opened>
				<template slot="title"><i class="icon icon-home"></i>文章管理</template>
				<at-menu-item-group title="已发布">
					<at-menu-item name="1-1" to="/back/editor">发布文章</at-menu-item>
					<at-menu-item name="1-2" to="/back/article">文章列表</at-menu-item>
				</at-menu-item-group>
				<at-menu-item-group title="未发布">
					<at-menu-item name="1-3" to="/back/draft">草稿箱</at-menu-item>
					<at-menu-item name="1-4">审核失败</at-menu-item>
				</at-menu-item-group>
			</at-submenu>
			<at-submenu>
				<template slot="title"><i class="icon icon-life-buoy"></i>评论管理</template>
				<at-menu-item name="2-1">评论列表</at-menu-item>
				<at-menu-item name="2-2">子菜单二</at-menu-item>
				<at-menu-item name="2-3">子菜单三</at-menu-item>
				<at-menu-item name="2-4">子菜单四</at-menu-item>
			</at-submenu>
			<at-submenu>
				<template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
				<at-menu-item name="3-1">子菜单一</at-menu-item>
				<at-menu-item name="3-2">子菜单二</at-menu-item>
				<at-menu-item name="3-3">子菜单三</at-menu-item>
				<at-menu-item name="3-4">子菜单四</at-menu-item>
			</at-submenu>
			<at-submenu>
				<template slot="title"><i class="icon icon-life-buoy"></i>导航菜单四</template>
				<at-menu-item name="4-1">子菜单一</at-menu-item>
				<at-menu-item name="4-2">子菜单二</at-menu-item>
			</at-submenu>
		</at-menu>
	</div>
</template>

<script>
	
export default {
	name: 'app-nav',
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style>
	#app-nav {
		width: 25%;
		float: left;
	}
</style>