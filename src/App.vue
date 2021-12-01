<template>
  <div id="app">
    <!-- <Preloader :activate="preload" /> -->
    <PushNotify />

    <Header />

    <vue-page-transition name="overlay-right-full">
      <router-view />
    </vue-page-transition>

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
import Preloader from "./components/ui/Preloader.vue";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Footer,
    PushNotify,
    MainPopup,
    Preloader,
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("popup/GET_POPUP_MODE", { mode: null });
    },
  },
  computed: {
    ...mapState("auth", ["preload"]),
  },
  created() {
    this.$store.dispatch("forum/loadInfo");
    this.$store.dispatch("news/loadNews");
    this.$store.dispatch("tournaments/LOAD_TOURNAMENTS");
  },
};
</script>


<style>
:root {
  --overlay-bg: var(--dark) !important;
  --transition-duration: 0.5s;
}

.overlay-top,
.overlay-right,
.overlay-bottom,
.overlay-left {
  z-index: 1000 !important;
}
</style>