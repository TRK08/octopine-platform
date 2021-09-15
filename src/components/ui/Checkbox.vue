<template>
  <div class="checkbox">
    <label class="checkbox-item" v-for="(option, i) in options" :key="i">
      <span :for="option.type">{{ option.text }}</span>
      <input
        type="checkbox"
        :id="option.type"
        :value="option.text"
        v-model="option.checked"
        @change="onChange"
      />
      <span class="checkbox-mark"
        ><img src="../../assets/img/check-mark.svg" alt=""
      /></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checked: {},
    };
  },
  methods: {
    onChange() {
      this.$emit("checked", this.checked);
    },
  },
  created() {
    this.checked = this.options;
  },
};
</script>

<style scoped>
.checkbox-item {
  display: block;
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  height: 30px;
  user-select: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-item .checkbox-mark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox-item .checkbox-mark img {
  display: none;
  width: 20px;
}

.checkbox-item input:checked ~ .checkbox-mark img {
  display: block;
}
</style>