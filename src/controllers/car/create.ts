import { Router, Request, Response } from 'express';
import Car , { CarModel } from '../../models/Car';
import { Model } from 'mongoose';

export default async function add ( req : Request, res : Response) {
    const data  = req.body;
    
    try {
        
        const carDocument: Model<CarModel> = Car;
        const allCars :Array<CarModel> = await Car.find();
        // Create a new document
        const newCar: CarModel = await carDocument.create({
                id: allCars.length +1,
                model: data.model,
                Year: data.Year,
                Engine: data.Engine,
                Fuel: data.Fuel,
                Transmission: data.Transmission,
                Doors:  data.Doors,
                Consumption: data.Consumption,
                Day: data.Day,
                Sixday: data.Sixday,
                Week: data.Week,
                Month: data.Month,
                Images: data.Images
        });
        res.status(200).json({newCar});
        // sendResponse(res, 201,'Success!', await sendInfo(newCar));
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            requestSucessful : false,
            message : "An error occured!"
        });
    }
}