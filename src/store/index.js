import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import characters from './modules/characters'
import episodes from './modules/episodes'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    characters,
    episodes
  }
})
