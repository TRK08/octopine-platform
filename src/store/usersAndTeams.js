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
      axios.get(`https://octopine.pro/wp-json/oc/v1/get/user?user_id=4`).then(res => {
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
    async CREATE_TEAM({ dispatch }, payload) {
      await axios.post('https://octopine.pro/wp-json/oc/v1/team/create', payload).then(res => {
        dispatch('popup/GET_POPUP_MODE', { mode: null }, { root: true })
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Команда успешно создана' }, { root: true })
      }).catch(err => {
        console.log(err, 'CREATE TEAM ERROR')
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    },
    ACCEPTED_FRIEND({ dispatch }, payload) {
      axios.post('https://octopine.pro/wp-json/oc/v1/add/friend/accept', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res.data);
        if (payload.result) {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Заявка принята' }, { root: true })
        } else {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Заявка отклонена' }, { root: true })
        }
      }).catch(err => {
        console.log(err, 'ACCEPT FRIEND ERROR')
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    },
    async CHANGE_PROFILE_DESCR({ dispatch }, data) {
      await axios.post('https://octopine.pro/wp-json/oc/v1/user/update/description', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Описание изменено' }, { root: true })
      }).catch(err => {
        console.log(err, 'CHANGE PROFILE DESCR ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Произошла ошибка' }, { root: true })
      })
    },
    async LOAD_TEAM_INFO({ dispatch }, id) {
      dispatch('popup/GET_POPUP_MODE', { mode: 'singleTeam' }, { root: true })
      await axios.get(`https://octopine.pro/wp-json/oc/v1/team/get?id=${id}`).then(res => {
        dispatch('popup/GET_POPUP_MODE', { mode: 'singleTeam', data: res.data }, { root: true })
      })
    },
    async UPDATE_TEAM_INFO({ dispatch }, data) {
      await axios.post('https://octopine.pro/wp-json/oc/v1/team/update', data).then(res => {
        if (res.data.code === '500') {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Команда с таким названием уже существует' }, { root: true })
        } else {
          dispatch('notify/ADD_NOTIFICATIONS', { text: 'Данные успешно обновлены' }, { root: true })
        }
      }).catch(err => {
        console.log(err, 'UPDATE TEAM INFO ERROR');
        dispatch('notify/ADD_NOTIFICATIONS', { text: 'Команда с таким названием уже существует' }, { root: true })
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