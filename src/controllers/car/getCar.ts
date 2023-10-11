import { Router, Request, Response } from 'express';
import Car , { CarModel } from '../../models/Car';
import { Model } from 'mongoose';

export default async function getCar ( req : Request, res : Response) {
    const data  = req.body;
    
    try {
        
        const carDocument: Model<CarModel> = Car;
        const car :CarModel = await Car.findOne({id : req.body.id});
        if(!car) return res.sendStatus(400); 
        res.status(200).json({car});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            requestSucessful : false,
            message : "An error occured!"
        });
    }
}