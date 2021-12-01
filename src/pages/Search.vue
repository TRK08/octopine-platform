<template>
  <div class="search">
    <div class="container">
      <div class="search__wrap">
        <h2>Поиск по сайту</h2>
        <div class="search-form">
          <input
            v-model="searchValue"
            type="text"
            placeholder="Поиск по сайту"
          />
          <button :disabled="!searchValue" @click="search(searchValue)">
            <span class="load-spinner" v-if="isLoading"></span>
            <span v-else>Найти</span>
          </button>
        </div>
        <div class="search-result" v-if="searchInfo">
          <h2>Результат поиска:</h2>
          <h3
            class="search-result__empty"
            v-if="
              !searchInfo.users.length &&
              !searchInfo.matches.length &&
              !searchInfo.forums.length &&
              !searchInfo.news.length
            "
          >
            По вашему запросу ничего не найдено
          </h3>
          <div class="search-items" v-if="searchInfo.users.length">
            <h3>Пользователи</h3>
            <div class="search-items__wrap">
              <router-link
                tag="div"
                :to="`/user/${item.nickname}`"
                class="search__item"
                v-for="item in searchInfo.users"
                :key="item.nickname"
              >
                <div
                  v-if="item.avatar"
                  class="search__avatar"
                  :style="{
                    background: 'url(' + item.avatar + ') no-repeat ',
                    'background-size': 'contain',
                  }"
                ></div>
                <div v-else class="search__avatar empty"></div>

                <div class="search__nickname">{{ item.nickname }}</div>
              </router-link>
            </div>
          </div>
          <div class="search-items" v-if="searchInfo.matches.length">
            <h3>Турниры</h3>
            <div class="search-items__wrap">
              <router-link
                tag="div"
                :to="`/tournaments/${item.slug}`"
                class="search__item"
                v-for="item in searchInfo.matches"
                :key="item.id"
              >
                <div
                  v-if="item.image"
                  class="search__avatar"
                  :style="{
                    background:
                      'url(' + item.image + ') no-repeat center center ',
                    'background-size': 'contain',
                  }"
                ></div>
                <div v-else class="search__avatar empty"></div>

                <div class="search__nickname">{{ item.name }}</div>
              </router-link>
            </div>
          </div>
          <div class="search-items" v-if="searchInfo.news.length">
            <h3>Новости</h3>
            <div class="search-items__wrap">
              <router-link
                tag="div"
                :to="`/news/${item.slug}`"
                class="search__item"
                v-for="item in searchInfo.news"
                :key="item.id"
              >
                <div
                  v-if="item.image"
                  class="search__avatar"
                  :style="{
                    background:
                      'url(' + item.image + ') no-repeat center center ',
                    'background-size': 'contain',
                  }"
                ></div>
                <div v-else class="search__avatar empty"></div>

                <div class="search__nickname">{{ item.title }}</div>
              </router-link>
            </div>
          </div>
          <div class="search-items" v-if="searchInfo.forums.length">
            <h3>Форум</h3>
            <div class="search-items__wrap">
              <router-link
                tag="div"
                :to="`/forum/${item.slug}`"
                class="search__item"
                v-for="item in searchInfo.forums"
                :key="item.id"
              >
                <div
                  v-if="item.image"
                  class="search__avatar"
                  :style="{
                    background:
                      'url(' + item.image + ') no-repeat center center ',
                    'background-size': 'contain',
                  }"
                ></div>
                <div v-else class="search__avatar empty"></div>

                <div class="search__nickname">{{ item.name }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchPage",
  data() {
    return {
      searchValue: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      sendSearch: "info/searchAllInfo",
    }),
    search(val) {
      this.isLoading = true;
      this.sendSearch(val).then(() => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    ...mapGetters({
      searchInfo: "info/getSearchInfo",
    }),
  },
};
</script>

<style scoped>
.search {
  padding: 100px 0;
  text-align: center;
}

.search__wrap {
  background-color: var(--dark);
  padding: 30px;
  border-radius: 30px;
}

.search-form {
  max-width: 600px;
  margin: 30px auto;
}

.search-form button {
  background-color: var(--blue);
}

.search-result__empty {
  margin-top: 30px;
}

.search-items {
  margin: 50px 0;
}

.search-items__wrap {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.search-items h3 {
  margin-bottom: 30px;
}

.search__item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.search__item {
  cursor: pointer;
  padding: 15px;
  background-color: var(--bg);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  overflow: hidden;
}

.search__avatar {
  min-width: 75px;
  min-height: 75px;
  width: 75px;
  height: 75px;
  margin-right: 30px;
  border-radius: 100%;
  background-position: center center !important;
  background-size: cover !important;
}

.search__avatar.empty {
  background-color: var(--grey);
}

.search__nickname {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (max-width: 991px) {
  .search-items__wrap {
    grid-template-columns: 1fr;
  }

  .search__avatar {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    margin-right: 30px;
  }
}
</style>