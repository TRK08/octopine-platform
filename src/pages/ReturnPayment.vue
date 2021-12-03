<template>
  <div class="return-payment">
    <div class="container">
      <div class="return-payment__wrap">
        <h2>ОПЛАТА И ВОЗРАТ</h2>

        <h3>Оплата на сайте производится банковской картой</h3>
        <p>
          Для выбора оплаты электронного пропускного билета на турнир с помощью
          банковской карты на соответствующей странице необходимо нажать кнопку
          <span>Оплата заказа банковской картой</span>. Оплата происходит через
          ПАО СБЕРБАНК с использованием банковских карт следующих платёжных
          систем: <br />
          · МИР <img src="../assets/img/mir.svg" alt="" /> <br />
          · VISA International <img src="../assets/img/visa.svg" alt="" />
          <br />
          · Mastercard Worldwide
          <img src="../assets/img/mastercard.svg" alt="" />
          <br />
          · JCB <img src="../assets/img/jcb.svg" alt="" />. <br />
          Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на
          платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача
          информации осуществляется в защищённом режиме с использованием
          протокола шифрования SSL. В случае если Ваш банк поддерживает
          технологию безопасного проведения интернет-платежей Verified By Visa,
          MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа
          также может потребоваться ввод специального пароля.
        </p>
        <p>
          Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность
          сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК.
          Введённая информация не будет предоставлена третьим лицам за
          исключением случаев, предусмотренных законодательством РФ. Проведение
          платежей по банковским картам осуществляется в строгом соответствии с
          требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl,
          JCB.
        </p>

        <h3>Возврат оплаченных пропусков</h3>
        <p>
          <span>Электронный пропуск на турнир возврату на надлежит.</span> После
          покупки пропускного билета- ваша команда автоматически регистрируется
          на турнир.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReturnPayment",
};
</script>

<style scoped>
.return-payment {
  padding: 100px 0;
}

.return-payment__wrap {
  padding: 30px;
  background-color: var(--dark);
  border-radius: 30px;
}

.return-payment__wrap h2 {
  text-align: center;
  margin-bottom: 30px;
}

.return-payment__wrap h3 {
  margin: 15px 0;
}

.return-payment__wrap p {
  margin-bottom: 10px;
  font-weight: 400;
}

.return-payment__wrap p img {
  height: 20px;
}

.return-payment__wrap p span {
  font-weight: 700;
  color: var(--red);
}
</style>