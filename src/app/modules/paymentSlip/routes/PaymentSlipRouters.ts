import EnsureValidDigitalLine from '@app/middlewares/EnsureValidDigitalLine';
import { Router } from 'express';

import PaymentSlipController from '../controllers/PaymentSlipController';

const router = Router();

router
  .route('/:digitalLine')
  .get(EnsureValidDigitalLine.execute, PaymentSlipController.read);

export default router;
