<template>
  <div class="single-news" v-if="news(id)">
    <Banner :bannerInfo="{ img: news(id).image, title: news(id).title }" />
    <div class="container">
      <div class="single-news__wrap">
        <div class="single-news-text" v-html="news(id).text"></div>
        <router-link tag="button" to="/news" class="single-news-back">
          <svg class="white-arrow arrow">
            <use xlink:href="../assets/img/sprite.svg#arrow"></use>
          </svg>
          <span>Назад</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/ui/Banner.vue";
import { mapGetters } from "vuex";
export default {
  name: "SingleNews",
  components: { Banner },
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      news: "news/getSingleNews",
    }),
  },
  created() {},
};
</script>

<style scoped>
.single-news {
  margin-bottom: 100px;
}

.single-news__wrap {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: var(--dark);
  border-radius: 30px;
  margin-top: -100px;
  z-index: 3;
  padding: 50px 30px 30px;
}

.single-news-text {
  font-weight: 400;
  line-height: 25px;
  color: var(--white);
  opacity: 0.75;
}

.single-news-text p {
  display: block;
  margin-bottom: 10px !important;
}

.single-news-back {
  background-color: var(--blue);
  width: 200px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.single-news-back .arrow {
}
</style>