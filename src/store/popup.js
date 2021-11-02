import axios from "axios";

const popup = {
  namespaced: true,
  state: {
    popupMode: null,
    popupInfo: null,
  },
  mutations: {
    SET_POPUP_MODE(state, payload) {
      state.popupMode = payload.mode
      state.popupInfo = payload.data
    }
  },
  actions: {
    GET_POPUP_MODE({ commit }, payload) {
      commit('SET_POPUP_MODE', payload)
    }
  },
  getters: {
    getPopupInfo(state) {
      return state.popupInfo
    },
    getPopupMode(state) {
      return state.popupMode
    }
  },
}

export default popup