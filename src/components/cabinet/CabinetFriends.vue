<template>
  <div class="friends">
    <div class="friend" v-for="i in 6" :key="i">
      <div class="friend__avatar"></div>
      <div class="friend__nicename">Nicename</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CabinetFriends",
};
</script>

<style scoped>
.friends {
  background-color: var(--dark);
  border-radius: 30px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.friend {
  background-color: var(--bg);
  padding: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
}

.friend__avatar {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background-color: var(--grey);
  margin-right: 30px;
}
</style>