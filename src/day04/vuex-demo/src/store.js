/**
 * vuex配置
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义属性（数据）， vuex.store一般对于多个组件之间共享数据时比较好用
var state={
	count:6
}

//定义getters， 若state发生改变，从而触发getter函数自动更新页面数据重新加载，类似computed功能
var getters={
	count(state){  // 传入上面的state对象
		return state.count;
	},
	isEvenOrOdd(state){
		return state.count%2==0?'偶数':'奇数';
	}
}

//定义actions，要执行的操作，如流程判断、统一的异步请求(操作权限的统一判断)等
const actions = {
	increment(context){//包含：commit、dispatch、state
		console.log(context);  // 通过打印该对象，在浏览器中查看其对应的属性类型
		// context.commmit()
	},
	// increment({commit,state}){
	// 	commit('increment'); // 提交一个名为increment的变化，名称可自定义，可以认为是类型名
	// },
	decrement({commit,state}){   // es6语法， 在传入时自动拆开 context 中属性，分别放入commit,state，等价于上面方式
		if(state.count>10){  // 大于10才提交数据
			commit('decrement');  // action 是不可以改变数据，只能提交变化给mutaion进行数据处理
		}
	},
	incrementAsync({commit,state}){
		//异步操作
		var p=new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve();
			},3000);
		});

		p.then(() => {
			commit('increment');
		}).catch(() => {
			console.log('异步操作');
		});
	}
}

//定义mutations，处理状态（数据）的改变，
const mutations={
	increment(state){
		state.count++;
	},
	decrement(state){
		state.count--;
	}
}

//创建store对象，然后导出
const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

//导出store对象
export default store;
