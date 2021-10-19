import axios from "axios";

const info = {
  namespaced: true,
  state: {
    mainTexts: null,
    contacts: {},
    slides: []
  },
  mutations: {
    SET_MAIN_TEXTS(state, payload) {
      state.mainTexts = payload
    },
    SET_CONTACTS(state, payload) {
      state.contacts = payload
    },
    SET_MAIN_SLIDER(state, payload) {
      state.slides = payload
    }
  },
  actions: {
    loadMainTexts({ commit }) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/main/texts').then(res => {
        commit('SET_MAIN_TEXTS', res.data)
      })
    },
    loadContacts({ commit }) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/main/contacts').then(res => {
        commit('SET_CONTACTS', res.data)
      })
    },
    loadMainSlides({ commit }) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/main/slider').then(res => {
        commit('SET_MAIN_SLIDER', res.data)
      })
    }
  },
  getters: {
    getMainTexts(state) {
      return state.mainTexts
    },
    getContacts(state) {
      return state.contacts
    },
    getMainSlides(state) {
      return state.slides
    }
  },
}

export default info