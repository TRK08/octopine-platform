<template>
  <form class="feedback-form col-md-6">
    <h2>Свяжитесь с нами</h2>
    <form @submit.prevent="sendForm" action="">
      <input
        placeholder="Имя"
        type="text"
        class="input feedback-form__input"
        v-model="emailBody.cname"
      />
      <input
        placeholder="Email"
        type="text"
        class="input feedback-form__input"
        v-model="emailBody.cemail"
      />
      <input
        placeholder="Сообщение"
        type="text"
        class="input feedback-form__input"
        v-model="emailBody.cmessage"
      />
      <button type="submit">
        <span class="load-spinner" v-if="isLoading"></span>
        <div v-else>
          <span>Отправить</span>
          <svg class="white-arrow arrow">
            <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
          </svg>
        </div>
      </button>
    </form>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FeedbackForm",
  data() {
    return {
      isLoading: false,
      emailBody: {
        cname: "",
        cemail: "",
        cmessage: "",
      },
    };
  },
  methods: {
    ...mapActions({
      send: "auth/SEND_FORM_MESSAGE",
    }),
    sendForm() {
      this.isLoading = true;
      var form1 = new FormData();

      for (let field in this.emailBody) {
        form1.append(field, this.emailBody[field]);
      }

      this.send(form1).then(() => {
        this.isLoading = false;
        this.emailBody.cname = "";
        this.emailBody.cemail = "";
        this.emailBody.cmessage = "";
      });
    },
  },
};
</script>

<style scoped>
.feedback-form {
  text-align: center;
}
</style>