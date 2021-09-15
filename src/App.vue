<template>
  <div id="app">
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

export default {
  components: { Header, Footer },
};
</script>



<style>
</style>





