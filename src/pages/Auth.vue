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
          @submit.prevent="addNotify({ text: Date.now().toLocaleString() })"
        >
          <input placeholder="Email" type="text" />
          <input placeholder="Пароль" type="text" />
          <button type="submit">Войти</button>
          <a href="">Забыли пароль?</a>
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
          <button type="submit">Зарегистрироваться</button>
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
    // surname: {
    //   required,
    //   minLength: minLength(3),
    // },
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
      addNotify: "notify/ADD_NOTIFICATIONS",
    }),
    isChecked(arr) {
      console.log(arr);
    },
    registration() {
      let form = {
        name: this.nameReg,
        // surname: this.surname,
        email: this.emailReg,
        password: this.passwordReg,
      };

      this.REGISTR(form)
        .then(() => {
          this.addNotify({ text: Date.now().toLocaleString() });
        })
        .catch((err) => {
          console.log(err);
          this.addNotify("err");
        });
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

.auth-form__body-reg a {
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