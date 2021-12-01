<template>
  <div class="payment">
    <div class="container">
      <div class="payment__wrap">
        <h2>Ваш пропуск успешно оплачен!</h2>
        <h3>Добро пожаловать на {{ tournamentName }}!</h3>
        <p>
          В ближайшее время организатор свяжется с вами по вашей почте Если у
          вас в аккаунте указан иной способ связи организатор свяжется с вами и
          там. Предупредите команду, игра скоро начнется!
        </p>
        <router-link tag="button" to="/tournaments"
          >К списку турниров</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentStatus",
  data() {
    return {
      tournamentName: "Турнир",
    };
  },
  created() {
    this.tournamentName = localStorage.getItem("tournamentName");
  },
};
</script>

<style scoped>
.payment {
  padding: 100px 0;
}

.payment__wrap {
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.payment__wrap h3 {
  margin: 10px 0 30px;
}

.payment__wrap p {
  font-weight: 400;
}

.payment__wrap button {
  display: block;
  background-color: var(--blue);
  max-width: 300px;
  margin: 30px auto 0;
}
</style>