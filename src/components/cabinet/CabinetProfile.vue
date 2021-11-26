<template>
  <div class="profile" v-if="user">
    <masonry :gutter="30" :cols="{ default: 2, 991: 1 }">
      <div class="profile-info__wrap">
        <div
          v-if="user.user.avatar"
          class="profile-avatar"
          :style="{
            background: 'url(' + user.user.avatar + ') no-repeat ',
            'background-size': 'contain',
          }"
        ></div>
        <div v-else class="profile-avatar empty"></div>
        <div class="profile-info">
          <h3>{{ user.user.nickname }}</h3>
          <span> {{ user.user.description }} </span>
        </div>
      </div>
      <UserFriends :friends="user.friends" />
      <UserTeams :teams="user.teams" />
    </masonry>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserFriends from "../user/UserFriends.vue";
import UserTeams from "../user/UserTeams.vue";
export default {
  components: { UserFriends, UserTeams },
  name: "CabinetProfile",
  computed: {
    ...mapGetters({
      user: "auth/getUserInfo",
    }),
  },
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
  margin-bottom: 30px;
  background-position: center center !important;
}

.profile-avatar.empty {
  background-color: var(--grey);
  border-radius: 100%;
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