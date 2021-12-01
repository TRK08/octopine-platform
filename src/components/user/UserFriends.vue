<template>
  <section class="user-friends" v-if="friends">
    <h2>Друзья</h2>
    <div class="user-friends__items" v-if="friends.accepted">
      <router-link
        tag="div"
        :to="`/user/${item.nickname}`"
        class="user-friends__item"
        v-for="item in friends.accepted"
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
      </router-link>
    </div>
    <div
      v-if="friends.length > 3"
      class="user-friends__show-all"
      @click="setPopup({ mode: 'friends', data: friends.accepted })"
    >
      Все друзья
    </div>
    <button
      v-if="this.$route.path === '/cabinet'"
      @click="searchFriends"
      class="user-friends__add-friend"
    >
      Добавить друзей
    </button>
    <button
      v-if="this.$route.path === '/cabinet' && friends.not_accepted.length"
      @click="setPopup({ mode: 'new-friends', data: friends.not_accepted })"
      class="user-friends__not-accepted"
    >
      Заявки в друзья
    </button>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserFriends",
  props: {
    friends: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      setPopup: "popup/GET_POPUP_MODE",
    }),
    searchFriends() {
      this.setPopup({ mode: "searchFriends" });
    },
  },
  computed: {},
};
</script>

<style scoped>
.user-friends {
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.user-friends h2 {
  margin-bottom: 30px;
}

.user-friends__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.user-friends__item {
  padding: 15px;
  background-color: var(--bg);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
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
  margin-right: 10%;
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

.user-friends__show-all {
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.user-friends__show-all:hover {
  color: var(--blue);
  transition: all 0.5s ease;
}

.user-friends__add-friend {
  margin-top: 30px;
  background-color: var(--blue);
}

.user-friends__not-accepted {
  background-color: var(--red);
  margin-top: 10px;
}
</style>