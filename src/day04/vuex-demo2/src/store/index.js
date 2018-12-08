import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import getters from './getters.js'
import actions from './actions.js'
import user from './modules/user.js'

// index.js统一管理store导出, 子模块使用modules 组装
export default new Vuex.Store({
	getters,  // 公共的
	actions,   // 公共的
	modules:{
		user
	}
});