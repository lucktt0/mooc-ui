// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import 'mooc-ui11/dist/css/index.css'
// import MUI from 'mooc-ui11'
// Vue.use(MUI)
import '../components/css/demo.scss'
import '../components/css/card.scss'
import Demo from '../components/lib/demo/index'
import Card from '../components/lib/card/index'
Vue.use(Demo)
Vue.use(Card)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
