<template>
  <section class="home-slider">
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
                <button>
                  {{ slide.button.text }}
                  <svg class="white-arrow arrow">
                    <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
                  </svg>
                </button>
                <div class="slider__social-block">
                  <a href=""
                    ><img src="../../assets/img/instagram.svg" alt=""
                  /></a>
                  <a href=""><img src="../../assets/img/vk.svg" alt="" /></a>
                  <a href=""
                    ><img src="../../assets/img/instagram.svg" alt=""
                  /></a>
                  <a href=""><img src="../../assets/img/vk.svg" alt="" /></a>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="col-md-4">
          <swiper
            class="swiper gallery-Right hidden-xs"
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
        // loopedSlides: 25,
        // loop: true,

        allowTouchMove: false,
      },
      swiperOptionRight: {
        slideToClickedSlide: true,
        // loopedSlides: 25,
        // loop: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 2,
          },
        },
      },
      // slides: [
      //   {
      //     image: require("../../assets/img/home-slider-1.png"),
      //     header: "TEST",
      //   },
      //   {
      //     image: require("../../assets/img/home-slider-1.png"),
      //     header: "TEST",
      //   },
      //   {
      //     image: require("../../assets/img/home-slider-1.png"),
      //     header: "TEST",
      //   },
      //   {
      //     image: require("../../assets/img/home-slider-1.png"),
      //     header: "TEST",
      //   },
      // ],
    };
  },
  computed: {
    ...mapGetters({
      slides: "info/getMainSlides",
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
  height: 500px;
  background: linear-gradient(to right, var(--bg) 65%, var(--blue) 35%);
  position: relative;
  margin-bottom: 100px;
}

.slides {
  height: 500px;
}

.home-slider .container-fluid {
  padding: 0;
}

.swiper-slider-right {
  background-color: var(--blue);
  height: 500px;
  box-shadow: -10px 0px 8px 0px rgba(34, 60, 80, 0.2) inset;
  position: relative;
}

.swiper-slider-right h2 {
  transform: skewX(25deg) rotate(-65deg);
  white-space: nowrap;
  width: 100%;
  position: absolute;
  top: 65%;
}

.slide-box {
  height: 500px;
  background-position: center;
  padding: 30px 180px 0 30px;
}

.slide-box h2 {
  margin-bottom: 30px;
}

.slide-box p {
  margin-bottom: 30px;
}

.slide-box button {
  max-width: 300px;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.slide-box button .arrow {
  transform: scale(-1);
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
}
</style>