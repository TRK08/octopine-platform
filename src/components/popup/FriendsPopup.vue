<template>
  <div class="friends-popup">
    <h2 v-if="mode === 'friends'">Друзья</h2>
    <h2 v-if="mode === 'new-friends'">Заявки в друзья</h2>
    <div class="friends-popup__wrap">
      <router-link
        tag="div"
        :to="`/user/${item.nickname}`"
        class="user-friends__item"
        v-for="item in info"
        :key="item.nickname"
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
        <div></div>
        <div class="new-friends__add" v-if="mode === 'new-friends'">
          <svg
            @click.stop="acceptFriend(item.user_id, true)"
            class="new-friends__add-icon"
            viewBox="0 0 122 122"
          >
            <use
              xlink:href="../../assets/img/add-friend.svg#accept-friend"
            ></use>
          </svg>
          <svg
            @click.stop="acceptFriend(item.user_id, false)"
            class="new-friends__add-icon"
            viewBox="0 0 512 512"
          >
            <use
              xlink:href="../../assets/img/add-friend.svg#decline-friend"
            ></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FriendPopup",
  methods: {
    ...mapActions({
      acceptedFriend: "usersAndTeams/ACCEPTED_FRIEND",
      setPopup: "popup/GET_POPUP_MODE",
    }),
    acceptFriend(id, status) {
      let data = {
        user: this.user.user_id,
        user_to_add: id,
        result: status,
      };
      this.acceptedFriend(data).then(() => {
        this.info.forEach((item, i) => {
          if (item.user_id === id) {
            this.info.splice(i, 1);
          }
        });
        if (!this.info.length) {
          this.setPopup({ mode: null });
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      info: "popup/getPopupInfo",
      mode: "popup/getPopupMode",
      user: "auth/getUser",
    }),
  },
};
</script>

<style scoped>
.friends-popup {
  min-width: 500px;
}
.friends-popup h2 {
  text-align: center;
  margin-bottom: 30px;
}

.user-friends__item {
  padding: 15px;
  background-color: var(--bg);
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

.new-friends__add {
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.new-friends__add-icon {
  min-width: 25px;
  min-height: 25px;
  width: 25px;
  height: 25px;
  fill: var(--white);
  margin-right: 5px;
}

.new-friends__add-icon:hover {
  fill: var(--red);
}

@media (max-width: 672px) {
  .friends-popup {
    min-width: 100%;
  }
}
</style>