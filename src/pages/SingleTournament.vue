<template>
  <div class="single-tournament" v-if="tournament">
    <Banner :bannerInfo="bannerInfo" />
    <SingleTournamentInfo :tournament="tournament" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleTournamentInfo from "../components/tournaments/SingleTournamentInfo.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  name: "SingleTournament",
  props: ["id"],
  components: { Banner, SingleTournamentInfo },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      singleTournament: "tournaments/getSingleTournament",
      tournaments: "tournaments/getTournaments",
    }),
    bannerInfo() {
      return {
        img: this.tournament.head_img,
      };
    },
    tournament() {
      if (this.tournaments) {
        return this.singleTournament(this.id);
      }
    },
  },
};
</script>

<style scoped>
</style>