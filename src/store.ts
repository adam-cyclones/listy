import contentModule from './vuex-modules/content';
import ListModule from './vuex-modules/list';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contentModule,
    ListModule
  }
})