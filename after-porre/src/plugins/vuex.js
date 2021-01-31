import Vue from 'vue'
import Vuex from 'vuex'

// Store functionality
import actions from '@/store/actions'
import getters from '@/store/getters'
import modules from '@/store/modules'
import mutations from '@/store/mutations'
import state from '@/store/state'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    getters,
    modules,
    mutations,
    state
  })
  
export default store