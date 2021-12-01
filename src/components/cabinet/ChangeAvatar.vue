<template>
  <div class="change-avatar">
    <h2>Изменить аватар</h2>
    <div class="create-team-item file">
      <label v-if="file" class="custom-load-avatar" for="load-logo-img">
        {{ file.name }}
      </label>
      <label v-else class="custom-load-avatar" for="load-logo-img"
        >Выберите аватар</label
      >

      <input
        ref="file"
        type="file"
        name="upload"
        placeholder="Выбрать файл"
        accept=".jpg,.jpeg,.png"
        id="load-logo-img"
        @change="setLogo"
      />
    </div>
    <button :disabled="!file" @click="changeAvatar">
      <span class="load-spinner" v-if="isLoading"></span>
      <span v-else>Изменить</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChangeAvatar",
  data() {
    return {
      file: null,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      changeAva: "auth/CHANGE_AVATAR",
    }),
    setLogo() {
      this.file = this.$refs.file.files[0];
    },
    changeAvatar() {
      this.isLoading = true;

      const reqData = {
        avatar: this.file,
        user_id: this.user.user_id,
      };

      let form = new FormData();
      for (var field in reqData) {
        form.append(field, reqData[field]);
      }

      this.changeAva(form).then(() => {
        this.isLoading = false;
        this.file = null;
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
.change-avatar {
  padding: 30px;
  background-color: var(--dark);
  text-align: center;
  border-radius: 30px;
  margin-bottom: 30px;
}

.custom-load-avatar {
  padding: 15px 30px;
  background-color: var(--white);
  color: var(--dark);
  width: 100%;
  border-radius: 30px;
  cursor: pointer;
  margin: 30px 0;
}

#load-logo-img {
  display: none;
}

.change-avatar button {
  background-color: var(--blue);
}

.change-avatar button:disabled {
  opacity: 0.7;
}
</style>