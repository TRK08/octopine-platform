<template>
  <div class="tournaments">
    <Banner :bannerInfo="bannerInfo" />
    <div class="container"></div>
  </div>
</template>

<script>
import Banner from "../components/ui/Banner.vue";
export default {
  components: { Banner },
  name: "Tournaments",
  data() {
    return {
      bannerInfo: {
        title: "Турниры",
        descr:
          "Учавствуй и побеждай в регулярных состязаниях на нашей платформе",
        img: require("../assets/img/tournaments-banner.png"),
      },
    };
  },
};
</script>

<style scoped>
</style>