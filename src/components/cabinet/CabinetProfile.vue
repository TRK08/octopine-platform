<template>
  <div class="profile">
    <masonry :gutter="30" :cols="{ default: 2, 991: 1 }">
      <div class="profile-info__wrap">
        <div class="profile-avatar"></div>
        <div class="profile-info">
          <h3>Nicename</h3>
          <span>Санкт-Петербург, 25 лет</span>
        </div>
      </div>
      <UserFriends />
      <UserTeams />
    </masonry>
  </div>
</template>

<script>
import UserFriends from "../user/UserFriends.vue";
import UserTeams from "../user/UserTeams.vue";
export default {
  components: { UserFriends, UserTeams },
  name: "CabinetProfile",
};
</script>

<style scoped>
.profile {
  border-radius: 30px;
}

.separator {
  display: block;
  width: 5px;
  height: 250px;
  background-color: var(--bg);
}

.profile-info__wrap {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  height: fit-content;
  margin-bottom: 30px;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  background-color: var(--grey);
  border-radius: 100%;
  margin-bottom: 30px;
}

.profile-info h3 {
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 15px;
}

.profile-info span {
  color: var(--grey);
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
}

.profile-teams__wrap {
  padding: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: var(--dark);
  border-radius: 30px;
}
</style>