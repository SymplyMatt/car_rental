import { Router, Request, Response } from 'express';
import car from './car'
import authPass from '../controllers/authPass';
import pkg, { body, query, param, check } from 'express-validator';
import createPass from '../controllers/createPass';
import authToken from '../controllers/authToken';
const router = Router();

router.use('/car', car);

router.post('/createPass',
    [
        body('password').isString().withMessage('password is required'),
    ],
    createPass
);

router.post('/authPass',
    [
        body('password').isString().withMessage('password is required'),
    ],
    authPass
);

router.post('/authToken',
    [
        body('token').isString().withMessage('token is required'),
    ],
    authToken
);




export default router;
