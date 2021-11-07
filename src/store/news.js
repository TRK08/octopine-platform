import axios from "axios";

const news = {
  namespaced: true,
  state: {
    news: null,
    categories: null,
    categoryId: null
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_CATEGORY_ID(state, id) {
      state.categoryId = id
    }
  },
  actions: {
    loadNews({ commit }) {
      axios.get('https://octopine.pro/wp-json/oc/v1/get/news').then(res => {
        commit('SET_NEWS', res.data.news)
        commit('SET_CATEGORIES', res.data.categories)
      }).catch(err => {
        console.log(err, 'load news error');
      })
    },
    setCategoryId({ commit }, id) {
      console.log(id);
      commit('SET_CATEGORY_ID', id)
    }
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getSingleNews: (state) => (slug) => {
      if (state.news) {
        return state.news.find(item => item.slug === slug)
      }
    },
    getCategories(state) {
      return state.categories
    },
    getCategoryId(state) {
      return state.categoryId
    }
  }
}

export default news