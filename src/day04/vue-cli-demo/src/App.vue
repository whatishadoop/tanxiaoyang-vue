<template>
  <div id="app">
    {{msg}}
    <h3>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
    </h3>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <hr>
    <button @click="send">发送AJAX请求</button>
    <!--子组件默认绑定不了父组件中的方法，除非用加修饰符.navtive原生的方式-->
    <!--就是在父组件中给子组件绑定一个原生的事件，就将子组件变成了普通的HTML标签，不加'. native'事件是无法触  发的-->
    <MyButton @click.native="send"></MyButton>
  </div>
</template>

<script>
// import axios from 'axios'  //由于axios不支持类似Vue.use(VueRouter) 直接引入this.xxx 使用，需要在每个模块中单独引入
import MyButton from './components/MyButton.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to itany'
    }
  },
  mounted(){
    console.log(this.$route);
  },
  watch:{
    $route:function(newValue,oldValue){  // 对路由实例进行监控，因为Vue.use(VueRouter);后,$route作为vue实例的属性等价于$route:$route(this.$route)
      console.log('路由发生变化，跳转到：'+newValue.path);
    }
  },
  methods:{
    send(){
      //引入后每个组件都会继承该原型对象，直接通过axios.get(xxxx)形式直接发送
      this.$http.get('https://api.github.com/users/tangyang8942')
        .then(resp => {
          console.log(resp.data);
        }).catch(err => {
          console.log(err);
        });
    }
  },
  components:{
    MyButton
  }
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
