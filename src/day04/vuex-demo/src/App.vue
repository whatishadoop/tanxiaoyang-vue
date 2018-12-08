<template>
  <div id="app">
    
    <button @click="increment">增加</button>
    <button @click="decrement">减小</button>
    <button @click="incrementAsync">增加</button>
    <p>当前数字为：{{count}}</p>
    <p>{{isEvenOrOdd}}</p>

  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'  // 导入store访问方法再使用

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //方式1：通过this.$store访问 stroe中state中数据
  /*computed:{
    count(){
      return this.$store.state.count;
    }
  }*/
  /*computed:mapState([   // 可以通过mapState辅助函数 获取state值，这里的count是state中属性
    'count'
  ]),*/
  computed:mapGetters([  // 获取属性，使用逻辑处理后的属性值
      'count',  // 该名字对应 store,js 中定义的var getters 对象中方法名，这里的count 对应getter中方法
      'isEvenOrOdd'
  ]),
  methods:mapActions([  // 获取方法
      'increment',
      'decrement',
      'incrementAsync'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
