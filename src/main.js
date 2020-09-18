import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import '@/scss/index.scss'
import App from './App'
import router from '@/routes';
import store from './store'

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount(("#app"));