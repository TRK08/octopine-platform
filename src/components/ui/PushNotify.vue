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
    // hideNotification() {
    //   let vm = this;
    //   if (this.notify.length) {
    //     vm.
    //   }
    // },
  },
  // watch: {
  //   notify(data) {
  //     console.log(data);
  //     this.removeNotify();
  //   },
  // },
  created() {},
};
</script>

<style scoped>
.notify {
  position: fixed;
  right: 30px;
  top: 50px;
  z-index: 10;
}

.notify__wrap {
  background-color: var(--blue);
  width: 300px;
  height: 50px;

  border-radius: 30px;
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
  transition: all 0.6s ease;
}
.notify-transition-enter-to {
  opacity: 1;
}
.notify-transition-leave {
  height: 50px;
  opacity: 1;
}
.notify-transition-leave-active {
  transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
}
.notify-transition-leave-to {
  height: 0;
  transform: translateX(120px);
  opacity: 0;
}
.notify-transition-move {
  transition: transform 0.6s ease;
}
</style>