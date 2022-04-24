import PaymentSlip from '@common/utils/PaymentSlip';

class GeneratePaymentSlipService {
  execute(digitalLine: string) {
    const barCode = PaymentSlip.generateBarCode(digitalLine);

    const amount = PaymentSlip.generateAmount(digitalLine);
    const expirationDate = PaymentSlip.generateExpirationDate(digitalLine);

    return { barCode, amount, expirationDate };
  }
}

export default new GeneratePaymentSlipService();
