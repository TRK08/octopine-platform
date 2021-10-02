<template>
  <div class="tournaments">
    <Banner :bannerInfo="bannerInfo" />
    <div class="container">
      <div class="tournaments-matches">
        <h2>Предстоящие матчи</h2>
        <SingleMatch />
      </div>
    </div>
    <TournamentList />
  </div>
</template>

<script>
import SingleMatch from "../components/tournaments/SingleMatch.vue";
import TournamentList from "../components/tournaments/TournamentList.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  components: { Banner, SingleMatch, TournamentList },
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
.tournaments-matches {
  margin: 50px 0 100px;
}

.tournaments-matches h2 {
  margin-bottom: 50px;
}
</style>