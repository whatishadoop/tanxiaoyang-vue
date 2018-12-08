
const getters={
	isEvenOrOdd(state){
        // 此处没有定义state,通过state.user.count获取user模块下的 count属性
		return state.user.count%2==0?'偶数':'奇数';
	}
}

export default getters;