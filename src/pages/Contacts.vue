<template>
  <div>
    <Banner :bannerInfo="bannerInfo" />
    <ContactsInfo />
    <Feedback />
    <AboutHome />
  </div>
</template>

<script>
import ContactsInfo from "../components/contacts/ContactsInfo.vue";
import AboutHome from "../components/home/AboutHome.vue";
import Feedback from "../components/home/Feedback.vue";
import Banner from "../components/ui/Banner.vue";
export default {
  components: { Feedback, AboutHome, Banner, ContactsInfo },
  name: "Contacts",
  data() {
    return {
      bannerInfo: {
        // title: "Контакты",
        descr: "Будь всегда на связи с нами",
        img: require("../assets/img/news-banner.png"),
      },
    };
  },
};
</script>

<style scoped>
.contacts__wrap {
  margin-bottom: 200px;
}
</style>