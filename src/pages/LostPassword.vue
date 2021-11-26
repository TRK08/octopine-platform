<template>
  <div class="lost-password">
    <div class="container">
      <div class="lost-password__wrap">
        <h2>Введите новый пароль</h2>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <input
            type="password"
            placeholder="Введите новый пароль"
            v-model.trim="$v.password.$model"
          />
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.repeatPassword.$error }"
        >
          <input
            type="password"
            placeholder="Повторите новый пароль"
            v-model.trim="$v.repeatPassword.$model"
          />
        </div>
        <button @click="setNewPassword" :disabled="this.$v.$invalid">
          <span class="load-spinner" v-if="isLoading"></span>
          <span v-else>Изменить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  name: "LostPassword",
  data() {
    return {
      password: "",
      repeatPassword: "",
      isLoading: false,
      currentUrl: "",
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    ...mapActions({
      setPass: "auth/SET_NEW_PASSWORD",
    }),
    getCurrentUrl() {
      this.currentUrl = document.URL.split("?")[1].split("&");
    },
    setNewPassword() {
      this.isLoading = true;

      let data = {
        key: this.currentUrl[1],
        id: this.currentUrl[2].split("=")[1],
        pass: this.password,
      };

      this.setPass(data).then(() => {
        this.isLoading = false;
        setTimeout(() => {
          this.$router.push("/auth");
        }, 1500);
      });
    },
  },
  created() {
    this.getCurrentUrl();
  },
};
</script>

<style scoped>
.lost-password {
  min-height: 50vh;
  padding: 100px 0;
}

.lost-password__wrap {
  background-color: var(--dark);
  border-radius: 30px;
  padding: 30px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.lost-password__wrap h2 {
  margin-bottom: 30px;
}

.lost-password__wrap button {
  background-color: var(--blue);
}

.lost-password__wrap button:disabled {
  opacity: 0.7;
}

.form-group input {
  border: 3px solid transparent;
}

.form-group--error input {
  border: 3px solid var(--red);
}
</style>