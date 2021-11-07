<template>
  <div class="news" v-if="news && setNews">
    <Banner :bannerInfo="bannerInfo" />
    <div class="container">
      <NewsTools />
      <div class="news__wrap">
        <NewsBlock
          v-for="item in setNews"
          :key="item.slug"
          :singleNews="item"
        />
      </div>
      <LoadMore @click="loadMore" v-if="news && showedNews <= setNews.length" />
    </div>
  </div>
</template>

<script>
import Banner from "../components/ui/Banner.vue";
import NewsTools from "../components/news/NewsTools.vue";
import { mapGetters } from "vuex";
import NewsBlock from "../components/news/NewsBlock.vue";
import LoadMore from "../components/ui/LoadMore.vue";
export default {
  components: { Banner, NewsTools, NewsBlock, LoadMore },
  name: "News",
  data() {
    return {
      showedNews: 3,
      bannerInfo: {
        title: "Новости",
        descr: "Будь в курсе самых свежих новостей из мира DOTA 2 ",
        img: require("../assets/img/news-banner.png"),
      },
    };
  },
  methods: {
    loadMore() {
      console.log(this.showedNews);
      this.showedNews += 2;
    },
  },
  computed: {
    ...mapGetters({
      news: "news/getNews",
      categoryId: "news/getCategoryId",
    }),
    setNews() {
      if (this.news) {
        let news = [];
        if (this.categoryId) {
          this.news.map((item) => {
            if (item.category.indexOf(this.categoryId) !== -1) {
              news.push(item);
            }
          });
        } else {
          news = this.news;
        }
        return news;
      }
    },
  },
  created() {
    this.$store.dispatch("news/loadNews");
  },
};
</script>

<style scoped>
.news .tools {
  margin: 100px 0;
}

.news {
  margin-bottom: 100px;
}

.news__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.news__wrap::v-deep .news-block {
  height: 400px;
}
</style>