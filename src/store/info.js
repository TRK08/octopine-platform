import axios from "axios";

const info = {
  namespaced: true,
  state: {
    mainTexts: null
  },
  mutations: {
    SET_MAIN_TEXTS(state, payload) {
      state.mainTexts = payload
    }
  },
  actions: {
    loadMainTexts({ commit }) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/main/texts').then(res => {
        commit('SET_MAIN_TEXTS', res.data)
      })
    }
  },
  getters: {
    getMainTexts(state) {
      return state.mainTexts
    }
  },
}

export default info