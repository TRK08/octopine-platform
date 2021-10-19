<template>
  <div class="single-forum" v-if="singleTheme">
    <div class="container">
      <div class="single-forum__theme">
        <h2>{{ singleTheme.name }}</h2>
        <span> {{ singleTheme.date }} </span>
      </div>

      <div class="single-forum__answers">
        <h2>Ответы: {{ singleTheme.answers }}</h2>
        <div
          class="single-forum__answer"
          v-for="item in comments"
          :key="item.date"
        >
          <div class="single-forum__answer-info">
            <div class="single-forum__answer-avatar">
              <img :src="item.user_avatar" alt="" />
            </div>
            <span class="single-forum__answer-nickname">
              {{ item.user_name }}
            </span>
            <span class="single-forum__answer-date"> {{ item.date }} </span>
          </div>
          <div class="single-forum__answer-text">
            <p>{{ item.comment }}</p>
          </div>
        </div>
      </div>
      <div class="single-forum__comment"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleForum",
  props: ["id"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      comments: "forum/getComments",
      singleTheme: "forum/getSingleTheme",
    }),
  },
  created() {
    this.$store.dispatch("forum/loadInfo", this.id);
  },
};
</script>

<style scoped>
.single-forum {
  padding: 100px 0;
}

.single-forum__theme {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.single-forum__theme h2 {
  margin-bottom: 15px;
}

.single-forum__theme span {
  color: var(--grey);
  font-weight: 400;
}

.single-forum__answers h2 {
  margin-bottom: 30px;
}

.single-forum__answer {
  display: flex;
  border-radius: 30px;

  background-color: var(--dark);
  margin-bottom: 30px;
}

.single-forum__answer-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  border-right: 3px solid var(--bg);
  padding: 15px 30px;
}

.single-forum__answer-avatar {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 15px;
}

.single-forum__answer-avatar img {
  width: 100%;
}

.single-forum__answer-date {
  margin-top: 15px;
  color: var(--grey);
}

.single-forum__answer-text {
  padding: 15px 30px;
}

.single-forum__comment {
  border: 3px solid var(--dark);
  width: 100%;
  height: 50px;
  border-radius: 30px;
}
</style>