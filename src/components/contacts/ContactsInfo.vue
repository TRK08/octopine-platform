<template>
  <div class="contacts">
    <div class="container">
      <div class="contacts__wrap">
        <div class="contacts-social">
          <h3>Социальные сети</h3>
          <div class="contacts-social__block">
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
        <div class="contacts-info">
          <h3>Почта и телефон</h3>
          <a :href="`tel:${contacts.phone}`" class="footer__contacts-phone">{{
            contacts.phone
          }}</a>
          <a :href="`mailto:${contacts.email}`" class="footer__contacts-email"
            >{{ contacts.email }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContactsInfo",
  computed: {
    ...mapGetters({
      contacts: "info/getContacts",
    }),
  },
};
</script>

<style scoped>
.contacts {
  padding: 100px 0 200px;
}

.contacts__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 30px;
  text-align: center;
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
}

.contacts-social,
.contacts-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts-social a {
  opacity: 0.5;
  transition: all 0.5s ease;
  margin-right: 10px;
}

.contacts-social a:hover {
  opacity: 1;
  transition: all 0.5s ease;
}

.contacts-social h3,
.contacts-info h3 {
  margin-bottom: 30px;
}

.contacts-info a {
  color: var(--white);
  font-weight: 500;
  transition: all 0.5s ease;
}

.contacts-info a:last-child {
  margin-top: 10px;
}

.contacts-info a:hover {
  color: var(--blue);
  transition: all 0.5s ease;
}

@media (max-width: 768px) {
  .contacts__wrap {
    display: flex;
    flex-direction: column-reverse;
  }

  .contacts-info {
    margin-bottom: 30px;
  }
}
</style>