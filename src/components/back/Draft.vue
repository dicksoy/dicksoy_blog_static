<template>
	<div id="app-draft">
		<at-input v-model="searchValue" class="search" placeholder="请输入内容" append-button>
			<template slot="append">
				<span @click="searchArticle(searchValue)">搜索</span>
			</template>
		</at-input>
		<div>
			<at-table :columns="columnsName" :data="articleList"></at-table>
			<at-pagination class="page-pulg-in" :total="totalCount" :current="pageNum"
				></at-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-draft',
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
									style: {
										marginRight: '8px'
									},
									on: {
										click: () => {
											this.$Message(params.item.address)
										}
									}
								}, '编辑'),
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
								}, '发布')
							])
						}
					}
				],
				articleList: this.makePageData(),
				totalCount: 100,
				pageNum: 1,
				pageSize: 10,
				searchValue: ''
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				/* 请求ArticleList */
			})
		},
		methods: {
			searchArticle(searchArticle) {
				console.log(searchArticle)
			},
			makePageData() {
				/* 请求数据 */
				const data = {
					"code": 0,
					"msg": "Api请求成功",
					"result": {
						"pageSize": 10,
						"pageNum": 1,
						"totalCount": 100,
						"pageData": [{
							"name": "库里",
							"age": 18,
							"address": "深圳市宝安区创业一路"
						}, {
							"name": "詹姆斯",
							"age": 25,
							"address": "广州市天河区岗顶"
						}, {
							"name": "科比",
							"age": 24,
							"address": "上海市浦东新区"
						}, {
							"name": "杜兰特",
							"age": 22,
							"address": "深圳市南山区深南大道"
						}, {
							"name": "威斯布鲁克",
							"age": 21,
							"address": "北京市朝阳区"
						}, {
							"name": "邓肯",
							"age": 26,
							"address": "深圳市罗湖区万象城"
						}, {
							"name": "帕克",
							"age": 25,
							"address": "深圳市福田区中心书城"
						}, {
							"name": "欧文",
							"age": 20,
							"address": "广州市番禺区大学城"
						}, {
							"name": "托马斯",
							"age": 19,
							"address": "北京市朝阳区"
						}, {
							"name": "欧文",
							"age": 20,
							"address": "广州市番禺区大学城"
						}, {
							"name": "托马斯",
							"age": 19,
							"address": "北京市朝阳区"
						}]
					}
				}
				this.totalCount = data.result.totalCount;
				this.pageNum = data.result.pageNum;
				this.pageSize = data.result.pageSize;
				return data.result.pageData;
			}
		}
	}
</script>

<style>
	.search {
		padding: 10px 0 10px 0;
	}
	
	.page-pulg-in {
		padding: 10px 0;
		float: right;
	}
</style>