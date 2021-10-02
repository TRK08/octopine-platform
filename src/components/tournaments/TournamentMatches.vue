<template>
  <div class="tournament-matches">
    <SingleMatch v-for="item in 4" :key="item" />
  </div>
</template>

<script>
import SingleMatch from "./SingleMatch.vue";
export default {
  components: { SingleMatch },
  name: "TournamentMatches",
};
</script>

<style scoped>
.tournament-matches {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  justify-self: center;
}

.tournament-matches::v-deep .single-match {
  background-color: var(--bg);
  width: 100%;
  margin: 0 auto;
}
</style>