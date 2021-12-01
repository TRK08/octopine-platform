<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer-logo">
          <img src="../../assets/img/octopus.png" alt="" />
        </div>
        <div class="footer__navigation">
          <h2>Навигация</h2>
          <ul class="footer__navigation-list">
            <router-link
              tag="li"
              :to="item.link"
              class="footer__navigation-item"
              v-for="item in navs"
              :key="item.link"
            >
              {{ item.title }}
            </router-link>
          </ul>
        </div>
        <div class="footer__contacts">
          <h2>Контакты</h2>
          <div class="footer__contacts-block">
            <a :href="`tel:${contacts.phone}`" class="footer__contacts-phone">{{
              contacts.phone
            }}</a>
            <a :href="`mailto:${contacts.email}`" class="footer__contacts-email"
              >{{ contacts.email }}
            </a>
            <div class="footer__contacts-social">
              <a :href="contacts.whatsapp" target="_blank"
                ><img src="../../assets/img/whatsapp.svg" alt=""
              /></a>
              <a :href="contacts.telegram" target="_blank"
                ><img src="../../assets/img/telegram.svg" alt=""
              /></a>
              <a :href="contacts.instagram" target="_blank"
                ><img src="../../assets/img/instagram.svg" alt=""
              /></a>
              <a :href="contacts.discord" target="_blank"
                ><img src="../../assets/img/discord.svg" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__bottom-wrap">
          <div class="footer__bottom-info">
            <span>ИП Самодаев Андрей Николаевич.</span>
            <span>ИНН 773579911217.</span>
            <span
              >Юридический адрес: 14482, Москва, Зеленоград, корп. 118.</span
            >
            <a href="tel:8-916-691-0384">Тел: 8-916-691-0384</a>
          </div>
          <div class="footer__bottom-links">
            <router-link tag="a" to="/payment-return"
              >Оплата и возврат</router-link
            >
            <a
              href="https://octopine.pro/wp-content/themes/octopine-pro/assets/pdf/%D0%A3%D0%A1%D0%9B%D0%9E%D0%92%D0%98%D0%AF.pdf"
              target="_blank"
              >Пользовательское соглашение</a
            >
            <a
              href="https://octopine.pro/wp-content/themes/octopine-pro/assets/pdf/%D0%9F%D0%9E%D0%9B%D0%98%D0%A2%D0%98%D0%9A%D0%90%20%D0%9A%D0%9E%D0%9D%D0%A4%D0%98%D0%94%D0%95%D0%9D%D0%A6%D0%98%D0%90%D0%9B%D0%AC%D0%9D%D0%9E%D0%A1%D0%A2%D0%98.pdf"
              target="_blank"
              >Политика конфиденциальности</a
            >
            <div class="footer__bottom-rights">
              <img src="../../assets/img/copyright.svg" alt="" />2021 Все права
              защищены
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      navs: [
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
  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
  created() {
    this.$store.dispatch("info/loadContacts");
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-image: -webkit-linear-gradient(
    145deg,
    var(--dark) 51%,
    var(--blue) 49%
  );
}

.footer-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  background-color: var(--bg);
  border-radius: 100%;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo img {
  animation: logoMotion 3s infinite;
}

@keyframes logoMotion {
  from {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
  }
}

.footer__body {
  position: relative;
  height: 380px;
  padding: 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.footer__body h2 {
  margin-bottom: 30px;
}

.footer__navigation-item {
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
}

.footer__navigation-item:not(:last-child) {
  margin-bottom: 10px;
}

.footer__contacts {
  text-align: right;
}

.footer__contacts-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer__contacts-block a {
  margin-bottom: 10px;
  color: var(--white);
  font-weight: 400;
}

.footer__contacts-social {
  margin-top: 15px;
}

.footer__contacts-social a {
  opacity: 0.5;
  transition: all 0.5s ease;
}

.footer__contacts-social a:hover {
  opacity: 1;
  transition: all 0.5s ease;
}

.footer__contacts-social a:not(:last-child) {
  margin-right: 15px;
}

.footer__bottom {
  padding: 40px 0;
  background-color: var(--bg);
  color: var(--grey);
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
}

.footer__bottom .footer__bottom-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer__bottom-info {
  display: flex;
  flex-direction: column;
}

.footer__bottom-links {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
}

.footer__bottom-rights {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.footer__bottom-links img {
  margin-right: 5px;
}

.footer__bottom-links a,
.footer__bottom-info a {
  color: var(--white);
  transition: all 0.5s ease;
}

.footer__bottom-links a:hover,
.footer__bottom-info a:hover {
  color: var(--white);
  transition: all 0.5s ease;
}

@media (max-width: 991px) {
  .footer {
    width: 100%;
    background-image: -webkit-linear-gradient(
      155deg,
      var(--dark) 51%,
      var(--blue) 49%
    );
  }

  .footer__body {
    height: 300px;
  }

  .footer-logo {
    width: 200px;
    height: 200px;
  }

  .footer-logo img {
    width: 80%;
  }
}

@media (max-width: 767px) {
  .footer {
    background-image: -webkit-linear-gradient(
      180deg,
      var(--dark) 50%,
      var(--blue) 50%
    );
  }

  .footer__body {
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    position: initial;
    transform: none;
  }

  .footer__navigation {
    margin: 30px 0;
  }

  .footer__navigation,
  .footer__contacts {
    text-align: center;
  }

  .footer__contacts-block {
    align-items: center;
  }

  .footer__bottom-wrap {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .footer__bottom-links {
    margin-top: 15px;
    align-items: center;
  }

  .footer__bottom-policy a {
    display: block;
    margin: 0 0 10px 0 !important;
  }
}
</style>