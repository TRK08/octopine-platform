<template>
  <div class="discussion" v-if="themes">
    <div class="discussion-create" v-if="user">
      <input type="text" placeholder="Название темы" v-model="themeName" />
      <button :disabled="!themeName.length" @click="createNewTheme">
        <span class="load-spinner" v-if="isLoading"></span>
        <span v-else>Создать новую тему</span>
      </button>
    </div>
    <router-link
      tag="div"
      :to="`/forum/${theme.slug}`"
      class="discussion__wrap"
      v-for="theme in themes"
      :key="theme.id"
    >
      <div class="discussion-info">
        <div class="discussion-img">
          <img src="" alt="" />
        </div>
        <div class="discussion-text">
          <h3>{{ theme.name }}</h3>
          <span>{{ theme.date }} </span>
        </div>
      </div>

      <div class="discussion-answers">Ответы: {{ theme.answers }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ForumDiscussion",
  props: {
    themes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      themeName: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      newTheme: "forum/createNewTheme",
    }),
    createNewTheme() {
      this.isLoading = true;
      this.newTheme(this.themeName).then(() => {
        this.isLoading = false;
        this.themeName = "";
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
.discussion-create {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.discussion-create input {
  margin: 0 30px 0 0;
}

.discussion-create button {
  background-color: var(--blue);
  height: 55px;
}

.discussion-create button:disabled {
  opacity: 0.7;
}

.discussion__wrap {
  width: 100%;
  background-color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.discussion__wrap:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.discussion-info {
  display: flex;
  align-items: center;
}

.discussion-img {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  background-color: var(--bg);
  margin-right: 30px;
}

.discussion-text h3 {
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
}

.discussion-text span {
  font-size: 14px;
  line-height: 17px;
  color: var(--grey);
}

.discussion-answers {
  margin-left: 30px;
}
</style>