class GeneratePaymentSlipAmountService {
  execute(digitalLine: string) {
    return (Number(digitalLine.slice(37)) / 100).toFixed(2);
  }
}

export default new GeneratePaymentSlipAmountService();
