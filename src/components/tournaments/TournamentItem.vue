<template>
  <div class="tournament-block__wrap" v-if="tournament">
    <div class="tournament-block list" v-show="grid">
      <div class="tournament-block__header">
        <div class="tournament-block__header-item">
          {{ tournament.type }}
          <div class="tournament-block__header-separator"></div>
        </div>
        <div class="tournament-block__header-item">
          {{ tournament.teams.length }} / {{ tournament.max_players }}
          <div class="tournament-block__header-separator"></div>
        </div>
        <div class="tournament-block__header-item">
          {{ tournament.prize_sum }}
          <div class="tournament-block__header-separator"></div>
        </div>
      </div>
      <div
        class="tournament-block__img"
        :style="{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
            tournament.image +
            ') no-repeat ',
          'background-size': 'cover',
        }"
      >
        <div class="tournament-block__img--hover">
          <router-link tag="button" :to="`/tournaments/${tournament.slug}`">
            <svg class="blue-arrow arrow">
              <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
            </svg>
          </router-link>
        </div>
      </div>
      <div class="tournament-block__body">
        <h3>{{ tournament.name }}</h3>
        <div class="tournament-block__body-item" v-if="time">
          <img src="../../assets/img/clock.svg" alt="" />
          <span> {{ time }} </span>
        </div>
        <div class="tournament-block__body-item" v-if="date">
          <img src="../../assets/img/calendar.svg" alt="" />
          <span> {{ date }} </span>
        </div>
      </div>
    </div>
    <router-link
      tag="div"
      :to="`/tournaments/${tournament.slug}`"
      class="tournament-block grid"
      v-show="!grid"
    >
      <div
        class="tournament-block__img"
        :style="{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
            tournament.image +
            ') no-repeat ',
          'background-size': 'cover',
        }"
      ></div>
      <div class="tournament-block__body">
        <h3>{{ tournament.name }}</h3>
        <div class="tournament-block__body-date">
          <div class="tournament-block__body-item">
            <img src="../../assets/img/clock.svg" alt="" />
            <span> {{ time }} </span>
          </div>
          <div class="tournament-block__body-item">
            <img src="../../assets/img/calendar.svg" alt="" />
            <span> {{ date }} </span>
          </div>
        </div>
        <div class="tournaments-block__body-info">
          <div class="tournament-block__header-item">
            {{ tournament.type }}
            <div class="tournament-block__header-separator"></div>
          </div>
          <div class="tournament-block__header-item">
            {{ tournament.teams.length }} / {{ tournament.max_players }}
            <div class="tournament-block__header-separator"></div>
          </div>
          <div class="tournament-block__header-item">
            {{ tournament.prize_sum }}
            <div class="tournament-block__header-separator"></div>
          </div>
        </div>
      </div>
      <router-link tag="button" :to="`/tournaments/${tournament.slug}`">
        <svg class="blue-arrow arrow">
          <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
        </svg>
      </router-link>
    </router-link>
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
    grid: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      time: "",
      date: "",
    };
  },
  methods: {
    setTime() {
      let time = this.tournament.date.split(" ");
      this.time = time[1];
      this.date = time[0];
    },
  },
  created() {
    this.setTime();
  },
};
</script>

<style scoped>
.tournament-block.list .tournament-block__body {
  background-image: url("../../assets/img/molekule.svg");
  background-repeat: repeat-x;
  background-position: center;
}
.tournament-block.grid {
  max-width: unset;
  overflow: hidden;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  min-height: unset;
}

.tournament-block.grid .tournament-block__img {
  width: 100%;
  height: 160px;
}

.tournament-block.grid
  .tournament-block__body-date
  .tournament-block__body-item:first-child {
  margin-right: 15px;
}

.tournament-block.grid .tournament-block__body-date {
  display: flex;
  margin: 10px 0 20px;
}

.tournament-block.grid .tournaments-block__body-info {
  display: flex;
}

.tournament-block.grid .tournament-block__body h3 {
  max-width: 550px;
}

.tournament-block.grid button {
  padding: 0;
  background-color: transparent;
}

.tournament-block.grid button:hover .blue-arrow {
  transform: translateX(10px) scale(-1);
}

@media (max-width: 672px) {
  .tournament-block.grid {
    min-width: 100%;
    width: calc(100vw - 30px);
    grid-template-columns: 5fr 1fr;
  }

  .tournament-block.grid .tournament-block__img {
    display: none;
  }
}

@media (max-width: 512px) {
  .tournament-block.list {
    min-width: 345px;
    max-width: 345px;
  }

  .tournament-block.grid button {
    display: none;
  }
}
</style>