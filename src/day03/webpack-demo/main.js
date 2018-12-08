/**
 * 使用ES6语法引入模板
 */
//main.js是webpack入口文件， 所有下面能被webpack解析的资源都可以以es6 模块方式引入，被webpack解析打包
import Vue from 'vue'   //直接从node_module中找到该系统模块引入
import App from './App.vue'  // 对于自定义 vue单文件组件，需要通过 路径方式引入，如 ./App.vue表示当前路径下文件

//下面的app,对应index.html模板中的<div id="app"></div> ,作为根组件
new Vue({    
	el:'#app',
	render:function(h){ // 一般用compoents: App即可，但这里官方提倡用使用render函数渲染App根组件
		return h(App);
	}
});