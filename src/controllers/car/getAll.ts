import { Router, Request, Response } from 'express';
import Car , { CarModel } from '../../models/Car';
import { Model } from 'mongoose';
export default async function getAll ( req : Request, res : Response) {
    const data  = req.body;
    
    try {
        
        const carDocument: Model<CarModel> = Car;
        const allCars :Array<CarModel> = await Car.find();
        res.status(200).json({allCars});
        // sendResponse(res, 201,'Success!', await sendInfo(newCar));
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            requestSucessful : false,
            message : "An error occured!"
        });
    }
}