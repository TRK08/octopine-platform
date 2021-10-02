<template>
  <div class="tournament-about">
    <div class="tournament-about__block format">
      <h3>Формат</h3>
      <div class="tournament-about__format-items">
        <div
          class="tournament-about__format-item"
          v-for="item in 4"
          :key="item"
        >
          <img src="../../assets/img/peoples.svg" alt="" />
          <span>5 vs 5</span>
        </div>
      </div>
    </div>
    <div class="tournament-about__block descr">
      <h3>Описание</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToruanamentAbout",
};
</script>

<style scoped>
.tournament-about__block {
  margin-bottom: 50px;
}

.tournament-about__block h3 {
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 40px;
}

.tournament-about__block.descr p {
  font-size: 18px;
  line-height: 22px;
  color: var(--grey);
  font-weight: 400;
}

.tournament-about__format-items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.tournament-about__format-item {
  padding: 30px;
  border: 3px solid var(--blue);
  border-radius: 30px;
  max-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tournament-about__format-item span {
  margin-left: 30px;
}
</style>