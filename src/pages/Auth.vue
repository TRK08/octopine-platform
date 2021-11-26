<template>
  <div class="auth">
    <div class="container">
      <div class="auth-form">
        <div class="auth-form__header">
          <button
            class="auth-form__header-login"
            :class="{ active: enter }"
            @click="enter = true"
          >
            Вход
          </button>
          <button
            class="auth-form__header-registr"
            :class="{ active: !enter }"
            @click="enter = false"
          >
            Регистрация
          </button>
        </div>
        <form
          class="auth-form__body auth-form__body-log"
          v-if="enter"
          @submit.prevent="login"
        >
          <input placeholder="Email" v-model="emailLog" type="text" />
          <input placeholder="Пароль" v-model="passwordLog" type="password" />
          <button type="submit">
            <span class="load-spinner" v-if="isLoading"></span>
            <span v-else>Войти</span>
          </button>
          <a href="" @click.prevent="resetPassword">Забыли пароль?</a>
        </form>
        <form
          class="auth-form__body auth-form__body-reg"
          @submit.prevent="registration"
          v-else
        >
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.nameReg.$error }"
          >
            <input
              v-model.trim="$v.nameReg.$model"
              placeholder="Никнейм"
              type="text"
            />
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.emailReg.$error }"
          >
            <input
              v-model.trim="$v.emailReg.$model"
              placeholder="Email"
              type="text"
            />
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.passwordReg.$error }"
          >
            <input
              v-model.trim="$v.passwordReg.$model"
              placeholder="Пароль"
              type="password"
            />
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.passwordRegConfirm.$error }"
          >
            <input
              v-model.trim="$v.passwordRegConfirm.$model"
              placeholder="Повторите пароль"
              type="password"
            />
          </div>
          <Checkbox :options="options" @checked="isChecked" />
          <button
            :disabled="!(!this.$v.$invalid && checkedRules)"
            type="submit"
          >
            <span class="load-spinner" v-if="isLoadingReg"></span>
            <span v-else>Зарегистрироваться</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Checkbox from "../components/ui/Checkbox.vue";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  components: { Checkbox },
  name: "Auth",
  data() {
    return {
      enter: true,
      nameReg: "",
      emailReg: "",
      passwordReg: "",
      passwordRegConfirm: "",
      emailLog: "",
      passwordLog: "",
      checkedRules: "",
      isLoadingReg: false,
      isLoading: false,
      options: [
        {
          type: "rules",
          checked: false,
          text: "Соглашаюсь с пользовательским соглашением",
        },
      ],
    };
  },
  validations: {
    nameReg: {
      required,
      minLength: minLength(3),
    },
    emailReg: {
      required,
      email,
    },
    passwordReg: {
      required,
      minLength: minLength(6),
    },
    passwordRegConfirm: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("passwordReg"),
    },
  },
  methods: {
    ...mapActions({
      REGISTR: "auth/REGISTR",
      LOGIN: "auth/AUTH_REQUEST",
      addNotify: "notify/ADD_NOTIFICATIONS",
      setPopup: "popup/GET_POPUP_MODE",
    }),
    isChecked(arr) {
      this.checkedRules = arr[0].checked;
    },
    registration() {
      this.isLoadingReg = true;
      let form = {
        nickname: this.nameReg,
        email: this.emailReg,
        password: this.passwordReg,
      };

      this.REGISTR(form).then(() => {
        this.nameReg = "";
        this.emailReg = "";
        this.passwordReg = "";
        this.passwordRegConfirm = "";
        this.isLoadingReg = false;
      });
    },
    login() {
      this.isLoading = true;
      let form = {
        username: this.emailLog,
        password: this.passwordLog,
      };

      this.LOGIN(form).then(() => {
        this.isLoading = false;
        setTimeout(() => {
          this.$router.push("/cabinet");
        }, 1000);
      });
    },
    resetPassword() {
      this.setPopup({ mode: "reset-pass" });
    },
  },
};
</script>

<style scoped>
.auth {
  min-height: 110vh;
  padding: 100px 0;
  width: 100%;
  background-image: url("../assets/img/auth-bg.png");
  background-size: cover;
  background-position: center center;
}

.auth-form {
  max-width: 550px;
  border-radius: 30px;
  overflow: hidden;
  margin-left: auto;
  background-color: var(--bg);
}

.auth-form__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
}

.auth-form__header button {
  height: 100%;
  border-radius: 0;
  background-color: var(--dark);
  text-transform: uppercase;
  font-size: 24px;
  line-height: 29px;
  padding: 10px;
}

.auth-form__header button.active {
  background-color: var(--blue);
}

.auth-form__header-login {
  margin-right: 5px;
}

.auth-form__body {
  padding: 30px;
}

.auth-form__body .checkbox {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
}

.auth-form__body button {
  background-color: var(--red);
  font-size: 24px;
  line-height: 29px;
  padding: 12px 30px;
}

.auth-form__body-log a {
  display: block;
  color: var(--white);
  text-align: center;
  margin-top: 15px;
  font-weight: 300;
}

.auth-form__body-reg input {
  border: 3px solid transparent;
}

.form-group--error input {
  border: 3px solid var(--red);
}
</style>