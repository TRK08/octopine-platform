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
    <div class="profile-info">
      <h3>{{ user.nickname }}</h3>
      <span> {{ user.description }} </span>
      <div
        class="profile-info__socials"
        v-if="user.contacts && user.contacts.is_shown"
      >
        <span
          ><img src="../../assets/img/telegram.svg" alt="" />
          {{ user.contacts.telegram }}
        </span>
        <span
          ><img src="../../assets/img/whatsapp.svg" alt="" />
          {{ user.contacts.whatsapp }}
        </span>
      </div>
    </div>
    <button
      v-if="myProfile && !friendAddBtn"
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
    friendAddBtn() {
      let inFriends = false;
      if (this.myProfile) {
        this.myProfile.friends.accepted.map((item) => {
          if (item.nickname === this.user.nickname) {
            inFriends = true;
          }
        });
      }
      return inFriends;
    },
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
  background-size: cover !important;
  background-position: center center !important;
  border-radius: 100%;
}

.user-profile-avatar.empty {
  background-color: var(--grey);
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
  margin: 15px 0;
}

.user-profile__new-message {
  background-color: var(--bg);
}

.user-profile button {
  max-width: 360px;
}

.profile-info {
  text-align: center;
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

.profile-info__socials {
  margin-top: 15px;
}

.profile-info__socials span:first-child {
  margin-right: 20px;
}

.profile-info__socials span img {
  margin-right: 5px;
}

@media (max-width: 672px) {
  .profile-info__socials {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-info__socials span {
    margin: 10px 0 0 !important;
  }
}
</style>