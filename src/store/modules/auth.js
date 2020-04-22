import firebase from 'firebase/app';
import 'firebase/auth';

const state = {
  userData: null,
  authErrors: null
};

const getters = {
  userData(state) {
    return state.userData;
  },
  authErrors(state){
    return state.authErrors
  }
};

const mutations = {
  setUser: (state, payload) => {
    state.userData = payload;

    if (payload === null) {
      localStorage.removeItem('userData');
    } else {
      localStorage.setItem('userData', JSON.stringify(payload));
    }
  },
  setAuthError: (state, payload) => {
    state.authErrors = payload;
  }
};

const actions = {
  signUp({ commit }, { email, password }) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        commit('setUser', res.user);
      })
      .catch(err => {
        commit('setAuthError', err.message);
      });
  },
  login({ commit }, { email, password }) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        commit('setUser', res.user);
      })
      .catch(err => {
        commit('setAuthError', err.message);
      });
  },
  logout({ commit }) {
    commit('setUser', null);
  },
  userInit({ commit }) {
    if (localStorage.getItem('userData')) {
      commit('setUser', JSON.parse(localStorage.getItem('userData')));
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
