<template>
  <div class="user">
    <div class="container">
      <masonry :gutter="30" :cols="{ default: 2, 991: 1 }">
        <UserProfile />
        <UserFriends />
        <UserTeams />
      </masonry>
    </div>
  </div>
</template>

<script>
import UserFriends from "../components/user/UserFriends.vue";
import UserProfile from "../components/user/UserProfile.vue";
import UserTeams from "../components/user/UserTeams.vue";
export default {
  components: { UserProfile, UserFriends, UserTeams },
  name: "User",
};
</script>

<style scoped>
.user {
  padding: 100px 0;
}

.user-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 30px;
}
</style>