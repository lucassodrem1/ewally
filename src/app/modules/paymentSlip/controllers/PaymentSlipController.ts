import { NextFunction, Request, Response } from 'express';

import GeneratePaymentSlipAmountService from '../services/GeneratePaymentSlipAmountService';
import GeneratePaymentSlipBarCodeService from '../services/GeneratePaymentSlipBarCodeService';
import GerenateExpirationDateService from '../services/GerenateExpirationDateService';

class PaymentSlipController {
  read(req: Request, res: Response, _next: NextFunction) {
    const { digitalLine } = req.params;

    const barCode = GeneratePaymentSlipBarCodeService.execute(digitalLine);
    const amount = GeneratePaymentSlipAmountService.execute(digitalLine);
    const expirationDate = GerenateExpirationDateService.execute(digitalLine);

    res.status(200).json({
      barCode,
      amount,
      expirationDate,
    });
  }
}

export default new PaymentSlipController();
