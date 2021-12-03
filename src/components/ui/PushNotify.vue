<template>
  <div class="notify">
    <transition-group name="notify-transition" class="notify-group">
      <div class="notify__wrap" v-for="item in notify" :key="item.id">
        <span> {{ item.text }} </span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PushNotify",
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    ...mapGetters({
      notify: "notify/getNotifications",
    }),
  },
  methods: {
    ...mapActions({
      addNotify: "notify/ADD_NOTIFICATIONS",
      removeNotify: "notify/REMOVE_NOTIFICATION",
    }),
  },
  created() {},
};
</script>

<style scoped>
.notify {
  position: fixed;
  right: 30px;
  top: 50px;
  z-index: 1000;
}

.notify__wrap {
  background-color: var(--blue);
  width: fit-content;
  height: fit-content;
  max-width: 400px;
  min-height: 50px;
  border-radius: 30px;
  padding: 15px;
  text-align: center;
  margin-bottom: 20px;
}

.notify-group {
  display: flex;
  flex-direction: column-reverse;
}

.notify-transition-enter {
  transform: translateX(120px);
  opacity: 0;
}
.notify-transition-enter-active {
  transition: all 0.4s ease;
}
.notify-transition-enter-to {
  opacity: 1;
}
.notify-transition-leave {
  height: 50px;
  opacity: 1;
}
.notify-transition-leave-active {
  transition: transform 0.4s ease, opacity 0.4s, height 0.8s;
}
.notify-transition-leave-to {
  height: 0;
  transform: translateX(120px);
  opacity: 0;
}
.notify-transition-move {
  transition: transform 0.4s ease;
}
</style>