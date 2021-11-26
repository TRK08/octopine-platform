<template>
  <div class="settings">
    <masonry :gutter="30" :cols="{ default: 2, 991: 1 }">
      <ChangeAvatar />
      <ChangePassword />
      <ChangeDescr />
    </masonry>
  </div>
</template>

<script>
import ChangeAvatar from "./ChangeAvatar.vue";
import ChangeDescr from "./ChangeDescr.vue";
import ChangePassword from "./ChangePassword.vue";

export default {
  components: { ChangePassword, ChangeDescr, ChangeAvatar },
  name: "CabinetSettings",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>