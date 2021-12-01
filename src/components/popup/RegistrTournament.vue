<template>
  <div class="registr-tournament" v-if="userTeams">
    <h2>Регистрация на турнир</h2>
    <div class="registr-tournament__select-team">
      <h3>Выберите команду для участия в турнире</h3>
      <div
        v-for="item in userTeams"
        :key="item.id"
        @click="selectTeam(item.id)"
        class="registr-tournament__item"
        :class="{ active: item.active }"
      >
        <div
          v-if="item.logo"
          class="registr-tournament__avatar"
          :style="{
            background: 'url(' + item.logo + ') no-repeat ',
            'background-size': 'contain',
          }"
        ></div>
        <div v-else class="registr-tournament__avatar empty"></div>
        <div class="registr-tournament__nickname">{{ item.name }}</div>
        <div class="registr-tournament__selected"></div>
      </div>
      <button @click="registr" :disabled="!selectedTeam">
        <span class="load-spinner" v-if="isLoading"></span>
        <span v-else>Зарегистрироваться</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RegistrTournament",
  data() {
    return {
      isLoading: false,
      selectedTeam: null,
      userTeams: [],
    };
  },
  methods: {
    ...mapActions({
      registrTournament: "tournaments/REGISTR_TOURNAMENTS",
      checkPaymentAction: "tournaments/CHECK_PAYMENT",
    }),
    selectTeam(id) {
      this.userTeams = this.userTeams.map((item) => {
        item.active = false;
        if (item.id === id) {
          item.active = true;
          this.selectedTeam = item.id;
        }
        return item;
      });
    },
    registr() {
      this.isLoading = true;
      const returnUrl = window.location.origin + "/payment";
      let data = {
        team_id: this.selectedTeam,
        match_id: this.info.id,
        total: this.info.cost,
        return_url: returnUrl,
      };

      localStorage.setItem("tournamentName", this.info.name);

      this.registrTournament(data).then(() => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    ...mapGetters({
      info: "popup/getPopupInfo",
      mode: "popup/getPopupMode",
      userInfo: "auth/getUserInfo",
    }),
  },
  created() {
    this.userInfo.teams.map((item) => {
      if (this.userInfo.user.ID == item.admin_id) {
        item.active = false;
        this.userTeams.push(item);
      }
    });
  },
};
</script>

<style scoped>
.registr-tournament {
  text-align: center;
}

.registr-tournament h2 {
  margin-bottom: 30px;
}

.registr-tournament__select-team {
  max-width: 500px;
}

.registr-tournament__select-team h3 {
  margin-bottom: 30px;
}

.registr-tournament__select-team button {
  background-color: var(--blue);
}

.registr-tournament__select-team button:disabled {
  opacity: 0.7;
}

.registr-tournament__selected {
  width: 30px;
  height: 30px;
}

.registr-tournament__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.registr-tournament__item {
  padding: 15px;
  background-color: var(--bg);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  cursor: pointer;
}

.registr-tournament__item.active {
  background-color: var(--blue);
}

.registr-tournament__item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.registr-tournament__avatar {
  width: 75px;
  height: 75px;
  min-width: 75px;
  min-height: 75px;
  border-radius: 100%;
  background-position: center center !important;
  background-size: cover !important;
}

.registr-tournament__avatar.empty {
  background-color: var(--grey);
}

.registr-tournament__item:not(:last-child) {
  margin-bottom: 30px;
}
</style>