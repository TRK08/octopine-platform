<template>
  <div class="cabinet">
    <div class="container">
      <div class="cabinet-header">
        <h2>Личный кабинет</h2>
        <div class="cabinet-exit">
          <span @click="signOut">Выйти</span>
          <svg class="red-arrow arrow">
            <use xlink:href="../assets/img/sprite.svg#arrow"></use>
          </svg>
        </div>
      </div>
      <div class="cabinet-body">
        <Tabs :tabs="tabs" @selectTab="selectTab">
          <CabinetProfile slot="tabs__body" v-if="activeTab === 0" />
          <CabinetSettings slot="tabs__body" v-if="activeTab === 1" />
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import CabinetProfile from "../components/cabinet/CabinetProfile.vue";
import CabinetSettings from "../components/cabinet/CabinetSettings.vue";
import Tabs from "../components/ui/Tabs.vue";
export default {
  name: "Cabinet",
  components: {
    Tabs,
    CabinetProfile,
    CabinetSettings,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "Профиль",
          active: true,
        },
        {
          title: "Настройки",
          active: false,
        },
      ],
    };
  },
  methods: {
    selectTab(i) {
      this.tabs.forEach((tab) => {
        tab.active = tab === this.tabs[i];
        this.activeTab = i;
      });
    },
    signOut() {
      this.$store.dispatch("auth/SIGN_OUT");
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style scoped>
.cabinet {
  padding: 100px 0;
  min-height: 100vh;
}

.cabinet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cabinet-exit {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.cabinet-exit .arrow {
  margin-left: 15px;
}

.cabinet-body {
  margin-top: 50px;
}

.cabinet-body::v-deep .tabs__item button {
  background-color: var(--dark);
}

.cabinet-body::v-deep .tabs__item button.active,
.cabinet-body::v-deep .tabs__item:hover button {
  background-color: var(--blue);
}
</style>