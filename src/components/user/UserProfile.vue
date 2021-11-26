<template>
  <section class="user-profile" v-if="user">
    <div
      v-if="user.avatar"
      class="user-profile-avatar"
      :style="{
        background: 'url(' + user.avatar + ') no-repeat ',
        'background-size': 'contain',
      }"
    ></div>
    <div v-else class="user-profile-avatar empty"></div>
    <!-- <div class="user-profile__status">
      <span class="user-profile__status-text">Онлайн</span>
      <span class="user-profile__status-circle"></span>
    </div> -->
    <div class="user-profile__nickname">{{ user.nickname }}</div>
    <!-- <div class="user-profile__info">Санкт-Петербург, 25 лет</div> -->
    <button
      v-if="myProfile"
      @click="addFriend(user.ID)"
      class="custom-btn user-profile__add-friend"
    >
      Добавить в друзья
    </button>
    <!-- <button class="custom-btn user-profile__new-message">
      Отправить сообщение
    </button> -->
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      myProfile: "auth/getUserInfo",
    }),
  },
  methods: {
    ...mapActions({
      setNotify: "notify/ADD_NOTIFICATIONS",
    }),
    addFriend(id) {
      this.$store.dispatch("usersAndTeams/ADD_FRIEND", {
        myID: this.myProfile.user.ID,
        userID: id,
      });
    },
  },
};
</script>

<style scoped>
.user-profile {
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.user-profile-avatar {
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  background-size: contain !important;
}

.user-profile-avatar.empty {
  background-color: var(--grey);
  border-radius: 100%;
}

.user-profile__status {
  margin: 15px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey);
  font-weight: 400;
}

.user-profile__status-circle {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #55a847;
  margin-left: 10px;
}

.user-profile__nickname {
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 15px;
}

.user-profile__info {
  color: var(--grey);
  margin-bottom: 15px;
}

.user-profile__add-friend {
  background-color: var(--red);
  margin-bottom: 15px;
}

.user-profile__new-message {
  background-color: var(--bg);
}

.user-profile button {
  max-width: 360px;
}
</style>