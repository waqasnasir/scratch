import { Router } from 'express';
import {
  getBusinessDatesWithDelay,
} from '../../controllers/businessDates.controller';
import { validationMiddleware } from '../../middleware';
import businessDatesSchema from '../../schemas/businessDates.schema';

const router = Router();

router.get('/getBusinessDateWithDelay', validationMiddleware(businessDatesSchema.getBusinessDatesWithDelay), getBusinessDatesWithDelay);
export default router;
