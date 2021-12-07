import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import VueTyperPlugin from 'vue-typer'
import VCalendar from 'v-calendar';
import VueMasonry from 'vue-masonry-css'
import VuePageTransition from 'vue-page-transition'
// import VueLazyload from 'vue-lazyload'


import 'swiper/css/swiper.css'

Vue.use(VueTyperPlugin)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))
Vue.use(VueAwesomeSwiper)
Vue.use(VueScrollTo)
Vue.use(VueTheMask)
Vue.use(VCalendar)
Vue.use(VueMasonry)
Vue.use(VuePageTransition)

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '/wp-content/uploads/2021/05/zagl.jpg',
//   loading: '/wp-content/uploads/2021/05/zagl.jpg',
//   attempt: 1,
//   listenEvents: [ 'scroll' ]
// })

const user = JSON.parse(localStorage.getItem("user"))
store.dispatch("auth/VALIDATE", user);


router.beforeEach((to, from, next) => {
  if (user) {
    if (to.params.id === user.user_nicename) {
      next('/cabinet')
    } else {
      next()
    }
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   store.dispatch('auth/SET_PRELOAD')
//   setTimeout(function () {
//     next()
//   }, 200);
//   setTimeout(function () {
//     store.dispatch('auth/SET_PRELOAD')
//   }, 2000);
// })



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
