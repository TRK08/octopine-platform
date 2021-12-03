<template>
  <div class="payment">
    <div class="container">
      <div class="payment__wrap">
        <div class="payment__wrap-content" v-if="paymentStatus === 'pay'">
          <h2>Ваш пропуск успешно оплачен!</h2>
          <h3>Добро пожаловать на {{ tournamentName }}!</h3>
          <p>
            В ближайшее время организатор свяжется с вами по вашей почте Если у
            вас в аккаунте указан иной способ связи организатор свяжется с вами
            и там. Предупредите команду, игра скоро начнется!
          </p>
          <router-link tag="button" to="/tournaments"
            >К списку турниров</router-link
          >
        </div>
        <div
          class="payment__wrap-content"
          v-else-if="paymentStatus === 'error'"
        >
          <h2>При оплате произошла ошибка!</h2>
          <h3>Приносим свои извинения. Попробуйте оплатить участие позднее.</h3>
          <router-link tag="button" to="/tournaments"
            >К списку турниров</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PaymentStatus",
  data() {
    return {
      tournamentName: "Турнир",
    };
  },
  methods: {
    ...mapActions({
      checkPaymentAction: "tournaments/CHECK_PAYMENT",
    }),
    checkPayment() {
      const id = localStorage.getItem("order_id");
      this.checkPaymentAction(id).then(() => {
        localStorage.removeItem("order_id");
      });
    },
  },
  watch: {
    paymentStatus(val) {
      if (val === "pay") {
        this.$store.dispatch("tournaments/LOAD_TOURNAMENTS");
      }
    },
  },
  computed: {
    ...mapGetters({
      paymentStatus: "tournaments/getPaymentStatus",
    }),
  },
  created() {
    this.checkPayment();
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
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  min-height: 200px;
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