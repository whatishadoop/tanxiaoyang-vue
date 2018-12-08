import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'
import axios from 'axios'  // 这里虽然作为全局引入，但在每个vue组件中依然无法使用，需要通过类似Vue.use(VueRouter)插件形式才可以被每个组件使用，axios目前不支持该插件方式，解决方式可以加入的vue实例原型中

//使用VueRouter,通过use 加入，在vue组件实例中直接可以通过如this.$router使用；
Vue.use(VueRouter);


//创建路由实例
const router=new VueRouter(routerConfig); //routerConfig 是以对象模块引入

/* 等价于下面这种方式
 * const router=new VueRouter({
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
 * 
 *  });
 * 
 * 
 * */

Vue.prototype.$http=axios;  //通过加入的vue实例原型中，让每个组件中都可以使用axios

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
