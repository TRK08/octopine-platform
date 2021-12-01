<template>
  <div class="tournament-about" v-if="tournament">
    <div class="tournament-about__block format">
      <h3>Формат</h3>
      <div class="tournament-about__format-items">
        <div class="tournament-about__format-item">
          <img src="../../assets/img/peoples.svg" alt="" />
          <span>
            {{ tournament.teams.length }} / {{ tournament.max_players }}
          </span>
        </div>
        <div class="tournament-about__format-item">
          <img src="../../assets/img/cup.svg" alt="" />
          <span>{{ tournament.prize_sum }}Р</span>
        </div>
        <div class="tournament-about__format-item">
          <img src="../../assets/img/grid-tournament.svg" alt="" />
          <span>
            {{ tournament.type }}
          </span>
        </div>
        <div class="tournament-about__format-item">
          <img src="../../assets/img/money.svg" alt="" />
          <span>{{ tournament.cost }}Р</span>
        </div>
      </div>
    </div>
    <div class="tournament-about__block descr">
      <h3>Описание</h3>
      <div v-html="tournament.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToruanamentAbout",
  props: {
    tournament: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.tournament-about__block {
  margin-bottom: 50px;
}

.tournament-about__block h3 {
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 40px;
}

.tournament-about__block.descr p {
  font-size: 18px;
  line-height: 22px;
  color: var(--grey);
  font-weight: 400;
}

.tournament-about__format-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.tournament-about__format-item {
  padding: 30px;
  border: 3px solid var(--blue);
  border-radius: 30px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tournament-about__format-item span {
  margin-left: 30px;
}

@media (max-width: 1199px) {
  .tournament-about__format-item {
    padding: 15px;
    max-width: 210px;
  }
}

@media (max-width: 991px) {
  .tournament-about__format-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .tournament-about__format-item {
    margin: 0 auto;
    max-width: unset;
    width: 100%;
  }
}

@media (max-width: 512px) {
  .tournament-about__format-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>