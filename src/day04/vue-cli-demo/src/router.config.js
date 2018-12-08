import Home from './components/Home.vue'
import News from './components/News.vue'

export default {  // export default 都是以对象形式导出
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/news',
			component:News
		}
	]
}