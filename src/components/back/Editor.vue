<template>
	<div id="app-editor">
		<p>标题:</p>
		<at-input placeholder="文章标题"></at-input>
		<p>描述:</p>
		<at-input placeholder="内容描述"></at-input>
		<div id="editor">
			
		</div>
		<div class="editor-btn">
			<at-button type="primary">发布文章</at-button>
			<at-button>保存草稿</at-button>
			<at-button>预览</at-button>
		</div>
	</div>
</template>

<script>
	import wangEditor from 'wangeditor'

	export default {

		name: 'app-editor',
		data() {
			return {
				editorContent: ''
			}
		},
		methods: {

		},
		mounted: function() {
			this.$nextTick(function() {
					var editor = new wangEditor('#editor');
					
					editor.customConfig.onchange = (html) => {
						this.editorContent = html
					}
					// 配置服务器端地址
					editor.customConfig.uploadImgServer = '/upload';
					// 使用 base64 保存图片
					editor.customConfig.uploadImgShowBase64 = true;
					editor.create()
					
			})
		}
	}
</script>

<style>
	#app-article {
		width: 70%;
		margin: 0 auto;
		float: left;
	}
	p {
		padding: 10px 0 5px 0;
	}
	#editor {
		padding: 15px 0 10px 0;
	}
	.editor-btn {
	}
	.editor-btn button {
		margin-left: 15px;
		float: right;
	}
</style>