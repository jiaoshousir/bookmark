import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import "./assets/index.css";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

new Vue({
  render: h => h(App),
}).$mount('#app')

/*eslint-disable*/
// 隐藏进度条
NProgress.done();
/* eslint-enable */