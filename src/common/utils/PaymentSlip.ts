class PaymentSlip {
  generateBarCode(digitalLine: string) {
    const COIN_CODE = '9';

    const code = digitalLine.slice(0, 3);
    const verifyingDigit = digitalLine.slice(32, 33);
    const expirationDigits = digitalLine.slice(33, 37);
    const value = digitalLine.slice(37);
    const freeField = [
      digitalLine.slice(4, 9),
      digitalLine.slice(10, 20),
      digitalLine.slice(21, 31),
    ];

    const barCode =
      code +
      COIN_CODE +
      verifyingDigit +
      expirationDigits +
      value +
      freeField.join('');

    return barCode;
  }

  generateAmount(digitalLine: string) {
    return (Number(digitalLine.slice(37)) / 100).toFixed(2);
  }

  generateExpirationDate(digitalLine: string) {
    const days = Number(digitalLine.slice(33, 37));

    const date = new Date(1997, 10 - 1, 7);
    date.setDate(date.getDate() + days);

    return date.toISOString().split('T')[0];
  }
}

export default new PaymentSlip();
