<template>
	<div id="app-article">
		<at-input v-model="searchValue" class="search" placeholder="请输入内容" append-button>
			<template slot="append">
				<span @click="searchArticle(searchValue)">搜索</span>
			</template>
		</at-input>
		<at-table :columns="columnsName" :data="articleList" pagination></at-table>
	</div>
</template>

<script>
	export default {
		name: 'app-article',
		data() {
			return {
				columnsName: [{
						title: '姓名',
						key: 'name'
					},
					{
						title: '年龄',
						key: 'age',
						sortType: 'normal'
					},
					{
						title: '地址',
						key: 'address'
					},
					{
						title: '操作',
						render: (h, params) => {
							return h('div', [
								h('AtButton', {
									props: {
										size: 'small',
										hollow: true
									},
									style: {
										marginRight: '8px'
									},
									on: {
										click: () => {
											this.$Message(params.item.name)
										}
									}
								}, '预览'),
								h('AtButton', {
									props: {
										size: 'small',
										hollow: true
									},
									on: {
										click: () => {
											this.$Message(params.item.address)
										}
									}
								}, '编辑')
							])
						}
					}
				],
				articleList: this.makePageData(),
				searchValue: ''
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				/* 请求ArticleList */
				this.getAtricleList();
			})
		},
		methods: {
			searchArticle(searchArticle) {
				console.log(searchArticle)
			},
			makePageData() {
				const data = []
				let pageData = []

				for (let i = 0; i < 5; i++) {
					pageData = pageData.concat(data)
				}

				return pageData
			},
			getAtricleList() {
				/*this.$http.get("./data/listData.json").then((data) => {
					console.log(data)
					this.users = data.body;
			  	});*/
			}
		}
	}
</script>

<style>
	.search {
		padding: 10px 0 10px 0;
	}
</style>