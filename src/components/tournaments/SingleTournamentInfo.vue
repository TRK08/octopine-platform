<template>
  <section class="tournaments-info">
    <div class="container">
      <div class="tournaments-info__wrap">
        <div class="tournament-info__header">
          <h2>{{ tournament.name }}</h2>
          <button class="custom-btn">
            Участвовать
            <svg class="white-arrow arrow">
              <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
            </svg>
          </button>
        </div>
        <div class="tournament-info__body">
          <Tabs :tabs="tabs" @selectTab="selectTab">
            <TournamentAbout slot="tabs__body" v-if="activeTab === 0" />
            <TournamentMatches slot="tabs__body" v-if="activeTab === 2" />
            <TournamentRules slot="tabs__body" v-if="activeTab === 4" />
          </Tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from "../ui/Tabs.vue";
import TournamentAbout from "./TournamentAbout.vue";
import TournamentMatches from "./TournamentMatches.vue";
import TournamentRules from "./TournamentRules.vue";
export default {
  components: { Tabs, TournamentAbout, TournamentMatches, TournamentRules },
  name: "SingleTournamentInfo",
  props: {
    tournament: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "О турнире",
          active: true,
        },
        {
          title: "Сетка",
          active: false,
        },
        {
          title: "Матчи",
          active: false,
        },
        {
          title: "Результаты",
          active: false,
        },
        {
          title: "Правила",
          active: false,
        },
      ],
    };
  },
  methods: {
    selectTab(i) {
      this.tabs.forEach((tab) => {
        tab.active = tab === this.tabs[i];
        this.activeTab = i;
      });
    },
  },
};
</script>

<style scoped>
.tournaments-info {
  margin-top: -150px;
  z-index: 3;
  position: relative;
  margin-bottom: 100px;
}

.tournaments-info__wrap {
  padding: 30px;
  border-radius: 30px;
  background-color: var(--dark);
}

.tournament-info__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.tournament-info__header button {
  background-color: var(--red);
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
}

.tournament-info__header button .arrow {
  transform: scale(-1);
}
</style>