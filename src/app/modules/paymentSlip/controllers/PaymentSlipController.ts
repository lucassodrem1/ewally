import { NextFunction, Request, Response } from 'express';

import GeneratePaymentSlipService from '../services/GeneratePaymentSlipService';

class PaymentSlipController {
  read(req: Request, res: Response, _next: NextFunction) {
    const { digitalLine } = req.params;

    const { barCode, amount, expirationDate } =
      GeneratePaymentSlipService.execute(digitalLine);

    res.status(200).json({
      barCode,
      amount,
      expirationDate,
    });
  }
}

export default new PaymentSlipController();
