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
        <div class="auth-form__body auth-form__body-reg" v-if="enter">
          <input placeholder="Email" type="text" />
          <input placeholder="Пароль" type="text" />
          <button>Войти</button>
          <a href="">Забыли пароль?</a>
        </div>
        <div class="auth-form__body auth-form__body-log" v-else>
          <input placeholder="Никнейм" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Пароль" type="text" />
          <input placeholder="Повторите пароль" type="text" />
          <Checkbox :options="options" @checked="isChecked" />
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../components/ui/Checkbox.vue";
export default {
  components: { Checkbox },
  name: "Auth",
  data() {
    return {
      enter: true,
      options: [
        {
          type: "rules",
          checked: false,
          text: "Соглашаюсь с пользовательским соглашением",
        },
        // {
        //   type: "test",
        //   checked: false,
        //   text: "Правила",
        // },
      ],
    };
  },
  methods: {
    isChecked(arr) {
      console.log(arr);
    },
  },
};
</script>

<style scoped>
.auth {
  min-height: 100vh;
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
</style>