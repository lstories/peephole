import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource';
// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './router'

import { List, Toast, IndexBar, IndexAnchor, Cell, CellGroup, Tab, Tabs, TreeSelect } from 'vant';

// import 'vant/lib/index.css';
import './assets/font/iconfont.css';

// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(Toast).use(IndexBar).use(IndexAnchor).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(TreeSelect).use(List)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
