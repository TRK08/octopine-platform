<template>
  <form class="feedback-form col-md-6">
    <h2>Свяжитесь с нами</h2>
    <input placeholder="Имя" type="text" class="input feedback-form__input" />
    <input placeholder="Email" type="text" class="input feedback-form__input" />
    <input
      placeholder="Сообщение"
      type="text"
      class="input feedback-form__input"
    />
    <button type="submit">
      <span>Отправить</span>
      <svg class="white-arrow arrow">
        <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "FeedbackForm",
};
</script>

<style scoped>
</style>