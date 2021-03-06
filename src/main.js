import Vue from 'vue'
import App from './App'
import store from './utils/store'
import {nextPage} from './utils/common'
Vue.prototype.$store = store
Vue.prototype.$nextPage = nextPage
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
