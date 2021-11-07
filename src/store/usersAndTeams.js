import axios from 'axios'

const usersAndTeams = {
  namespaced: true,
  state: {
    user: null,
    teams: null,
    searchResult: null
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.user = payload
    },
    SET_SEARCH_RESULT(state, payload) {
      state.searchResult = payload
    }
  },
  actions: {
    LOAD_USER({ commit }, id) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/user?user_id=${id}`).then(res => {
        commit('SET_USER_INFO', res.data)
      })
    },
    LOAD_USER_BY_NICK({ commit }, nick) {
      axios.get(` https://octopine.pro/wp-json/oc/v1/get/user?nickname=${nick}`).then(res => {
        commit('SET_USER_INFO', res.data)
      })
    },
    ADD_FRIEND({ commit, dispatch }, payload) {
      axios.post('https://octopine.pro/wp-json/oc/v1/add/friend', {
        "user_from": payload.myID,
        "user_to": payload.userID
      }).then(res => {
        if (res.data.code === '500') {
          dispatch('notify/ADD_NOTIFICATIONS', { text: "Заявка уже была отправлена" }, { root: true })
        } else {
          dispatch('notify/ADD_NOTIFICATIONS', { text: "Заявка успешно отправлена" }, { root: true })
        }

      }).catch(err => {
        console.log(err, 'ADD FRIEND');
        dispatch('notify/ADD_NOTIFICATIONS', { text: "Заявка не отправлена" }, { root: true })
      })
    },
    LOAD_SEARCH_RESULT({ commit }, nickname) {
      axios.get(`https://octopine.pro/wp-json/oc/v1/friend/search?nickname=${nickname}`).then(res => {
        commit('SET_SEARCH_RESULT', res.data.data)
      })
    },
    CREATE_TEAM({ dispatch }, payload) {
      axios.post('https://octopine.pro/wp-json/oc/v1/team/create', payload).then(res => {
        dispatch('popup/GET_POPUP_MODE', { mode: null }, { root: true })
        console.log(res);
      }).catch(err => {
        console.log(err, 'CREATE TEAM ERROR')
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    }
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getSearchResult(state) {
      return state.searchResult
    }
  }
}

export default usersAndTeams