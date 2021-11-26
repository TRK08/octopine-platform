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
          <router-link tag="div" to="/search" class="header-search">
            <img src="../../assets/img/search.svg" alt="" />
          </router-link>
          <router-link tag="button" to="/auth" class="header-login">
            <img src="../../assets/img/cabinet.svg" alt="" />
            <span v-if="!user">Вход</span>
            <span v-else> {{ user.user_nicename }} </span>
          </router-link>
        </div>
        <div class="header-burger" @click="isOpen = !isOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="mobile-menu" v-show="isOpen" @click="isOpen = !isOpen">
      <div class="mobile-menu__wrap" @click.stop>
        <div class="close-menu" @click="isOpen = !isOpen">
          <img src="../../assets/img/plus.svg" alt="" />
        </div>
        <ul class="mobile-menu-list">
          <router-link
            class="mobile-menu-item"
            v-for="item in menu"
            :key="item.title"
            tag="li"
            :to="item.link"
          >
            {{ item.title }}
          </router-link>
        </ul>
        <div class="mobile-header-buttons">
          <router-link tag="div" to="/search" class="header-search">
            <span>Поиск</span>
            <img src="../../assets/img/search.svg" alt="" />
          </router-link>
          <router-link tag="button" to="/cabinet" class="header-login">
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
      isOpen: false,
      menu: [
        {
          title: "Турниры",
          link: "/tournaments",
        },
        {
          title: "Новости",
          link: "/news",
        },
        // {
        //   title: "Рейтинг",
        //   link: "/rating",
        // },
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
  watch: {
    $route(to, from) {
      this.isOpen = false;
      document.body.style.overflowY = "auto";
    },
    isOpen(val) {
      if (val) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
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

.header-menu-item:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.header-menu-item.router-link-active {
  background-color: var(--blue);
}

.header-burger {
  display: none;
  cursor: pointer;
}

.header-burger span {
  display: block;
  width: 40px;
  height: 4px;
  background-color: var(--white);
  border-radius: 30px;
}

.header-burger span:nth-child(2) {
  margin: 10px 0;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(10px);
  z-index: 100 !important;
}

.mobile-menu__wrap {
  padding: 40px;
  width: 400px;
  background-color: var(--dark);
}

.close-menu {
  margin-bottom: 50px;
}

.close-menu img {
  transform: rotate(45deg);
}

.mobile-menu-list {
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 29px;
}

.mobile-menu-list li {
  cursor: pointer;
}

.mobile-menu-list li:not(:last-child) {
  margin-bottom: 15px;
}

.mobile-header-buttons {
  display: flex;
  flex-direction: column;
}

.mobile-header-buttons > * {
  cursor: pointer;
}

.mobile-header-buttons .header-login {
  margin: 15px 0 0;
  width: fit-content;
}

@media (max-width: 991px) {
  .header-menu,
  .header-buttons {
    display: none;
  }

  .header-burger {
    display: block;
  }
}

@media (max-width: 512px) {
  .mobile-menu__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>