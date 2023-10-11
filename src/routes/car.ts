import express from 'express';
import { Response, Request } from 'express';
import mongoose from 'mongoose';
import pkg, { body, query, param, check } from 'express-validator';
import validate from '../middleware/validate';
import create from '../controllers/car/create';
import getAll from '../controllers/car/getAll';
import getCar from '../controllers/car/getCar';
import deleteCar from '../controllers/car/delete';
import updateCar from '../controllers/car/update';
const router = express.Router();

router.post(
  '/create',
  create
);
router.post(
  '/update',
  [
    body('model').isString().withMessage('model is required'),
    body('Year').isNumeric().withMessage('Year is required'),
    body('Engine').isString().withMessage('Engine is required'),
    body('Fuel').isString().withMessage('Fuel is required'),
    body('Transmission').isString().withMessage('Transmission is required'),
    body('Doors').isNumeric().withMessage('Doors is required'),
    body('Consumption').isNumeric().withMessage('Consumption is required'),
    body('Day').isNumeric().withMessage('Day is required'),
    body('Sixday').isNumeric().withMessage('Sixday is required'),
    body('Week').isNumeric().withMessage('Week is required'),
    body('Month').isNumeric().withMessage('Month is required'),
    body('Images').isArray().withMessage('Images is required'),
    body('id').isNumeric().withMessage('id is required'),
  ],
  updateCar
);
router.post(
  '/delete',
  [
    body('id').isNumeric().withMessage('model is required'),
  ],
  deleteCar
);

router.post(
  '/getCar',
  [
    body('id').isNumeric().withMessage('model is required'),
  ],
  getCar
);

router.get(
  '/getAll',validate,getAll
);


export default router;
