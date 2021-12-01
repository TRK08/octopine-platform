<template>
  <section class="home-slider" v-if="slides">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <swiper
            class="swiper-container gallery-top"
            :options="swiperOptionTop"
            ref="swiperTop"
          >
            <swiper-slide
              class="slides"
              v-for="(slide, index) in slides"
              :key="index"
            >
              <div
                class="slide-box slide-box-left-slider"
                :style="{
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
                    slide.image +
                    ') no-repeat ',
                  'background-size': 'cover',
                }"
              >
                <h2 data-swiper-parallax="-700" v-html="slide.title"></h2>
                <p v-html="slide.text"></p>
                <router-link
                  tag="button"
                  :to="routerLink(slide.button.link)"
                  v-if="routerLink(slide.button.link)"
                >
                  {{ slide.button.text }}
                  <svg class="white-arrow arrow">
                    <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
                  </svg>
                </router-link>
                <a
                  class="slider-link"
                  v-else-if="hrefLink(slide.button.link)"
                  target="_blank"
                  :href="hrefLink(slide.button.link)"
                  >{{ slide.button.text }}
                  <svg class="white-arrow arrow">
                    <use
                      xlink:href="../../assets/img/sprite.svg#arrow"
                    ></use></svg
                ></a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="col-md-4">
          <swiper
            class="swiper gallery-Right"
            :options="swiperOptionRight"
            ref="swiperRight"
          >
            <swiper-slide
              class="swiper-slider-right"
              v-for="(slide, i) in slides"
              :key="i"
            >
              <h2 v-html="slide.title"></h2>
            </swiper-slide>
          </swiper>
        </div>
        <div class="slider-nav">
          <div class="prevBtn">
            <svg class="white-arrow arrow">
              <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
            </svg>
          </div>
          <div class="nextBtn">
            <svg class="white-arrow arrow">
              <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="slider__social-block">
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeSlider",
  data() {
    return {
      swiperOptionTop: {
        slidesPerView: 1,
        loopedSlides: 25,
        speed: 800,
        loop: true,
        autoplay: {
          delay: 7000,
        },
        pauseOnMouseEnter: true,
        // allowTouchMove: true,
        breakpoint: {
          991: {
            allowTouchMove: false,
            autoplay: false,
          },
        },
      },
      swiperOptionRight: {
        slideToClickedSlide: true,
        slidesPerView: 2,
        loopedSlides: 25,
        speed: 800,
        loop: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        },
        breakpoints: {},
      },
    };
  },
  methods: {
    routerLink(item) {
      if (item.includes("octopine.pro")) {
        return "/" + item.split("/")[3];
      }
    },
    hrefLink(item) {
      if (!item.includes("octopine.pro")) {
        return item;
      }
    },
  },
  computed: {
    ...mapGetters({
      slides: "info/getMainSlides",
      contacts: "info/getContacts",
    }),
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperRight = this.$refs.swiperRight.$swiper;
      swiperTop.controller.control = swiperRight;
      swiperRight.controller.control = swiperTop;
    });
  },
  created() {
    this.$store.dispatch("info/loadMainSlides");
  },
};
</script>

<style scoped>
.home-slider {
  height: 400px;
  background: linear-gradient(to right, var(--bg) 65%, var(--blue) 35%);
  position: relative;
  margin-bottom: 100px;
  overflow: hidden;
}

.slides {
  height: 400px;
}

.home-slider .container-fluid {
  padding: 0;
}

.slider-link .arrow {
  transform: scale(-1);
  margin-left: 30px;
}

.slider-link {
  width: fit-content;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 30px;
  border-radius: 30px;
  color: var(--white);
}

.swiper-slider-right {
  background-color: var(--blue);
  height: 400px;
  box-shadow: -10px 0px 8px 0px rgba(34, 60, 80, 0.2) inset;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.swiper-slider-right h2 {
  transform: skewX(25deg) rotate(-65deg);
  white-space: nowrap;
  font-size: 25px;
  line-height: 30px;
}

.swiper-slider-right.swiper-slide-active {
  cursor: initial;
}

.slide-box {
  height: 400px;
  background-position: center;
  padding: 30px 30% 0 30px;
}

.slide-box h2 {
  margin-bottom: 30px;
}

.slide-box p {
  margin-bottom: 30px;
}

.slide-box button {
  width: fit-content;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.slide-box button .arrow {
  transform: scale(-1);
  margin-left: 30px;
}

.col-md-4 {
  padding-left: 0;
  position: absolute;
  left: 50%;
  transform: skewX(-25deg);
  z-index: 4;
  background-color: var(--bg);
  width: 30%;
}

.slider-nav {
  width: 170px;
  height: 50px;
  position: absolute;
  right: 130px;
  bottom: 25px;
  background-color: var(--dark);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.nextBtn .white-arrow {
  transform: scale(-1);
}

.slider__social-block {
  padding: 15px 30px;
  background-color: var(--dark);
  max-width: 230px;
  width: 100%;
  border-radius: 0 30px 0 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 3;
}

.slider__social-block a {
  opacity: 0.5;
  transition: all 0.5s ease;
}

.slider__social-block a:hover {
  opacity: 1;
  transition: all 0.5s ease;
}

@media (max-width: 1199px) {
  .slider-nav {
    right: 45px;
  }
}

@media (max-width: 991px) {
  .gallery-Right {
    display: none;
  }

  .home-slider {
    background: var(--bg);
  }

  .slider-nav {
    display: none;
  }

  .slide-box {
    padding: 30px;
  }
}

@media (max-width: 512px) {
  .home-slider,
  .slide-box,
  .gallery-top {
    height: 450px !important;
  }
}
</style>