import axios from 'axios'
import episodes from './episodes'

const state = {
  characters: null,
  character: null,
  loadingCharacters: false
}

const getters = {
  characters (state) {
    return state.characters
  },
  character (state) {
    return state.character
  },
  loadingCharacters (state) {
    return state.loadingCharacters
  }
}

const mutations = {
  setCharacters: (state, payload) => {
    state.characters = payload
  },
  setCharacter: (state, payload) => {
    state.character = payload
  },
  setLoadingCharacters: (state, payload) => {
    state.loadingCharacters = payload
  }
}

const actions = {
  getCharacters ({ commit }, [page = 1, name = '']) {
    commit('setCharacters', null)
    commit('setLoadingCharacters', true)

    axios.get('/character/?page=' + page + '&name=' + name)
      .then(res => {
        commit('setCharacters', res.data)
      })
      .catch(err => {
        console.log('Error occurred:', err)
      })
      .finally(() => {
        commit('setLoadingCharacters', false)
      })
  },
  getCharacter ({ commit }, id) {
    commit('setCharacter', null)
    commit('setLoadingCharacters', true)

    axios.get(`/character/${id}`)
      .then(res => {
        commit('setCharacter', res.data)

        const episodesIds = res.data.episode.map(el => el.substring(el.lastIndexOf('/') + 1))
        episodes.actions.getEpisodes({ commit }, episodesIds)
      })
      .catch(e => {
        console.log('Error occurred getCharacter:', e)
      })
      .finally(() => {
        commit('setLoadingCharacters', false)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
