import Vue from 'vue';
import App from './app';
import router from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
// import iview2s from '../../dist/iview2s.js'
import iview2s from '../../src/index.js'
Vue.use(iview2s)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});