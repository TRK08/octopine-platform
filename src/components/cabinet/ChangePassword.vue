<template>
  <div class="change-password">
    <h2>Изменить пароль</h2>
    <small>Минимальная длина 6 символов</small>
    <div class="form-group" :class="{ 'form-group--error': $v.newPass.$error }">
      <input
        v-model.trim="$v.newPass.$model"
        type="password"
        placeholder="Новый пароль"
      />
    </div>
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.repeatPass.$error }"
    >
      <input
        v-model.trim="$v.repeatPass.$model"
        type="password"
        placeholder="Повторите пароль"
      />
    </div>
    <button :disabled="this.$v.$invalid" @click="changePassword">
      <span class="load-spinner" v-if="isLoading"></span>
      <span v-else>Изменить пароль</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "ChangePassword",
  data() {
    return {
      newPass: "",
      repeatPass: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      changePass: "auth/CHANGE_CABINET_PASSWORD",
    }),
    async changePassword() {
      this.isLoading = true;
      await this.changePass(this.newPass).then(() => {
        this.isLoading = false;
        this.newPass = "";
        this.repeatPass = "";
      });
    },
  },
  validations: {
    newPass: {
      required,
      minLength: minLength(6),
    },
    repeatPass: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("newPass"),
    },
  },
};
</script>

<style scoped>
.change-password {
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.change-password h2 {
  margin-bottom: 30px;
}

.change-password small {
  display: block;
  margin-bottom: 15px;
}

.change-password button {
  background-color: var(--blue);
}

.change-password button:disabled {
  opacity: 0.7;
}

.form-group input {
  border: 3px solid transparent;
}

.form-group--error input {
  border: 3px solid var(--red);
}
</style>