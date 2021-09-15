<template>
  <button @click="$emit('click')" class="load-more">
    <svg class="white-arrow arrow">
      <use xlink:href="../../assets/img/sprite.svg#arrow"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: "LoadMore",
};
</script>

<style scoped>
.load-more {
  width: 100px;
  height: 100px;
  background-color: var(--blue);
  border-radius: 100%;
  margin: 0 auto;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  margin-bottom: 1px;
}

.load-more .white-arrow {
  transform: rotate(270deg);
}

.load-more:hover .white-arrow {
  transform: rotate(270deg) translateX(-5px);
}
</style>