<template>
  <section class="user-friends">
    <h2>Друзья</h2>
    <div class="user-friends__items">
      <div
        class="user-friends__item"
        v-for="item in friends"
        :key="item.nickname"
      >
        <div class="user-friends__avatar">
          <img src="" alt="" />
        </div>
        <div class="user-friends__nickname">{{ item.nickname }}</div>
      </div>
    </div>
    <div class="user-friends__show-all">Все друзья</div>
  </section>
</template>

<script>
export default {
  name: "UserFriends",
  data() {
    return {
      friends: [
        {
          img: "",
          nickname: "user1",
        },
        {
          img: "",
          nickname: "user2",
        },
        {
          img: "",
          nickname: "user3",
        },
        {
          img: "",
          nickname: "user4",
        },
        {
          img: "",
          nickname: "user5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.user-friends {
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.user-friends h2 {
  margin-bottom: 30px;
}

.user-friends__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.user-friends__item {
  padding: 15px;
  background-color: var(--bg);
  width: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
}

.user-friends__avatar {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background-color: var(--grey);
  margin-right: 30%;
}

.user-friends__item:not(:last-child) {
  margin-bottom: 30px;
}

.user-friends__show-all {
  margin-top: 15px;
}
</style>