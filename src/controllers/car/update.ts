import { Router, Request, Response } from 'express';
import Car , { CarModel } from '../../models/Car';
import { Model } from 'mongoose';

export default async function updateCar ( req : Request, res : Response) {
    const data  = req.body;
    
    try {
        
        const carDocument: Model<CarModel> = Car;
        const car :CarModel = await Car.findOne({id : req.body.id});
        if(!car) return res.sendStatus(400); 
        car.model = req.body.model || car.model;
        car.Year = req.body.Year || car.Year;
        car.Engine = req.body.Engine || car.Engine;
        car.Fuel = req.body.Fuel || car.Fuel;
        car.Transmission = req.body.Transmission || car.Transmission;
        car.Consumption = req.body.Consumption || car.Consumption;
        car.Day = req.body.Day || car.Day;
        car.Sixday = req.body.Sixday || car.Sixday;
        car.Week = req.body.Week || car.Week;
        car.Month = req.body.Month || car.Month;
        car.Images = req.body.Images || car.Images;
        car.save();
        res.status(200).json({car});
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            requestSucessful : false,
            message : "An error occured!"
        });
    }
}