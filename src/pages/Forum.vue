<template>
  <div class="forum">
    <Banner :bannerInfo="bannerInfo" />
    <div class="container">
      <div class="row forum__wrap">
        <div class="forum-tabs">
          <Tabs class="col-md-12" :tabs="tabs" @selectTab="selectTab">
            <ForumDiscussion
              :themes="themes"
              slot="tabs__body"
              v-if="activeTab === 0 && themes"
            />
            <Accordion
              :questions="questions"
              slot="tabs__body"
              v-if="activeTab === 1"
            />
          </Tabs>
        </div>
        <!-- <ForumChat class="col-md-4" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import ForumChat from "../components/forum/ForumChat.vue";
import ForumDiscussion from "../components/forum/ForumDiscussion.vue";
import Accordion from "../components/ui/Accordion.vue";
import Banner from "../components/ui/Banner.vue";
import Tabs from "../components/ui/Tabs.vue";
import { mapGetters } from "vuex";
export default {
  components: { ForumChat, Banner, Tabs, ForumDiscussion, Accordion },
  name: "Forum",
  data() {
    return {
      activeTab: 0,
      bannerInfo: {
        title: "Форум",
        descr: "Обсуждай важные темы связанные с твоей любимой игрой",
        img: require("../assets/img/news-banner.png"),
      },
      tabs: [
        {
          title: "Обсуждения",
          active: true,
        },
        {
          title: "Часто задаваемые вопросы",
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
  },
  computed: {
    ...mapGetters({
      questions: "forum/getQuestions",
      themes: "forum/getThemes",
    }),
  },
};
</script>

<style scoped>
.forum__wrap {
  padding: 100px 0;
}

.forum-tabs::v-deep .tabs__item button {
  background-color: var(--dark);
}

.forum-tabs::v-deep .tabs__item:hover button,
.forum-tabs::v-deep .tabs__item button.active {
  background-color: var(--blue);
}
</style>