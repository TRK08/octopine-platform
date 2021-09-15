import axios from "axios";

const news = {
  namespaced: true,
  state: {
    news: [
      {
        title: 'Новость #1',
        img: require('../assets/img/news-1.png'),
        id: 'test'
      },
      {
        title: 'Новость #2',
        img: require('../assets/img/news-1.png'),
      },
      {
        title: 'Новость #3',
        img: require('../assets/img/news-1.png'),
      },
      {
        title: 'Новость #4',
        img: require('../assets/img/news-1.png'),
      },
      {
        title: 'Новость #5',
        img: require('../assets/img/news-1.png'),
      },
      {
        title: 'Новость #6',
        img: require('../assets/img/news-1.png'),
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getNews(state) {
      return state.news;
    }
  }
}

export default news