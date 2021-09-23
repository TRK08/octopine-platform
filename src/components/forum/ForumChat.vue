<template>
  <div class="forum-chat">
    <div class="forum-chat__dialog" ref="chat">
      <div class="forum-chat__message" v-for="(item, i) in messages" :key="i">
        <p>{{ item }}</p>
      </div>
    </div>
    <div class="forum-chat__input">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Сообщение"
        @keyup.enter="createMessage"
      />
      <button @click="createMessage">
        <img src="../../assets/img/send-message.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumChat",
  data() {
    return {
      newMessage: "",
      messages: [
        "Сообщение",
        "Сообщение",
        "32131312",
        "321312312",
        "213123",
        "3211231",
        "32131312",
        "Сообщение Сообщение Сообщение Сообщение",
      ],
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage !== "") {
        this.messages.push(this.newMessage);
        this.newMessage = "";
        setTimeout(() => {
          this.toBottom();
        }, 100);
      }
    },
    toBottom() {
      this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
    },
  },
  mounted() {
    this.toBottom();
  },
};
</script>

<style scoped>
.forum-chat {
  max-width: 380px;
  width: 100%;
  height: fit-content;
  border: 5px solid var(--blue);
  border-radius: 30px;
  background-color: var(--dark);
  overflow: hidden;
}

.forum-chat__dialog {
  position: relative;
  width: 100%;
  height: 400px;
  padding: 15px;
  overflow-y: auto;
  overflow-x: hidden;
}

.forum-chat__message {
  margin-bottom: 15px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: var(--bg);
  font-size: 14px;
  line-height: 18px;
  width: fit-content;
  max-width: 80%;
  height: fit-content;
}

.forum-chat__message p {
  display: block;
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  font-weight: 400;
}

.forum-chat__message:last-child {
  margin-bottom: 0;
}

.forum-chat__input {
  position: relative;
  border-top: 3px solid var(--bg);
  padding: 25px 15px;
}

.forum-chat__input input {
  background-color: var(--bg);
  margin-bottom: 0;
  color: var(--white);
  padding-right: 50px;
}

.forum-chat__input button {
  position: absolute;
  right: 22px;
  top: 32px;
  background-color: var(--blue);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>