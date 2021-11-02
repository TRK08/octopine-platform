<template>
  <div class="friends-popup">
    <h2>Друзья</h2>
    <div class="friends-popup__wrap">
      <div class="user-friends__item" v-for="item in info" :key="item.nickname">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FriendPopup",
  computed: {
    ...mapGetters({
      info: "popup/getPopupInfo",
    }),
  },
};
</script>

<style scoped>
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
}

.user-friends__avatar {
  width: 75px;
  height: 75px;
  margin-right: 30%;
}

.user-friends__avatar.empty {
  border-radius: 100%;
  background-color: var(--grey);
}

.user-friends__item:not(:last-child) {
  margin-bottom: 30px;
}
</style>