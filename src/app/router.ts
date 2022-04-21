import { Router } from 'express';

import paymentSlipRoutes from './modules/paymentSlip/routes/PaymentSlipRouters';

const router = Router();

router.use('/boleto', paymentSlipRoutes);

export default router;
