<template>
	<footer>
		<p>{{ copyright }}</p>
	</footer>
</template>

<script>
	export default {
		name: 'app-footer',
		data() {
			return {
				copyright: "Copyright 2018 blog demo"
			}
		}
	}
</script>

<style scoped>
	footer {
		position:absolute;
		bottom:0px;
		background: #222;
		padding: 6px;
	}
	footer p {
		text-align: center;
	}
</style>