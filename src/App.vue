<template>
  <div id="app">
    <PushNotify />
    <Header />

    <router-view />

    <Footer />

    <MainPopup />
  </div>
</template>

<script>
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import PushNotify from "./components/ui/PushNotify.vue";
import MainPopup from "./components/popup/MainPopup.vue";

export default {
  components: { Header, Footer, PushNotify, MainPopup },
  watch: {
    $route(to, from) {
      this.$store.dispatch("popup/GET_POPUP_MODE", { mode: null });
    },
  },
  created() {
    this.$store.dispatch("forum/loadInfo");
    this.$store.dispatch("news/loadNews");
    this.$store.dispatch("tournaments/LOAD_TOURNAMENTS");
  },
};
</script>
,
    MainPopup


<style>
</style>





