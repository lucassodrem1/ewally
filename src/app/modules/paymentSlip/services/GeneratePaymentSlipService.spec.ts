import PaymentSlip from '@common/utils/PaymentSlip';

import GeneratePaymentSlipService from './GeneratePaymentSlipService';

describe('GeneratePaymentSlipService', () => {
  it('should be able to return a valid payment slip', () => {
    jest
      .spyOn(PaymentSlip, 'generateBarCode')
      .mockImplementationOnce(
        () => '00193373700000001000500940144816060680935031',
      );

    jest
      .spyOn(PaymentSlip, 'generateAmount')
      .mockImplementationOnce(() => '1.00');

    jest
      .spyOn(PaymentSlip, 'generateExpirationDate')
      .mockImplementationOnce(() => '2007-12-31');

    const result = GeneratePaymentSlipService.execute(
      '00190500954014481606906809350314337370000000100',
    );

    expect(result).toMatchObject({
      barCode: '00193373700000001000500940144816060680935031',
      amount: '1.00',
      expirationDate: '2007-12-31',
    });
  });
});
