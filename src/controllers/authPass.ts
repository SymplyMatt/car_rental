import { Router, Request, Response } from 'express';
import Pass, { PassModel } from '../models/Pass';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function createPass(req: Request, res: Response) {
  try {
    const { password } = req.body;

    const pass: PassModel | null = await Pass.findOne({}); // Find any existing pass

    if (!pass) {
      return res.status(404).json({
        requestSuccessful: false,
        message: 'Password not found!',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, pass.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        requestSuccessful: false,
        message: 'Invalid password!',
      });
    }

    // Password is correct, generate a token
    const token = jwt.sign({ passId: pass._id }, 'your_secret_key', { expiresIn: '1d' });

    res.status(200).json({
      requestSuccessful: true,
      message: 'Authentication successful!',
      token: token,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      requestSuccessful: false,
      message: 'An error occurred!',
    });
  }
}
