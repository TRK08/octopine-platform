<template>
  <div id="app">
    <PushNotify />
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import PushNotify from "./components/ui/PushNotify.vue";

export default {
  components: { Header, Footer, PushNotify },
};
</script>



<style>
</style>





