<template>
  <div class="news-block__wrap">
    <router-link tag="div" :to="`/news/${singleNews.slug}`" class="news-block">
      <h3 class="news-block__title">{{ singleNews.title }}</h3>
      <div
        class="news-block__bg"
        :style="{
          background: 'url(' + singleNews.image + ') no-repeat ',
          'background-size': 'cover',
        }"
      ></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NewsBlock",
  props: {
    singleNews: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>