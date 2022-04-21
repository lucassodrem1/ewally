import ensureValidDigitalLine from '@app/middlewares/ensureValidDigitalLine';
import { Router } from 'express';

import PaymentSlipController from '../controllers/PaymentSlipController';

const router = Router();

router
  .route('/:digitalLine')
  .get(ensureValidDigitalLine, PaymentSlipController.read);

export default router;
