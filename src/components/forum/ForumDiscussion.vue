<template>
  <div class="discussion" v-if="themes">
    <div class="discussion__wrap" v-for="theme in themes" :key="theme.id">
      <div class="discussion-info">
        <div class="discussion-img">
          <img src="" alt="" />
        </div>
        <div class="discussion-text">
          <router-link tag="h3" :to="`/forum/${theme.slug}`"
            >{{ theme.name }}
          </router-link>
          <span>{{ theme.date }} </span>
        </div>
      </div>

      <div class="discussion-answers">Ответы: {{ theme.answers }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumDiscussion",
  props: {
    themes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.discussion__wrap {
  width: 100%;
  background-color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px 30px;
  border-radius: 30px;
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