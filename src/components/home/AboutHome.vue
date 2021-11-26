<template>
  <section class="about-home">
    <div class="container">
      <div class="about-home__wrap">
        <Tabs :tabs="tabs" @selectTab="selectTab">
          <div slot="tabs__body" v-for="(item, i) in mainTexts" :key="i">
            <p v-if="activeTab === i" v-html="item.text"></p>
          </div>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Tabs from "../ui/Tabs.vue";
export default {
  components: { Tabs },
  name: "AboutHome",
  data() {
    return {
      activeTab: 0,
      tabs: [
        // {
        //   title: "Компания",
        //   active: true,
        // },
        // {
        //   title: "Платформа",
        //   active: false,
        // },
        // {
        //   title: "Чем занимаемся",
        //   active: false,
        // },
        {
          title: "О наc",
          active: true,
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
  },
  computed: {
    ...mapGetters({
      mainTexts: "info/getMainTexts",
    }),
  },
  created() {
    this.$store.dispatch("info/loadMainTexts");
  },
};
</script>

<style scoped>
.about-home {
  margin-bottom: 100px;
}

.about-home__wrap {
  padding: 50px 30px;
  background-color: var(--dark);
  border-radius: 30px;
}

.about-home__wrap::v-deep .tabs__item:last-child button {
  border-radius: 30px;
}
</style>