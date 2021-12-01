<template>
  <div class="change-descr">
    <h2>Изменить описание профиля</h2>
    <textarea
      placeholder="Описание"
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="descr"
    ></textarea>
    <button :disabled="!descr || isLoading" @click="changeDescription">
      <span class="load-spinner" v-if="isLoading"></span>
      <span v-else>Изменить описание</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChangeDescr",
  data() {
    return {
      descr: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      changeDescr: "usersAndTeams/CHANGE_PROFILE_DESCR",
    }),
    changeDescription() {
      this.isLoading = true;
      const data = {
        user_id: this.user.user_id,
        description: this.descr,
      };

      this.changeDescr(data).then(() => {
        this.descr = "";
        this.isLoading = false;
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
.change-descr {
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  text-align: center;
  margin-bottom: 30px;
}

.change-descr h2 {
  margin-bottom: 30px;
}

.change-descr textarea {
  padding: 15px;
  background-color: var(--bg);
  border: 3px solid var(--dark);
  border-radius: 30px;
  width: 100%;
  height: 100px;
  resize: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 30px;
}

.change-descr button {
  background-color: var(--blue);
}

.change-descr button:disabled {
  opacity: 0.7;
}
</style>