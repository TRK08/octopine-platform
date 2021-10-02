<template>
  <div class="single-match">
    <div class="single-match__first">
      <img :src="matches[0].first" alt="" />
    </div>
    <div class="single-match__info">
      <small> {{ matches[0].date }} </small>
      <span class="single-match__info-vs"> VS </span>
      <small> {{ matches[0].format }} </small>
    </div>
    <div class="single-match__second">
      <img :src="matches[0].second" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMatch",
  data() {
    return {
      matches: [
        {
          first: require("../../assets/img/navi-logo.png"),
          second: require("../../assets/img/liquid-logo.png"),
          date: "21.02",
          format: "BO1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.single-match {
  padding: 10px 40px;
  background-color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 380px;
  border-radius: 30px;
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.25));
}

.single-match__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.single-match__info-vs {
  margin: 10px 0;
  font-size: 32px;
  line-height: 40px;
  color: var(--red) !important;
}

.single-match__info small {
  color: var(--grey);
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
}
</style>