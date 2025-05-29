import { Router } from 'express';
import { handlePayment } from '../controllers/payment.controller';

const router = Router();

router.post('/pay', handlePayment);

export default router;