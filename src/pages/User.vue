<template>
  <div class="user" v-if="user">
    <div class="container">
      <masonry :gutter="30" :cols="{ default: 2, 991: 1 }">
        <UserProfile :user="user.user" />
        <UserFriends :friends="user.friends" />
        <UserTeams :teams="user.teams" />
      </masonry>
    </div>
  </div>
</template>

<script>
import UserFriends from "../components/user/UserFriends.vue";
import UserProfile from "../components/user/UserProfile.vue";
import UserTeams from "../components/user/UserTeams.vue";
import { mapGetters } from "vuex";
export default {
  components: { UserProfile, UserFriends, UserTeams },
  name: "User",
  props: ["id"],
  computed: {
    ...mapGetters({
      user: "usersAndTeams/getUser",
    }),
  },
  watch: {
    id() {
      this.$store.dispatch("usersAndTeams/LOAD_USER_BY_NICK", this.id);
    },
  },
  created() {
    this.$store.dispatch("usersAndTeams/LOAD_USER_BY_NICK", this.id);
  },
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