<template>
  <div class="popup" v-if="mode" @click="closePopup">
    <div class="popup__wrap" @click.stop>
      <div class="popup__content">
        <FriendsPopup />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FriendsPopup from "./FriendsPopup.vue";
export default {
  name: "MainPopUp",
  components: { FriendsPopup },
  methods: {
    closePopup() {
      this.$store.dispatch("popup/GET_POPUP_MODE", { mode: null });
    },
  },
  computed: {
    ...mapGetters({
      mode: "popup/getPopupMode",
    }),
  },
  watch: {
    mode(val) {
      if (val) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
};
</script>

<style scoped>
.overhidden {
  overflow: hidden !important;
}
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__wrap {
  width: fit-content;
  min-width: 500px;
  max-width: 80vw;
  max-height: 80vh;
  background-color: var(--dark);
  padding: 30px;
  border-radius: 30px;
  overflow: hidden;
}

.popup__content {
  height: 100%;
  overflow-y: scroll;
}

.popup__content::-webkit-scrollbar {
  display: none;
}
</style>