<template>
  <section class="tournaments-slider" v-if="tournaments">
    <div class="container">
      <router-link tag="div" to="/tournaments" class="home-title">
        <h2>Турниры</h2>
        <svg class="blue-arrow arrow">
          <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
        </svg>
      </router-link>
      <div class="swiper-pagination"></div>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in tournaments" :key="item.id">
          <TournamentItem :tournament="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import TournamentItem from "../tournaments/TournamentItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { TournamentItem },
  name: "TournamentsSlider",
  computed: {
    ...mapGetters({
      tournaments: "tournaments/getTournaments",
    }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        draggable: true,
        freeMode: true,
        slidesPerView: 1,
        touchRatio: 1,
        loop: false,
        infinite: true,
        threshold: 50,
        speed: 400,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            freeMode: true,
            threshold: 10,
            touchRatio: 1,
          },
          768: {
            slidesPerView: 1,
            touchRatio: 1,
          },
          1150: {
            slidesPerView: 4,
            spaceBetween: 30,
            touchRatio: 1,
          },
          1150: {
            slidesPerView: 2.8,
            spaceBetween: 30,
            touchRatio: 1,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
</style>