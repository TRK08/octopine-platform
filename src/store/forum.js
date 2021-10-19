import axios from "axios";

const forum = {
  namespaced: true,
  state: {
    questions: null,
    themes: null,
    singleTheme: null,
    comments: null
  },
  mutations: {
    SET_QUESTIONS(state, payload) {
      state.questions = payload
    },
    SET_THEMES(state, payload) {
      state.themes = payload
    },
    SET_SINGLE_THEME(state, payload) {
      state.singleTheme = payload
    },
    SET_COMMENTS(state, payload) {
      state.comments = payload
    }
  },
  actions: {
    loadInfo({ commit, dispatch }, slug) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/forum').then(res => {
        res.data.faq.forEach(item => {
          item.open = false
        })
        commit('SET_QUESTIONS', res.data.faq)
        commit('SET_THEMES', res.data.themes)
        if (slug) {
          let singleTheme = res.data.themes.find(item => item.slug === slug)
          commit('SET_SINGLE_THEME', singleTheme)
          dispatch('loadComments', singleTheme.id)
        }
      })
    },
    loadComments({ commit }, id) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/comments?id=${id}`).then(res => {
        commit('SET_COMMENTS', res.data)
      })
    }
  },
  getters: {
    getThemes(state) {
      return state.themes
    },
    getQuestions(state) {
      return state.questions
    },
    getComments(state) {
      return state.comments
    },
    getSingleTheme(state) {
      return state.singleTheme
    }
  }
}

export default forum