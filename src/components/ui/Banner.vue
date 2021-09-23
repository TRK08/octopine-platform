<template>
  <div class="banner">
    <div
      class="banner-img"
      :style="{
        background: 'url(' + bannerInfo.img + ') no-repeat ',
        'background-size': 'cover',
      }"
    >
      <div class="container">
        <h2 class="banner-title" v-if="bannerInfo.title">
          {{ bannerInfo.title }}
        </h2>
        <p class="banner-text" v-if="bannerInfo.descr">
          {{ bannerInfo.descr }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    bannerInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: 400px;
  background-position: center center !important;
  filter: drop-shadow(0px 15px 15px rgba(0, 0, 0, 0.3));
  box-shadow: inset 0px 4px 0px 500px rgba(0, 0, 0, 0.5);
}

.banner-img .container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.banner-title {
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 30px;
  font-weight: 500;
}

.banner-text {
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
}
</style>