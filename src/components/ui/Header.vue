<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <router-link to="/" tag="div" class="logo">
          <img src="../../assets/img/octopus.png" alt="" />
        </router-link>
        <div class="header-menu">
          <ul class="header-menu-list">
            <router-link
              class="header-menu-item"
              v-for="item in menu"
              :key="item.title"
              tag="li"
              :to="item.link"
            >
              {{ item.title }}
            </router-link>
          </ul>
        </div>
        <div class="header-buttons">
          <div class="header-search">
            <img src="../../assets/img/search.svg" alt="" />
          </div>
          <router-link tag="button" to="/auth" class="header-login">
            <img src="../../assets/img/cabinet.svg" alt="" />
            <span v-if="!user">Вход</span>
            <span v-else> {{ user.user_nicename }} </span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          title: "Турниры",
          link: "/tournaments",
        },
        {
          title: "Новости",
          link: "/news",
        },
        {
          title: "Рейтинг",
          link: "/rating",
        },
        {
          title: "Форум",
          link: "/forum",
        },
        {
          title: "Контакты",
          link: "/contacts",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/getUser",
    }),
  },
};
</script>	

<style scoped>
.logo {
  width: 70px;
  background-color: var(--bg);
  border-radius: 100%;
  border: 1px solid var(--white);
  padding: 5px;
}

.logo img {
  width: 100%;
}
</style>