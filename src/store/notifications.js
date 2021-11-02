import axios from "axios";

const notify = {
  namespaced: true,
  state: {
    notifications: []
  },
  mutations: {
    SET_NOTIFICATIONS(state, payload) {
      state.notifications.unshift(payload);
    },
    DELETE_NOTIFICATION(state) {
      let notify = state.notifications
      if (notify.length) {
        notify.splice(notify.length - 1, 1)
      }
    }
  },
  actions: {
    ADD_NOTIFICATIONS({ commit }, payload) {
      if (payload) {
        payload.id = Date.now().toLocaleString()
        commit('SET_NOTIFICATIONS', payload)
        setTimeout(() => {
          commit('DELETE_NOTIFICATION')
        }, 3000)
      }
    },
  },
  getters: {
    getNotifications(state) {
      return state.notifications
    }
  },
}

export default notify