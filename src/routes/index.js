import { Router } from 'express';
import businessDates from './businessDates/index';

const router = Router();
router.use('/businessDates', businessDates);

export default router;
