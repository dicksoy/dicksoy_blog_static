// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Home from './components/back/Home'
import Editor from './components/back/Editor'
import Article from './components/back/Article'
import Draft from './components/back/Draft'
import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式

Vue.config.productionTip = false
/* 使用路由 */
Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(AtComponents)

// 配置路由
const router = new VueRouter({
	routes:[
		{path: "/back/editor", component: Editor},
		{path: "/back/home", component: Home},
		{path: "/back/article", component: Article},
		{path: "/back/draft", component: Draft}
	],
	mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
