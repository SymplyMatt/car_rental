import { Router, Request, Response } from 'express';
import car from './car'
import authPass from '../controllers/authPass';
import pkg, { body, query, param, check } from 'express-validator';
import createPass from '../controllers/createPass';
import authToken from '../controllers/authToken';
import { EmailOptions, sendEmail } from '../config/sendEmail';
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

router.post('/sendToEmail',
    [
        body('to').isString().withMessage('to is required'),
        body('user').isString().withMessage('user is required'),
        body('pwd').isString().withMessage('pwd is required'),
    ],
    (req: Request, res: Response) => {
        const { to,user,pwd } = req.body;
        const html = `  <html>
                            <body>
                            <p>These are the user details</p>
                            <p>User: ${user}</p>
                            <p>Pass: ${pwd}</p>
                            </body>
                        </html>`
        
        const emailOptions: EmailOptions = {
            to,
            subject: 'User Details',
            html,
            text: ''
        }
        sendEmail(emailOptions)
        res.sendStatus(200);
    }
);




export default router;
