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
            <a href="tel:+79166910385" class="footer__contacts-phone"
              >+7(916)-691-03-85</a
            >
            <a href="mailto:Andrewyn97@gmail.com" class="footer__contacts-email"
              >Andrewyn97@gmail.com</a
            >
            <div class="footer__contacts-social">
              <a href=""><img src="../../assets/img/instagram.svg" alt="" /></a>
              <a href=""><img src="../../assets/img/vk.svg" alt="" /></a>
              <a href=""><img src="../../assets/img/instagram.svg" alt="" /></a>
              <a href=""><img src="../../assets/img/vk.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="footer__bottom-wrap">
          <div class="footer__bottom-policy">
            <a href="">Пользовательское соглашение</a>
            <a href="">Конфиденциальность</a>
          </div>
          <div class="footer__bottom-rights">
            <img src="../../assets/img/copyright.svg" alt="" />2021 Все права
            защищены
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
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

.footer__bottom-rights {
  display: flex;
  align-items: center;
}

.footer__bottom-rights img {
  margin-right: 5px;
}

.footer__bottom-policy a {
  color: var(--grey);
  transition: all 0.5s ease;
}

.footer__bottom-policy a:hover {
  color: var(--white);
  transition: all 0.5s ease;
}

.footer__bottom-policy a:first-child {
  margin-right: 30px;
}
</style>