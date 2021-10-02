<template>
  <div class="single-tournament">
    <Banner :bannerInfo="tournament" />
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
    return {
      tournament: [],
    };
  },
  computed: {
    ...mapGetters({
      singleTournament: "tournaments/getSingleTournament",
    }),
  },
  created() {
    this.tournament = this.singleTournament(this.id);
  },
};
</script>

<style scoped>
</style>