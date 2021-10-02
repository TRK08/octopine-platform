<template>
  <div class="news">
    <Banner :bannerInfo="bannerInfo" />
    <div class="container">
      <NewsTools />
      <transition-group name="fade" class="news__wrap">
        <NewsBlock
          v-for="item in news.slice(0, showedNews)"
          :key="item.title"
          :singleNews="item"
        />
      </transition-group>
      <LoadMore @click="loadMore" v-if="showedNews <= news.length" />
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
    }),
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