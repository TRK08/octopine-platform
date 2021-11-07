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
    }),
  },
  computed: {
    ...mapGetters({
      searchResult: "usersAndTeams/getSearchResult",
    }),
  },
};
</script>

<style scoped>
.search-friends {
  text-align: center;
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
}

.search-friends__avatar {
  width: 75px;
  height: 75px;
  margin-right: 50px;
}

.search-friends__avatar.empty {
  border-radius: 100%;
  background-color: var(--grey);
}

.search-friends__item:not(:last-child) {
  margin-bottom: 30px;
}
</style>