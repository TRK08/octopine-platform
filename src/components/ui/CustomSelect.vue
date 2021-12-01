<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        :class="{ choose: selected === option }"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      open: false,
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 60px;
  line-height: 60px;
}

.custom-select .selected {
  /* background-color: var(--dark); */
  border-radius: 30px 0 0 30px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease;
}

.custom-select .selected:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.custom-select .selected.open {
  border-radius: 30px 0 0 30px;
}

.custom-select .selected.open::after {
  transform: rotate(270deg);
  transition: all 0.4s ease;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  background-image: url("../../assets/img/arrow.svg");
  top: 35%;
  transform: rotate(90deg);
  right: 30px;
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
  transition: all 0.4s ease;
}

.custom-select .items {
  color: #fff;
  border-radius: 30px;
  overflow: hidden;
  position: absolute;
  background-color: var(--dark);
  top: 70px;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s ease;
}

.custom-select .items div {
  color: var(--white);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease;
}

.custom-select .items div:hover {
  background-color: var(--blue);
  transition: all 0.5s ease;
}

.custom-select .items.selectHide {
  opacity: 0;
  visibility: hidden;
}

.choose {
  background-color: var(--blue);
}

@media (max-width: 768px) {
  .custom-select {
    font-size: 14px;
  }

  .custom-select .selected:after {
    content: none;
  }
}
</style>