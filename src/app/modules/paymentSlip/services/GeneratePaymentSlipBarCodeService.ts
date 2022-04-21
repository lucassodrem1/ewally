class GeneratePaymentSlipBarCodeService {
  execute(digitalLine: string) {
    const code = digitalLine.slice(0, 3);
    const coinCode = '9';
    const verifyingDigit = digitalLine.slice(32, 33);
    const expirationDigits = digitalLine.slice(33, 37);
    const value = digitalLine.slice(37);
    const freeField = [
      digitalLine.slice(4, 9),
      digitalLine.slice(10, 20),
      digitalLine.slice(21, 31),
    ];

    const result =
      code +
      coinCode +
      verifyingDigit +
      expirationDigits +
      value +
      freeField.join('');

    return result;
  }
}

export default new GeneratePaymentSlipBarCodeService();
