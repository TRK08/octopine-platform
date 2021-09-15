<template>
  <section class="feedback">
    <div class="container">
      <div class="feedback__wrap">
        <FeedbackForm />
        <img class="feedback-zeus" src="../../assets/img/zeus.png" alt="" />
        <div
          class="feedback-lightning"
          :style="{
            background:
              'url(' +
              require('../../assets/img/lightning.png') +
              ') no-repeat ',
            'background-size': 'cover',
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import FeedbackForm from "../ui/FeedbackForm.vue";
export default {
  components: { FeedbackForm },
  name: "Feedback",
};
</script>

<style scoped>
</style>