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
        if (slug) {
          let singleTheme = res.data.themes.find(item => item.slug === slug)
          commit('SET_SINGLE_THEME', singleTheme)
          return dispatch('loadComments', singleTheme.id)
        } else {
          res.data.faq.forEach(item => {
            item.open = false
          })
          commit('SET_QUESTIONS', res.data.faq)
          commit('SET_THEMES', res.data.themes)
        }

      })
    },
    loadComments({ commit }, id) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/comments?id=${id}`).then(res => {
        commit('SET_COMMENTS', res.data)
      })
    },
    async sendNewComment({ dispatch, commit }, payload) {
      await axios.post('https://octopine.pro/wp-json/oc/v1/post/comment', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        commit('SET_COMMENTS', res.data)
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Новый коментарий отправлен' }, { root: true })
      }).catch(err => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Ошибка отправки' }, { root: true })
        console.log(err, 'NEW COMMENT REQUEST ERROR');
      })
    },
    async createNewTheme({ commit, dispatch }, name) {
      await axios.post(`https://octopine.pro/wp-json/oc/v1/post/forum?name=${name}`).then(res => {
        commit('SET_THEMES', res.data.themes)
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Тема успешно создана' }, { root: true })
      }).catch(err => {
        console.log(err, 'CREATE NEW FORUM THEME ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Ошибка создания' }, { root: true })
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