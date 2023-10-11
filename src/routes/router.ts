import { Router, Request, Response } from 'express';
import car from './car'
const router = Router();

router.use('/car',car);




export default router;
