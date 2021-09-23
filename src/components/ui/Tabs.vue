<template>
  <div class="tabs">
    <div class="tabs__items">
      <div
        class="tabs__item"
        @click="selectTab(i)"
        v-for="(tab, i) in tabs"
        :key="i"
      >
        <button :class="{ active: tab.active }">{{ tab.title }}</button>
      </div>
    </div>
    <slot name="tabs__body" />
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    selectTab(i) {
      this.$emit("selectTab", i);
    },
  },
};
</script>

<style scoped>
.tabs {
  height: 100%;
}

.tabs__items {
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  margin-bottom: 50px;
}

.tabs__item {
  width: 100%;
  margin: 0 2px;
}

.tabs__item button {
  width: 100%;
  border-radius: 0;
  background-color: var(--bg);
  padding: 20px 0;
  transition: all 0.5s ease;
}

.tabs__item button.active {
  background-color: var(--blue);
}

.tabs__item:hover button {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.tabs__item:first-child button {
  border-radius: 30px 0 0 30px;
}

.tabs__item:last-child button {
  border-radius: 0 30px 30px 0;
}
</style>