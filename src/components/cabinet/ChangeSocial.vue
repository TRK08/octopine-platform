<template>
  <div class="change-social">
    <h2>Ссылки на соц. сети</h2>
    <div class="change-social-item">
      <small>Telegram</small>
      <input type="text" placeholder="@nick" v-model="teleg" />
    </div>
    <div class="change-social-item">
      <small>WhatsApp</small>
      <input
        type="text"
        placeholder="+7"
        v-model="whats"
        v-mask="'+7(###) ###-##-##'"
      />
    </div>
    <div class="change-social__show">
      <input type="checkbox" id="show-social" v-model="isShow" />
      <label for="show-social">Показывать всем пользователям</label>
    </div>
    <button @click="changeSocials">
      <span class="load-spinner" v-if="isLoading"></span>
      <span v-else>Сохранить</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChangeSocial",
  data() {
    return {
      isLoading: false,
      teleg: "",
      whats: "",
      isShow: false,
    };
  },
  methods: {
    ...mapActions({
      changeLinks: "auth/CHANGE_SOCIALS",
    }),
    changeSocials() {
      this.isLoading = true;
      let data = {
        user: this.user.user_id,
        is_shown: this.isShow,
      };

      if (this.teleg.length) {
        data.telegram = this.teleg;
      }

      if (this.whats.length) {
        data.whatsapp = this.whats;
      }

      this.changeLinks(data).then(() => {
        this.isLoading = false;
        this.whats = "";
        this.teleg = "";
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/getUser",
    }),
  },
};
</script>

<style scoped>
.change-social {
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.change-social h2 {
  margin-bottom: 30px;
}

.change-social-item {
  margin-bottom: 30px;
}

.change-social-item input {
  margin: 5px 0 0;
}

.change-social button {
  background-color: var(--blue);
}

.change-social button:disabled {
  opacity: 0.7;
}

.change-social__show {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.change-social__show input {
  display: block;
  width: auto;
  margin: 0 5px 0 0;
}

.change-social__show label {
  margin: 0;
}
</style>