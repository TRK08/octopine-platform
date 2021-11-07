<template>
  <div class="single-tournament" v-if="tournament">
    <Banner :bannerInfo="bannerInfo" />
    <SingleTournamentInfo :tournament="tournament" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleTournamentInfo from "../components/tournaments/SingleTournamentInfo.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  name: "SingleTournament",
  props: ["id"],
  components: { Banner, SingleTournamentInfo },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      singleTournament: "tournaments/getSingleTournament",
      tournaments: "tournaments/getTournaments",
    }),
    bannerInfo() {
      return {
        img: this.tournament.image,
      };
    },
    tournament() {
      if (this.tournaments) {
        return this.singleTournament(this.id);
      }
    },
  },
  created() {},
};
</script>

<style scoped>
</style>