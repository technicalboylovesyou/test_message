import Vue from 'vue'
import Vuex from 'vuex'
import message from '@/store/message';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},

    modules: {
        message
    }
})
