<template>
  <div class="accordion">
    <div class="accordion__wrap" v-for="i in 2" :key="i">
      <div
        class="accordion__item"
        :class="{ open: open }"
        @click="openAccordion(i)"
      >
        <div class="accordion__item-header">
          <h3>Как можно принять участие в турнире?</h3>
          <img src="../../assets/img/plus.svg" alt="" />
        </div>
        <div class="accordion__item-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus, viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus faucibus
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openAccordion() {
      this.open = !this.open;
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