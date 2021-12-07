<template>
  <div class="search-friends">
    <h3>Поиск друзей</h3>
    <div class="search-friends__block">
      <input placeholder="Ник" type="text" v-model="search" />
      <button @click="searchLive">
        <span class="load-spinner" v-if="isLoading"></span>
        <span v-else>Поиск</span>
      </button>
    </div>
    <div class="search-friends-result">
      <router-link
        tag="div"
        :to="`user/${item.nickname}`"
        class="search-friends__item"
        v-for="item in result"
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
      isLoading: false,
      result: [],
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
    searchLive() {
      this.isLoading = true;
      this.sendSearch(this.search).then(() => {
        this.isLoading = false;
      });
    },
  },
  watch: {
    searchResult() {
      let res = [];
      if (this.searchResult) {
        this.searchResult.map((item) => {
          if (this.user.user_id != item.ID) {
            res.push(item);
          }
        });
      }

      this.userInfo.friends.not_accepted.forEach((item) => {
        res.map((user, index) => {
          if (user.ID == item.user_id) {
            res.splice(index, 1);
          }
        });
      });

      this.result = res;
    },
  },
  computed: {
    ...mapGetters({
      searchResult: "usersAndTeams/getSearchResult",
      user: "auth/getUser",
      userInfo: "auth/getUserInfo",
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
  min-width: 75px;
  min-height: 75px;
  border-radius: 100%;
  background-position: center center !important;
  background-size: cover !important;
}

.search-friends__avatar.empty {
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

@media (max-width: 512px) {
  .search-friends {
    min-width: 100%;
  }
}
</style>