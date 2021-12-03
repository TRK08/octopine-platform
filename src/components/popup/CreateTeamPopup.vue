<template>
  <div class="create-team">
    <h3>Создать команду</h3>
    <div class="create-team__wrap">
      <div class="create-team-item">
        <small>Введите название</small>
        <input type="text" placeholder="Название команды" v-model="teamName" />
      </div>
      <div class="create-team-item file">
        <small>Выберите логотип</small>
        <label v-if="file" class="custom-load-team-logo" for="load-logo-img">
          {{ file.name }}
        </label>
        <label v-else class="custom-load-team-logo" for="load-logo-img"
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
      <div class="create-team-item dropdown">
        <small>Выберите игроков из списка друзей</small>
        <button @click="open = !open">Выберите игроков</button>
        <ul
          class="create-team-dropdown"
          v-if="open && user.friends.accepted.length"
        >
          <li v-for="item in user.friends.accepted" :key="item.nickname">
            <input
              type="checkbox"
              :value="item.user_id"
              :id="`user${item.user_id}`"
              v-model="teamUsers"
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
      <div class="create-team-item">
        <button
          :disabled="!file || !teamName.length || isLoading"
          @click="createTeam"
        >
          <span class="load-spinner" v-if="isLoading"></span>
          <span v-else>Создать команду</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CreateTeamPopup",
  data() {
    return {
      open: false,
      teamUsers: [],
      file: null,
      teamName: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      newTeam: "usersAndTeams/CREATE_TEAM",
    }),
    setLogo() {
      this.file = this.$refs.file.files[0];
    },
    createTeam() {
      this.isLoading = true;
      let teamData = {
        admin: this.user.user.ID,
        name: this.teamName,
        users: this.teamUsers.join(","),
        logo: this.file,
      };

      let form2 = new FormData();
      for (var field in teamData) {
        form2.append(field, teamData[field]);
      }

      this.newTeam(form2).then(() => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/getUserInfo",
    }),
  },
};
</script>

<style scoped>
.create-team {
  min-width: 500px;
}

.create-team h3 {
  text-align: center;
  margin-bottom: 30px;
}

.create-team-item:not(:last-child) {
  margin-bottom: 30px;
}

.create-team-item small {
  display: block;
  text-align: center;
  margin-bottom: 5px;
}

.create-team-item input {
  margin-bottom: 0;
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
  margin-bottom: 60px;
}

.create-team-item button {
  background-color: var(--blue);
}

.create-team-item button:disabled {
  opacity: 0.7;
}

.custom-load-team-logo {
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
  max-height: 200px;
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

@media (max-width: 767px) {
  .create-team {
    min-width: unset;
    width: 100%;
  }
}
</style>