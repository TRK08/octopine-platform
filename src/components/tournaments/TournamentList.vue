<template>
  <section class="tournament-list">
    <div class="container">
      <div class="tournament-list__header">
        <h2>Турниры</h2>
        <div class="tournament-list__buttons">
          <button @click="grid = true">
            <img src="../../assets/img/grid.svg" alt="" />
          </button>
          <button @click="grid = false">
            <img src="../../assets/img/list.svg" alt="" />
          </button>
        </div>
      </div>
      <Tabs :tabs="tabs" @selectTab="selectTab" />
      <transition-group
        name="fade"
        class="tournament-items"
        :class="{ list: !grid }"
      >
        <div
          class="tournament-item"
          v-for="item in tournaments.slice(0, showedTournaments)"
          :key="item.id"
        >
          <TournamentItem :tournament="item" :grid="grid" />
        </div>
      </transition-group>
      <LoadMore
        @click="loadMore"
        v-if="showedTournaments <= tournaments.length"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import LoadMore from "../ui/LoadMore.vue";
import Tabs from "../ui/Tabs.vue";
import TournamentItem from "./TournamentItem.vue";
export default {
  components: { Tabs, TournamentItem, LoadMore },
  name: "TournamentList",
  data() {
    return {
      showedTournaments: 3,
      activeTab: 0,
      grid: true,
      tabs: [
        {
          title: "Текущие",
          active: true,
        },
        {
          title: "Прошедшие",
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
    loadMore() {
      console.log(this.showedshowedTournaments);
      this.showedTournaments += 3;
    },
  },
  computed: {
    ...mapGetters({
      tournaments: "tournaments/getTournaments",
    }),
  },
};
</script>

<style scoped>
.tournament-list {
  padding-bottom: 100px;
}

.tournament-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.tournament-list__buttons {
  display: flex;
  align-items: center;
}

.tournament-list__buttons button {
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  width: 40px;
  height: 40px;
}

.tournament-list__buttons button:first-child {
  margin-right: 30px;
}

.tournament-list::v-deep .tabs__item button {
  background-color: var(--dark);
}

.tournament-list::v-deep .tabs__item button.active,
.tournament-list::v-deep .tabs__item:hover button {
  background-color: var(--blue);
}

.tournament-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.tournament-items.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;
}
</style>