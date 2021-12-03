<template>
  <div class="single-team">
    <h2>Профиль команды</h2>
    <masonry
      class="single-team__wrap"
      :gutter="30"
      :cols="{ default: 2, 1200: 1 }"
      v-if="team"
    >
      <div class="single-team-info">
        <div
          v-if="team.logo"
          class="single-team__logo"
          :style="{
            background: 'url(' + team.logo + ') no-repeat ',
            'background-size': 'contain',
          }"
        ></div>
        <div v-else class="single-team__logo empty"></div>
        <h3>{{ team.name }}</h3>
      </div>
      <div class="single-team-users" v-if="team.users">
        <h3>Игроки</h3>
        <pre>{{ team.admin }}</pre>
        <router-link
          tag="div"
          :to="`/user/${item.nickname}`"
          class="user-friends__item"
          v-for="item in allPlayers"
          :key="item.id"
        >
          <div
            v-if="item.avatar"
            class="user-friends__avatar"
            :style="{
              background: 'url(' + item.avatar + ') no-repeat ',
              'background-size': 'contain',
            }"
          ></div>
          <div v-else class="user-friends__avatar empty"></div>
          <div class="user-friends__nickname">{{ item.nickname }}</div>
          <div class="user-admin" v-if="item.id == team.admin.id">
            <img src="../../assets/img/crown.svg" alt="" />
          </div>
          <div v-else></div>
        </router-link>
      </div>
      <div class="single-team-settings" v-if="team.admin.id == user.user_id">
        <h3>Настройки команды</h3>
        <div class="create-team-item dropdown">
          <small>Настройте игроков</small>
          <button @click="open = !open">Выберите игроков</button>
          <ul class="create-team-dropdown" v-if="open && allUsers.length">
            <li v-for="item in allUsers" :key="item.nickname">
              <input
                type="checkbox"
                :value="item.user_id"
                :id="`user${item.user_id}`"
                v-model="usersInTeamId"
              />
              <label :for="`user${item.user_id}`"> {{ item.nickname }} </label>
            </li>
          </ul>
          <ul
            class="create-team-dropdown empty"
            v-else-if="
              open && user.friends.accepted && !user.friends.accepted.length
            "
          >
            <li>
              <span>Список друзей пуст</span>
            </li>
          </ul>
        </div>
        <div class="single-team__change-name">
          <input
            v-model="newName"
            type="text"
            placeholder="Изменить название"
          />
        </div>
        <div class="single-team__change-logo">
          <label v-if="newLogo" class="custom-load-avatar" for="load-logo-img">
            {{ newLogo.name }}
          </label>
          <label v-else class="custom-load-avatar" for="load-logo-img"
            >Выберите логотип</label
          >

          <input
            ref="file"
            type="file"
            name="upload"
            placeholder="Выбрать файл"
            accept=".jpg,.jpeg,.png"
            id="load-logo-img"
            @change="setLogo"
          />
        </div>

        <div class="single-team__add-user"></div>
        <button @click="sendNewInfo" :disabled="isLoading">
          <span class="load-spinner" v-if="isLoading"></span>
          <span v-else>Сохранить</span>
        </button>
      </div>
      <div class="single-team-tournaments" v-if="lastTournaments.length">
        <h3>Участие в турнирах</h3>
        <router-link
          tag="div"
          :to="`/tournaments/${item.slug}`"
          class="single-team-tournament"
          v-for="item in lastTournaments"
          :key="item.id"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </masonry>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SingleTeamPopup",
  data() {
    return {
      open: false,
      newName: "",
      newLogo: null,
      usersInTeamId: [],
      allUsers: [],
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      updateTeamInfo: "usersAndTeams/UPDATE_TEAM_INFO",
    }),
    setLogo() {
      this.newLogo = this.$refs.file.files[0];
    },
    sendNewInfo() {
      this.isLoading = true;
      let teamData = {
        team_id: this.team.id,
        admin: this.team.admin.id,
        users: this.usersInTeamId.join(","),
      };

      if (this.newName.length) {
        teamData.name = this.newName;
      }
      if (this.newLogo) {
        teamData.logo = this.newLogo;
      }

      let form2 = new FormData();
      for (var field in teamData) {
        form2.append(field, teamData[field]);
      }

      this.updateTeamInfo(form2).then(() => {
        this.isLoading = false;
      });
    },
  },
  watch: {
    team(val) {
      if (val.admin.id == this.user.user_id) {
        let usersInTeamId = [];
        let usersInTeam = [];
        let allUsers = [];

        val.users.map((item) => {
          usersInTeamId.push(+item.id);
        });

        usersInTeam = val.users.map((item) => {
          item.user_id = item.id;
          return item;
        });

        this.usersInTeamId = usersInTeamId;

        allUsers = [...val.users, ...this.userInfo.friends.accepted];

        allUsers.filter((item) => {
          let i = this.allUsers.findIndex((x) => x.id == item.user_id);
          if (i <= -1) {
            this.allUsers.push(item);
          }
          return null;
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      team: "popup/getPopupInfo",
      mode: "popup/getPopupMode",
      user: "auth/getUser",
      userInfo: "auth/getUserInfo",
      tournaments: "tournaments/getTournaments",
    }),
    allPlayers() {
      if (this.team.users && this.team.admin) {
        return [this.team.admin, ...this.team.users];
      }
    },
    lastTournaments() {
      let res = [];
      this.tournaments.map((item) => {
        item.teams.forEach((i) => {
          if (i.id == this.team.id) {
            res.push(item);
          }
        });
      });
      return res;
    },
  },
  created() {},
};
</script>

<style scoped>
.single-team {
  background-color: var(--dark);
  text-align: center;
  width: 100%;
}

.single-team-info,
.single-team-users,
.single-team-settings,
.single-team-tournaments {
  padding: 30px;
  background-color: var(--bg);
  border-radius: 30px;
  margin-top: 30px;
  width: 430px;
}

.single-team-settings button {
  background-color: var(--blue);
}

.single-team-settings button:disabled {
  opacity: 0.7;
}

.single-team__change-logo {
  margin-bottom: 15px;
}

.single-team-users h3 {
  margin-bottom: 30px;
}

.single-team-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.single-team__logo {
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 100%;
  background-position: center center !important;
  background-size: cover !important;
}

.single-team__logo.empty {
  background-color: var(--grey);
}

.user-friends__item {
  padding: 15px;
  background-color: var(--dark);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease;
}

.user-friends__item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.user-friends__avatar {
  width: 75px;
  height: 75px;
  min-width: 75px;
  min-height: 75px;
  border-radius: 100%;
  background-position: center center !important;
  background-size: cover !important;
}

.user-friends__avatar.empty {
  background-color: var(--grey);
}

.user-friends__item:not(:last-child) {
  margin-bottom: 30px;
}

.user-friends__nickname {
  color: var(--white);
  margin-left: 30px;
}

.custom-load-avatar {
  padding: 15px 30px;
  background-color: var(--white);
  color: var(--dark);
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
}

#load-logo-img {
  display: none;
}

.create-team-item.dropdown button {
  background-color: var(--white);
  color: var(--dark);
  width: 100%;
  text-align: left;
  border-radius: 30px;
  padding: 15px 30px;
  border: none;
  position: relative;
  z-index: 10;
}

.create-team-item.dropdown {
  position: relative;
  margin-bottom: 30px;
}

.create-team-dropdown {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  background-color: var(--white);
  position: absolute;
  top: 50px;
  padding: 35px 0 15px 0;
  z-index: 1;
  border-radius: 0 0 30px 30px;
  color: var(--dark);
  overflow: auto;
  max-height: 140px;
}

.create-team-dropdown.empty li {
  justify-content: center;
}

.create-team-dropdown li label {
  cursor: pointer;
  width: 100%;
  margin-left: 10px;
}

.create-team-dropdown li {
  display: flex;
  align-items: center;
  padding: 0 15px;
  width: 100%;
}

.create-team-dropdown li:not(:last-child) {
  margin-bottom: 15px;
  border-bottom: 1px solid var(--dark);
}

.create-team-dropdown input {
  margin: 0;
  padding: 0;
  width: auto;
}

.single-team-tournaments h3 {
  margin-bottom: 30px;
}

.single-team-tournament {
  background-color: var(--dark);
  cursor: pointer;
  padding: 30px;
  border-radius: 30px;
  transition: all 0.5s ease;
}

.single-team-tournament:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.user-admin,
.user-admin img {
  width: 30px;
  height: 30px;
}

@media (max-width: 672px) {
  .single-team-info,
  .single-team-users,
  .single-team-settings,
  .single-team-tournaments {
    width: 100%;
    padding: 30px 15px;
  }
}
</style>