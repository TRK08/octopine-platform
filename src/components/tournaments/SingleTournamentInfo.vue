<template>
  <section class="tournaments-info" v-if="tournament">
    <router-link class="tournaments-info__back" tag="div" to="/tournaments"
      >Назад</router-link
    >
    <div class="container">
      <div class="tournaments-info__wrap">
        <div class="tournament-info__header">
          <h2>{{ tournament.name }}</h2>
          <button
            :disabled="!isLogInfo"
            class="custom-btn"
            @click="setPopup({ mode: 'registrTournament', data: tournament })"
            v-if="
              isLog &&
              !tournament.finished &&
              tournament.teams.length != tournament.max_players
            "
          >
            Участвовать
            <svg class="white-arrow arrow">
              <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
            </svg>
          </button>
          <div
            class="tournaments-info__not-log"
            v-else-if="!isLog && !tournament.finished"
          >
            Для участия нужно
            <router-link tag="span" to="/auth">войти</router-link> или
            <router-link tag="span" to="/auth">зарегистрироваться</router-link>
          </div>

          <div
            class="tournamets-info__closed"
            v-else-if="
              tournament.teams.length == tournament.max_players &&
              !tournament.finished
            "
          >
            Регистрация закрыта
          </div>
        </div>
        <div class="tournament-info__body">
          <Tabs :tabs="tabs" @selectTab="selectTab">
            <TournamentAbout
              :tournament="tournament"
              slot="tabs__body"
              v-if="activeTab === 0"
            />
            <TournamentBracket
              :tournament="tournament"
              slot="tabs__body"
              v-if="activeTab === 1"
            />
            <!-- <TournamentMatches slot="tabs__body" v-if="activeTab === 2" /> -->
            <TournamentRules slot="tabs__body" v-if="activeTab === 2" />
          </Tabs>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Tabs from "../ui/Tabs.vue";
import TournamentAbout from "./TournamentAbout.vue";
import TournamentBracket from "./TournamentBracket.vue";
import TournamentMatches from "./TournamentMatches.vue";
import TournamentRules from "./TournamentRules.vue";
export default {
  components: {
    Tabs,
    TournamentAbout,
    TournamentMatches,
    TournamentRules,
    TournamentBracket,
  },
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
          title: "Правила",
          active: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setPopup: "popup/GET_POPUP_MODE",
    }),
    selectTab(i) {
      this.tabs.forEach((tab) => {
        tab.active = tab === this.tabs[i];
        this.activeTab = i;
      });
    },
  },
  computed: {
    ...mapGetters({
      isLog: "auth/getUser",
      isLogInfo: "auth/getUserInfo",
      myProfile: "auth/getUserInfo",
    }),
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

.tournaments-info__back {
  text-align: center;
  background-color: var(--blue);
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 10px 15px;
  border-radius: 30px;
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
  transition: all 0.5s ease;
}

.tournament-info__header button:disabled {
  opacity: 0.7;
  transition: all 0.5s ease;
}

.tournament-info__header button .arrow {
  transform: scale(-1);
}

.tournaments-info__not-log {
  max-width: 400px;
  text-align: center;
  font-weight: 400;
  background-color: var(--blue);
  padding: 10px;
  border-radius: 30px;
  color: #c7c6c6;
}

.tournaments-info__not-log span {
  font-weight: 500;
  color: var(--white);
  cursor: pointer;
}

.tournamets-info__closed {
  background-color: var(--blue);
  padding: 10px 15px;
  border-radius: 30px;
}

@media (max-width: 991px) {
  .tournament-info__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .tournament-info__header h2 {
    margin-bottom: 30px;
  }
}
</style>