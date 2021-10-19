<template>
  <section class="user-profile">
    <div class="user-profile__avatar"></div>
    <div class="user-profile__status">
      <span class="user-profile__status-text">Онлайн</span>
      <span class="user-profile__status-circle"></span>
    </div>
    <div class="user-profile__nickname">Nickname</div>
    <div class="user-profile__info">Санкт-Петербург, 25 лет</div>
    <button class="custom-btn user-profile__add-friend">
      Добавить в друзья
    </button>
    <button class="custom-btn user-profile__new-message">
      Отправить сообщение
    </button>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>

<style scoped>
.user-profile {
  border-radius: 30px;
  background-color: var(--dark);
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.user-profile__avatar {
  width: 150px;
  height: 150px;
  background-color: var(--grey);
  border-radius: 100%;
}

.user-profile__status {
  margin: 15px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--grey);
  font-weight: 400;
}

.user-profile__status-circle {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #55a847;
  margin-left: 10px;
}

.user-profile__nickname {
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 15px;
}

.user-profile__info {
  color: var(--grey);
  margin-bottom: 15px;
}

.user-profile__add-friend {
  background-color: var(--red);
  margin-bottom: 15px;
}

.user-profile__new-message {
  background-color: var(--bg);
}

.user-profile button {
  max-width: 360px;
}
</style>