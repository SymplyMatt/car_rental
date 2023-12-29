import { Router, Request, Response } from 'express';
import Pass, { PassModel } from '../models/Pass';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';

export default async function createPass(req: Request, res: Response) {
  const data = req.body;
  const saltRounds = 10; // Number of salt rounds for bcrypt

  try {
    let pass: PassModel | null = await Pass.findOne({}); // Find any existing pass

    if (!pass) {
      // If no existing pass, create a new one with the provided password
      const hashedPassword = await bcrypt.hash(req.body.password || '', saltRounds);
      pass = new Pass({ password: hashedPassword });
    } else {
      // If an existing pass is found, update its password
      pass.password = await bcrypt.hash(req.body.password || '', saltRounds);
    }

    if (pass) {
      await pass.save(); // Save the updated or new document
      res.status(200).json({ Success: 'Request successful' });
    } else {
      res.status(400).json({ Error: 'Failed to create or update password' });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      requestSuccessful: false,
      message: 'An error occurred!',
    });
  }
}
