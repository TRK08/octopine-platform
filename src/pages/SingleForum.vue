<template>
  <div class="single-forum" v-if="singleTheme">
    <div class="container">
      <div class="single-forum__theme">
        <h2>{{ singleTheme.name }}</h2>
        <span> {{ singleTheme.date }} </span>
      </div>

      <div class="single-forum__answers" v-if="comments">
        <h2>Ответы: {{ singleTheme.answers }}</h2>
        <div
          class="single-forum__answer"
          v-for="item in reversedComments"
          :key="item.date"
        >
          <div class="single-forum__answer-info">
            <div class="single-forum__answer-avatar">
              <img :src="item.user_avatar" alt="" />
            </div>
            <span class="single-forum__answer-nickname">
              {{ item.user_name }}
            </span>
            <span class="single-forum__answer-date">
              {{ item.date }}
            </span>
          </div>
          <div class="single-forum__answer-text">
            <p>{{ item.comment }}</p>
          </div>
        </div>
      </div>
      <div class="single-forum__comment" v-if="user">
        <h3>Новый коментарий</h3>
        <textarea
          v-model="commentText"
          class="single-forum-textarea"
        ></textarea>
        <button
          @click="sendNewComment"
          :disabled="!commentText"
          class="custom-btn"
        >
          <span class="load-spinner" v-if="isLoading"></span>
          <span v-else>Отправить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SingleForum",
  props: ["id"],
  data() {
    return {
      commentText: "",
      isLoading: "",
    };
  },
  methods: {
    ...mapActions({
      newComment: "forum/sendNewComment",
    }),
    sendNewComment() {
      this.isLoading = true;
      const data = {
        post_id: this.singleTheme.id,
        user_id: this.user.user_id,
        text: this.commentText,
      };

      this.newComment(data).then(() => {
        this.commentText = "";
        this.isLoading = false;
      });
    },
  },
  computed: {
    ...mapGetters({
      comments: "forum/getComments",
      singleTheme: "forum/getSingleTheme",
      user: "auth/getUser",
    }),
    reversedComments() {
      return this.comments.reverse();
    },
  },
  created() {
    this.$store.dispatch("forum/loadInfo", this.id);
  },
};
</script>

<style scoped>
.single-forum {
  padding: 100px 0;
  min-height: 100vh;
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
  text-align: center;
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
  width: 190px;
  /* max-width: 190px; */
  min-width: 190px;
  text-align: center;
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
  font-size: 16px;
  font-weight: 400;
  word-break: break-all;
}

.single-forum__comment {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
}

.single-forum__comment h3 {
  text-align: center;
  margin-bottom: 15px;
}

.single-forum-textarea {
  padding: 15px;
  background-color: var(--bg);
  border: 3px solid var(--dark);
  border-radius: 30px;
  width: 100%;
  height: 200px;
  resize: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}

.single-forum__comment button {
  width: 300px;
  background-color: var(--blue);
  display: block;
  margin: 15px auto 0;
}

@media (max-width: 672px) {
  .single-forum__answer {
    flex-direction: column;
  }

  .single-forum__answers h2 {
    text-align: center;
  }

  .single-forum__answer-info {
    width: 100%;
    border-right: none;
    border-bottom: 3px solid var(--bg);
  }
}
</style>