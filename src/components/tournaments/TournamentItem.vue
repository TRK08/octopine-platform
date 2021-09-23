<template>
  <div class="tournament-block">
    <div class="tournament-block__header">
      <div
        class="tournament-block__header-item"
        v-for="item in tournament.format"
        :key="item"
      >
        {{ item }}
        <div class="tournament-block__header-separator"></div>
      </div>
    </div>
    <div
      class="tournament-block__img"
      :style="{
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
          tournament.img +
          ') no-repeat ',
        'background-size': 'cover',
      }"
    >
      <div class="tournament-block__img--hover">
        <router-link tag="button" to="">
          <svg class="blue-arrow arrow">
            <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <div class="tournament-block__body">
      <h3>{{ tournament.name }}</h3>
      <div class="tournament-block__body-item">
        <img src="../../assets/img/clock.svg" alt="" />
        <span> {{ tournament.time }} </span>
      </div>
      <div class="tournament-block__body-item">
        <img src="../../assets/img/calendar.svg" alt="" />
        <span> {{ tournament.date }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TournamentItem",
  props: {
    tournament: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>