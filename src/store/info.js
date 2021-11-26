import axios from "axios";

const info = {
  namespaced: true,
  state: {
    mainTexts: null,
    contacts: {},
    slides: [],
    searchInfo: null
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
    },
    SET_SEARCH_INFO(state, payload) {
      state.searchInfo = payload
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
    },
    async searchAllInfo({ commit }, value) {
      await axios.get(`https://octopine.pro/wp-json/oc/v1/search?search=${value}`).then(res => {
        commit('SET_SEARCH_INFO', res.data)
      }).catch(err => {
        console.log(err, 'search error');
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
    },
    getSearchInfo(state) {
      return state.searchInfo
    }
  },
}

export default info