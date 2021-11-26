<template>
  <div class="reset-pass">
    <h3>На вашу почту прийдет письмо с ссылкой на восстановление пароля</h3>
    <input type="text" placeholder="введите почту" v-model="email" />
    <button @click="sendMail" :disabled="!email.length">
      <span class="load-spinner" v-if="isLoading"></span>
      <span v-else>Отправить</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ResetPass",
  data() {
    return {
      isLoading: false,
      email: "",
    };
  },
  methods: {
    ...mapActions({
      resetPass: "auth/RESET_PASSWORD",
    }),
    sendMail() {
      this.isLoading = true;
      this.resetPass(this.email).then(() => {
        this.isLoading = false;
        this.email = "";
      });
    },
  },
};
</script>

<style scoped>
.reset-pass {
  max-width: 500px;
  text-align: center;
}

.reset-pass h3 {
  margin-bottom: 30px;
}

.reset-pass button {
  background-color: var(--blue);
}

.reset-pass button:disabled {
  opacity: 0.7;
}
</style>