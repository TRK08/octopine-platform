<template>
  <div class="popup" v-if="mode" @click="closePopup">
    <div class="popup__wrap" @click.stop>
      <div class="popup__content">
        <FriendsPopup v-if="mode === 'friends' || mode === 'new-friends'" />
        <TeamsPopup v-if="mode === 'teams'" />
        <SearchFriendsPopup v-if="mode === 'searchFriends'" />
        <CreateTeamPopup v-if="mode === 'createTeam'" />
        <SingleTeamPopup v-if="mode === 'singleTeam'" />
        <RegistrTournament v-if="mode === 'registrTournament'" />
        <ResetPass v-if="mode === 'reset-pass'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateTeamPopup from "./CreateTeamPopup.vue";
import FriendsPopup from "./FriendsPopup.vue";
import RegistrTournament from "./RegistrTournament.vue";
import ResetPass from "./ResetPass.vue";
import SearchFriendsPopup from "./SearchFriendsPopup.vue";
import SingleTeamPopup from "./SingleTeamPopup.vue";
import TeamsPopup from "./TeamsPopup.vue";
export default {
  name: "MainPopUp",
  components: {
    FriendsPopup,
    TeamsPopup,
    SearchFriendsPopup,
    CreateTeamPopup,
    SingleTeamPopup,
    RegistrTournament,
    ResetPass,
  },
  methods: {
    closePopup() {
      this.$store.dispatch("popup/GET_POPUP_MODE", { mode: null, data: null });
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
  width: fit-content;
  max-width: 80vw;
  max-height: 80vh;
  background-color: var(--dark);
  padding: 30px;
  border-radius: 30px;
  overflow: hidden;
}

.popup__content {
  max-height: calc(80vh - 60px);
  height: 100%;
  overflow-y: auto;
}

.popup__content::-webkit-scrollbar {
  display: none;
}
</style>