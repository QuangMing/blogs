// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Message} from 'element-ui';
import Element from 'element-ui';
import tinymce from 'vue-tinymce'
import massge from '@/components/share/massge.vue'
Vue.component('tinymce', tinymce)
Vue.component(Message)
Vue.prototype.$massge=massge
Vue.prototype.$message=Message;
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
