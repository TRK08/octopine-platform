<template>
  <div class="search-friends">
    <h3>Поиск друзей</h3>
    <div class="search-friends__block">
      <input placeholder="Ник" type="text" v-model="search" />
      <button @click="sendSearch(search)">Поиск</button>
    </div>
    <div class="search-friends-result">
      <router-link
        tag="div"
        :to="`user/${item.nickname}`"
        class="search-friends__item"
        v-for="item in searchResult"
        :key="item.ID"
      >
        <div
          v-if="item.avatar"
          class="search-friends__avatar"
          :style="{
            background: 'url(' + item.avatar + ') no-repeat ',
            'background-size': 'contain',
          }"
        ></div>
        <div v-else class="search-friends__avatar empty"></div>

        <div class="search-friends__nickname">{{ item.nickname }}</div>
        <div class="search-friends__add" @click.stop="addFriend(item.ID)">
          <svg class="search-friends__add-icon" viewBox="0 -10 431 468">
            <use xlink:href="../../assets/img/add-friend.svg#add-friend"></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchFriendsPopup",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions({
      sendSearch: "usersAndTeams/LOAD_SEARCH_RESULT",
      addFriends: "usersAndTeams/ADD_FRIEND",
    }),
    addFriend(id) {
      this.addFriends({ myID: this.user.user_id, userID: id });
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "usersAndTeams/getSearchResult",
      user: "auth/getUser",
    }),
  },
};
</script>

<style scoped>
.search-friends {
  text-align: center;
  min-width: 500px;
}

.search-friends__block {
  margin: 30px 0;
}

.search-friends__block button {
  background-color: var(--blue);
}

.search-friends__item {
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

.search-friends__item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.search-friends__avatar {
  width: 75px;
  height: 75px;
}

.search-friends__avatar.empty {
  border-radius: 100%;
  background-color: var(--grey);
}

.search-friends__item:not(:last-child) {
  margin-bottom: 30px;
}

.search-friends__add {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.search-friends__add-icon {
  width: 40px;
  height: 40px;
  fill: var(--grey);
  transition: all 0.5s ease;
}

.search-friends__add-icon:hover {
  fill: var(--red);
  transition: all 0.5s ease;
}
</style>