<template>
  <section class="about-home">
    <div class="container">
      <div class="about-home__wrap">
        <Tabs :tabs="tabs" @selectTab="selectTab">
          <p slot="tabs__body" v-if="activeTab === 0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur minima ea modi exercitationem eligendi quibusdam
            placeat neque optio autem consequatur? Delectus, deleniti,
            exercitationem officia nihil nostrum quo nulla voluptas ipsum odit
            possimus quidem iste? Amet, vitae itaque odio, earum esse eaque nisi
            neque veniam, repudiandae odit voluptates dicta placeat in? Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
            minima ea modi exercitationem eligendi quibusdam placeat neque optio
            autem consequatur? Delectus, deleniti, exercitationem officia nihil
            nostrum quo nulla voluptas ipsum odit possimus quidem iste? Amet,
            vitae itaque odio, earum esse eaque nisi neque veniam, repudiandae
            odit voluptates dicta placeat in? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consequuntur minima ea modi
            exercitationem eligendi quibusdam placeat neque optio autem
            consequatur? Delectus, deleniti, exercitationem officia nihil
            nostrum quo nulla voluptas ipsum odit possimus quidem iste? Amet,
            vitae itaque odio, earum esse eaque nisi neque veniam, repudiandae
            odit voluptates dicta placeat in?
          </p>
          <p slot="tabs__body" v-if="activeTab === 1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur minima ea modi exercitationem eligendi quibusdam
            placeat neque optio autem consequatur? Delectus, deleniti
          </p>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from "../ui/Tabs.vue";
export default {
  components: { Tabs },
  name: "AboutHome",
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "Компания",
          active: true,
        },
        {
          title: "Платформа",
          active: false,
        },
        {
          title: "Чем занимаемся",
          active: false,
        },
        {
          title: "О нас",
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
</style>