import { Router, Request, Response } from 'express';
import Pass, { PassModel } from '../models/Pass';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function authToken(req: Request, res: Response) {
  try {
    const { token } = req.body;

    // Verify the token
    jwt.verify(token, 'your_secret_key', (err : any, decoded : any) => {
      if (err) {
        return res.status(401).json({
          requestSuccessful: false,
          message: 'Invalid token!',
        });
      }

      const passId = (decoded as any).passId;


      res.status(200).json({
        requestSuccessful: true,
        message: 'Token verified successfully!',
      });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      requestSuccessful: false,
      message: 'An error occurred!',
    });
  }
}
