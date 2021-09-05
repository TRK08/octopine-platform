<template>
  <div id="app">
    <!-- <transition name="slide" mode="out-in">
        <div class="preloader" v-if="preloader">
          <img src="./assets/img/minilogo.svg" alt="">
        </div>
      </transition> -->

    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";

export default {};
</script>



<style>
/* .slide-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
  animation: slide-out 0.3s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0px);
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
  opacity: 1;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>





