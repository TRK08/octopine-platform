<template>
  <section class="user-teams" v-if="teams">
    <h2>Команды</h2>
    <div class="user-teams__items">
      <div
        class="user-teams__item"
        v-for="item in teams.slice(0, 3)"
        :key="item.nickname"
        @click="loadTeam(item.id)"
      >
        <div
          v-if="item.logo"
          class="user-teams__avatar"
          :style="{
            background: 'url(' + item.logo + ') no-repeat ',
            'background-size': 'contain',
          }"
        ></div>
        <div v-else class="user-teams__avatar empty"></div>
        <div class="user-teams__nickname">{{ item.name }}</div>
      </div>
    </div>
    <div
      v-if="teams.length > 2"
      class="user-teams__show-all"
      @click="setPopup({ mode: 'teams', data: teams })"
    >
      Все команды
    </div>
    <button
      @click="setPopup({ mode: 'createTeam' })"
      v-if="this.$route.path === '/cabinet'"
      class="user-teams__create-team"
    >
      Создать команду
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserTeams",
  props: {
    teams: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      setPopup: "popup/GET_POPUP_MODE",
      loadTeam: "usersAndTeams/LOAD_TEAM_INFO",
    }),
  },
};
</script>

<style scoped>
.user-teams {
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.user-teams h2 {
  margin-bottom: 30px;
}

.user-teams__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.user-teams__item {
  padding: 15px;
  background-color: var(--bg);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
}

.user-teams__item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.user-teams__avatar {
  width: 75px;
  height: 75px;
  margin-right: 50px;
  background-position: center center !important;
}

.user-teams__avatar.empty {
  border-radius: 100%;
  background-color: var(--grey);
}

.user-teams__item:not(:last-child) {
  margin-bottom: 30px;
}

.user-teams__show-all {
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.user-teams__show-all:hover {
  color: var(--blue);
  transition: all 0.5s ease;
}

.user-teams__create-team {
  background-color: var(--blue);
  margin-top: 30px;
}
</style>