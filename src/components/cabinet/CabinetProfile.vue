<template>
  <div class="profile">
    <div class="profile-info__wrap">
      <div class="profile-avatar"></div>
      <div class="profile-info">
        <h3>Nicename</h3>
        <span>Санкт-Петербург, 25 лет</span>
      </div>
    </div>
    <div class="profile-teams__wrap">
      <h3>Команды</h3>
      <div class="profile-teams">
        <div class="profile-team">
          <div class="profile-team__img"></div>
          <span>Название команды</span>
        </div>
        <div class="profile-team">
          <div class="profile-team__img"></div>
          <span>Название команды</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CabinetProfile",
};
</script>

<style scoped>
.profile {
  border-radius: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 15px;
}

.separator {
  display: block;
  width: 5px;
  height: 250px;
  background-color: var(--bg);
}

.profile-info__wrap {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  height: fit-content;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  background-color: var(--grey);
  border-radius: 100%;
  margin-bottom: 30px;
}

.profile-info h3 {
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 15px;
}

.profile-info span {
  color: var(--grey);
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
}

.profile-teams__wrap {
  padding: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-color: var(--dark);
  border-radius: 30px;
}

.profile-teams {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-team {
  padding: 15px 30px;
  margin-top: 30px;
  background-color: var(--bg);
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: 100%;
}

.profile-team__img {
  background-color: var(--grey);
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-right: 30px;
}
</style>