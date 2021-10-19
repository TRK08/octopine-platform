<template>
  <div class="accordion">
    <div
      class="accordion__wrap"
      v-for="(question, i) in questions"
      :key="question.title"
    >
      <div
        class="accordion__item"
        :class="{ open: question.open }"
        @click="openAccordion(i)"
      >
        <div class="accordion__item-header">
          <h3>{{ question.title }}</h3>
          <img src="../../assets/img/plus.svg" alt="" />
        </div>
        <div class="accordion__item-body">
          <p v-html="question.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // open: false,
    };
  },
  methods: {
    openAccordion(i) {
      this.questions[i].open = !this.questions[i].open;
    },
  },
};
</script>

<style scoped>
.accordion__item {
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--dark);
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin-bottom: 30px;
}

.accordion__item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px;
}

.accordion__item-header img {
  transition: all 0.5s ease;
  margin-left: 5px;
}

.accordion__item.open .accordion__item-header img {
  transform: rotate(45deg);
  transition: all 0.5s ease;
}

.accordion__item .accordion__item-body {
  /* padding: 0 30px 30px; */
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease;
}

.accordion__item .accordion__item-body p {
  margin: 0 30px 30px;
}

.accordion__item.open .accordion__item-body {
  max-height: 1000px;
  transition: max-height 1s ease;
}
/* 
.accordion__body {
  background-color: var(--dark);
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
  padding: 20px 30px 30px;
  padding: 0;
} */
/* 
.accordion__header.open + .accordion__body {
  padding: 20px 30px 30px;
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
} */
</style>