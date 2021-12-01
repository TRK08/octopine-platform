<template>
  <section class="tournament-list" v-if="tournaments">
    <div class="container">
      <div class="tournament-list__header">
        <h2>Турниры</h2>
        <div class="tournament-list__buttons">
          <button @click="grid = true">
            <svg class="grid-icon" :class="{ active: grid }">
              <use xlink:href="../../assets/img/grid.svg#grid"></use>
            </svg>
          </button>
          <button @click="grid = false">
            <svg
              class="list-icon"
              :class="{ active: !grid }"
              viewBox="0 3 35 35"
            >
              <use xlink:href="../../assets/img/list.svg#list"></use>
            </svg>
          </button>
        </div>
      </div>
      <Tabs :tabs="tabs" @selectTab="selectTab" />
      <transition-group
        name="fade"
        class="tournament-items"
        :class="{ list: !grid }"
        v-show="activeTab === 0"
      >
        <div
          class="tournament-item"
          v-for="item in oldTournaments.slice(0, showedTournaments)"
          :key="item.id"
        >
          <TournamentItem :tournament="item" :grid="grid" />
        </div>
      </transition-group>
      <transition-group
        name="fade"
        class="tournament-items"
        :class="{ list: !grid }"
        v-show="activeTab === 1"
      >
        <div
          class="tournament-item"
          v-for="item in currentTournaments.slice(0, showedOldTournaments)"
          :key="item.id"
        >
          <TournamentItem :tournament="item" :grid="grid" />
        </div>
      </transition-group>
      <LoadMore
        @click="loadMore"
        v-if="
          showedTournaments <
            tournaments.filter((item) => !item.finished).length &&
          activeTab === 0
        "
      />
      <LoadMore
        @click="loadMore('old')"
        v-if="
          showedOldTournaments <
            tournaments.filter((item) => item.finished).length &&
          activeTab === 1
        "
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
      showedOldTournaments: 3,
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
    loadMore(tag) {
      if (tag === "old") {
        this.showedOldTournaments += 3;
      } else {
        this.showedTournaments += 3;
      }
    },
  },
  computed: {
    ...mapGetters({
      tournaments: "tournaments/getTournaments",
      oldTournaments: "tournaments/getOldTournaments",
      currentTournaments: "tournaments/getCurrentTournaments",
    }),
  },
  created() {
    // this.sortTournaments();
  },
};
</script>

<style scoped>
.tournament-list {
  padding: 100px 0 100px;
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

.grid-icon,
.list-icon {
  width: 35px;
  height: 35px;
  fill: var(--grey);
  transition: all 0.5s ease;
}

.list-icon svg {
  width: 35px;
  height: 35px;
}

.grid-icon:hover,
.grid-icon.active,
.list-icon:hover,
.list-icon.active {
  fill: var(--blue);
  transition: all 0.5s ease;
}

.tournament-list__buttons button {
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  width: 35px;
  height: 35px;
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

@media (max-width: 991px) {
  .tournament-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 672px) {
  .tournament-items {
    grid-template-columns: repeat(1, 1fr);
  }

  .tournament-item {
    margin: 0 auto;
  }
}
</style>