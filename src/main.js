// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import './assets/jquery'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)


import './assets/font-awesome/css/font-awesome.min.css';
import './assets/style.css';

Vue.filter('HN', function (val) {
  if (val < 10000) {
    return val
  }
  let result = val / 10000;
  result = result.toFixed(1);
  return result + 'w';
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
