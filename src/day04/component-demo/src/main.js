import Vue from 'vue'
import App from './App.vue'

// 等价于引用 ./components/user/index.js 文件，该文件引入了该目录下所有文件集合
import Login from './components/user'

Vue.use(Login);

new Vue({
  el: '#app',
  render: h => h(App)
})
