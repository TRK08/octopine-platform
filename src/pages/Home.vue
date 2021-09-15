<template>
  <div>
    <HomeSlider />
    <TournamentsSlider />
    <NewsHome />
    <Feedback />
    <AboutHome />
  </div>
</template>

<script>
import AboutHome from "../components/home/AboutHome.vue";
import Feedback from "../components/home/Feedback.vue";
import HomeSlider from "../components/home/HomeSlider.vue";
import NewsHome from "../components/home/NewsHome.vue";
import TournamentsSlider from "../components/home/TournamentsSlider.vue";
export default {
  components: { HomeSlider, TournamentsSlider, NewsHome, Feedback, AboutHome },
};
</script>