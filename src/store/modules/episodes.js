import axios from 'axios'

const state = {
  episodes: null
}

const getters = {
  episodes (state) {
    return state.episodes
  }
}

const mutations = {
  setEpisodes: (state, payload) => {
    state.episodes = payload
  }
}

const actions = {
  getEpisodes ({ commit }, ids = null) {
    commit('setEpisodes', null)

    axios.get('/episode/' + ids)
      .then(res => {
        commit('setEpisodes', res.data)
      })
      .catch(e => {
        console.log('Error occurred getEpisodes:', e)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
