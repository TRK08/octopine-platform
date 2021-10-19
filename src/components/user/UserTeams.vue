<template>
  <section class="user-teams">
    <h2>Друзья</h2>
    <div class="user-teams__items">
      <div class="user-teams__item" v-for="item in teams" :key="item.nickname">
        <div class="user-teams__avatar">
          <img src="" alt="" />
        </div>
        <div class="user-teams__nickname">{{ item.name }}</div>
      </div>
    </div>
    <div class="user-teams__show-all">Все команды</div>
  </section>
</template>

<script>
export default {
  name: "UserTeams",
  data() {
    return {
      teams: [
        {
          img: "",
          name: "team1",
        },
        {
          img: "",
          name: "team2",
        },
      ],
    };
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
}

.user-teams__avatar {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background-color: var(--grey);
  margin-right: 30%;
}

.user-teams__item:not(:last-child) {
  margin-bottom: 30px;
}

.user-teams__show-all {
  margin-top: 15px;
}
</style>