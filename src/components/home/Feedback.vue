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
@media (max-width: 1199px) {
  .feedback-form {
    padding: 50px;
  }
}

@media (max-width: 991px) {
  .feedback-zeus,
  .feedback-lightning {
    display: none;
  }

  .feedback-form {
    margin: -50px auto 0;
    max-width: 500px;
    z-index: 4;
  }
}

@media (max-width: 672px) {
  .feedback {
    margin-bottom: 200px;
  }

  .feedback-form {
    padding: 40px 35px;
  }
}
</style>