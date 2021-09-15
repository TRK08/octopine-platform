<template>
  <section class="news-home">
    <div class="container">
      <router-link tag="div" to="/news" class="home-title">
        <h2>Новости</h2>
        <svg class="blue-arrow arrow">
          <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
        </svg>
      </router-link>
      <div class="news-home__grid">
        <NewsBlock
          v-for="item in news.slice(0, 3)"
          :key="item.title"
          :singleNews="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import NewsBlock from "../news/NewsBlock.vue";

export default {
  components: { NewsBlock },
  name: "NewsHome",
  computed: {
    ...mapGetters({
      news: "news/getNews",
    }),
  },
};
</script>

<style scoped>
</style>