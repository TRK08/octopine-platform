import axios from "axios";

const news = {
  namespaced: true,
  state: {
    news: [
      {
        title: 'Новость #1',
        img: require('../assets/img/news-1.png'),
        id: 'test',
        text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda minima quos dolorem ducimus? Eveniet quas earum enim eum sequi maxime suscipit ipsa quibusdam <br>ut porro veritatis, ea deleniti quia?Quae dolorem quo non aspernatur omnis neque eius hic repellendus quidem, alias sunt placeat tempore assumenda officiis dolorum voluptatum, impedit esse atque.Corporis minus numquam accusamus delectus saepe iste iure.Incidunt perspiciatis doloribus assumenda illum voluptatem quo.Ullam omnis, et qui explicabo nam libero quas, deleniti veritatis exercitationem ad, soluta sapiente minima est velit <br> ut distinctio atque molestiae natus ratione.  Harum, porro eos saepe blanditiis dolor provident, molestias deserunt ut inventore iste vitae ad quaerat </p><p> distinctio vero voluptate, molestiae ea! Reiciendis numquam, esse optio repellendus nihil fugiat fugit sequi sapiente.Blanditiis rerum neque error pariatur et dignissimos maiores earum dolores nisi provident ipsam, ducimus quam sequi voluptatibus veritatis sed.Incidunt aliquam earum dolorem ut quibusdam perferendis nostrum ipsum adipisci ipsam!Veritatis esse doloremque perspiciatis facere eum distinctio reprehenderit amet ullam pariatur, consequatur magni ducimus numquam asperiores nihil, ipsa debitis impedit alias beatae quia voluptate qui! <br> Sint saepe maiores nemo deleniti.Necessitatibus ratione accusamus ducimus non id at qui facilis harum ut omnis dolorem voluptatem velit, sed eveniet maiores laboriosam ipsa autem ullam optio! Doloremque iure ea laborum voluptatem hic iste!Nisi natus sit cum est, amet aspernatur dolorem eos provident necessitatibus debitis dolores quidem assumenda doloribus tempore libero magni fugiat vitae, obcaecati aliquam aut ipsa laboriosam voluptate ad molestiae! Minus.Enim doloremque asperiores earum sequi repellat, quis praesentium sunt nesciunt ratione eligendi fugiat dolore atque perspiciatis magnam dolor cupiditate eum eos consequuntur aperiam soluta sapiente iusto.Porro nostrum consequatur et!Voluptate, facilis.Autem, recusandae id enim voluptates iste, modi earum itaque, doloribus provident distinctio cumque quos ad.Repudiandae dignissimos fugit itaque quaerat quisquam at alias quia doloremque, tenetur, magnam labore.</p>'
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
    ],
    singleNews: null
  },
  mutations: {
    SET_SINGLE_NEWS(state, news) {
      state.singleNews = news
    }
  },
  actions: {
    loadSingleNews({ commit, state }, id) {
      let singleNews = null
      if (state.news) {
        singleNews = state.news.filter(item => item.id === id)
      }
      console.log(singleNews);

      commit('SET_SINGLE_NEWS', singleNews)
    }
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getSingleNews(state) {
      return state.singleNews
    }
  }
}

export default news