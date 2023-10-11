import { Router, Request, Response } from 'express';
import Car , { CarModel } from '../../models/Car';
import { Model } from 'mongoose';

export default async function add ( req : Request, res : Response) {
    const data  = req.body;
    
    try {
        
        const carDocument: Model<CarModel> = Car;
        const allCars :Array<CarModel> = await Car.find();
        // Create a new document
        const cars = [
            {
              "id": 38,
              "model": "Volkswagen Passat",
              "Year": 2008,
              "Engine": "1.9 TDI 77kW",
              "Fuel": "Diesel",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 30,
              "Sixday": 25,
              "Week": 120,
              "Month": 350,
              "Images": [
                "/upload/9041c41e-8462-4a5b-90ce-f4abebdef461.png",
                "/upload/0e588c7d-18fb-4317-a756-a0b4fbcd7a0f.png",
                "/upload/ecf2ee6a-0e2f-4e57-b421-200dda193dcf.png",
                "/upload/598cf2ed-9934-4dcd-9a5f-c151c9bc790f.png",
                "/upload/31cf3c6f-9ef2-41e3-9827-4f678d1af28f.png"
              ]
            },
            {
              "id": 40,
              "model": "LPG Renault Clio",
              "Year": 2005,
              "Engine": "1.2",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 20,
              "Week": 100,
              "Month": 350,
              "Images": [
                "/upload/1623627020092.png",
                "/upload/1623627020097.png",
                "/upload/1623627020101.png",
                "/upload/1623627020105.png",
                "/upload/1623627020108.png"
              ]
            },
            {
              "id": 41,
              "model": "LPG Renault Thalia",
              "Year": 2008,
              "Engine": "1.1 55 kW",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 20,
              "Week": 100,
              "Month": 350,
              "Images": [
                "/upload/ec14ebe4-e45e-496c-9cb8-2f3ff0692367.png",
                "/upload/373ef2fb-be45-41f5-905b-fbedace22b46.png",
                "/upload/3b7946d9-a010-400e-9491-93a2d953dd4c.png",
                "/upload/2c408121-2dae-41b1-8048-1c774737b5a1.png",
                "/upload/ad10e21d-45c2-4e02-809d-8d19b626564d.png"
              ]
            },
            {
              "id": 42,
              "model": "LPG Volkswagen Polo",
              "Year": 2005,
              "Engine": "1.2",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 20,
              "Week": 100,
              "Month": 350,
              "Images": [
                "/upload/1627656109079.png",
                "/upload/1627656165761.png",
                "/upload/1627656242501.png",
                "/upload/1627656256666.png",
                "/upload/1627656271467.png"
              ]
            },
            {
              "id": 43,
              "model": "Ford Mondeo",
              "Year": 2005,
              "Engine": "2.0 85 kW",
              "Fuel": "Diesel",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 17,
              "Week": 90,
              "Month": 300,
              "Images": [
                "/upload/1623627415616.png",
                "/upload/1623627415618.png",
                "/upload/1623627415621.png",
                "/upload/1623627415623.png",
                "/upload/1623627415633.png"
              ]
            },
            {
              "id": 44,
              "model": "LPG Toyota Yaris",
              "Year": 2009,
              "Engine": "1.0 51 Kw",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 3,
              "Consumption": 5,
              "Day": 30,
              "Sixday": 25,
              "Week": 120,
              "Month": 385,
              "Images": [
                "/upload/1623627545084.png",
                "/upload/1623627545088.png",
                "/upload/1623627545091.png",
                "/upload/1623627545095.png",
                "/upload/1623627545108.png"
              ]
            },
            {
              "id": 45,
              "model": "LPG Opel Zafira",
              "Year": 2008,
              "Engine": "1.8 103 Kw",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 30,
              "Sixday": 25,
              "Week": 120,
              "Month": 400,
              "Images": [
                "/upload/1623627717250.png",
                "/upload/1623627717252.png",
                "/upload/1623627717255.png",
                "/upload/1623627717264.png",
                "/upload/1623627717267.png"
              ]
            },
            {
              "id": 105,
              "model": "Renault Laguna (Kärukonks + Alcantara salong)",
              "Year": 2008,
              "Engine": "2.2",
              "Fuel": "Diesel",
              "Transmission": "Auto",
              "Doors": 5,
              "Consumption": 7,
              "Day": 30,
              "Sixday": 25,
              "Week": 110,
              "Month": 380,
              "Images": [
                "/upload/1627295409165.png",
                "/upload/1627295409166.png",
                "/upload/1627295409167.png",
                "/upload/1627295409168.png",
                "/upload/1627295496565.png"
              ]
            },
            {
              "id": 106,
              "model": "Chevrolt Aveo",
              "Year": 2007,
              "Engine": "1.2",
              "Fuel": "95",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 15,
              "Week": 85,
              "Month": 280,
              "Images": [
                "/upload/1d09a2db-e401-435f-9af1-f3c8b9c66886.png",
                "/upload/ca5991aa-218d-49b3-ae9b-260dd2270641.png",
                "/upload/d9fa0c6b-4c6d-428a-86bb-ee30af46cbc1.png",
                "/upload/685b2b37-a2a8-45ee-86e3-733c65d1bd1a.png",
                "/upload/6e5bad9c-9be3-445d-ac64-323285355ae0.png"
              ]
            },
            {
              "id": 107,
              "model": "Dacia Logan Sedan",
              "Year": 2006,
              "Engine": "1.4",
              "Fuel": "95",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 7,
              "Day": 25,
              "Sixday": 15,
              "Week": 85,
              "Month": 250,
              "Images": [
                "/upload/6670a4b4-e17f-476f-a08a-6f8d5499f4d2.png",
                "/upload/79ed78ec-eb01-4417-aec2-39eab95e92e9.png",
                "/upload/52d02088-94d2-4aab-9b21-e8e2fc6b2f99.png",
                "/upload/8dd32fa7-1a3b-4241-b821-00d695c3baea.png"
              ]
            },
            {
              "id": 110,
              "model": "LPG Toyota Yaris ",
              "Year": 2007,
              "Engine": "1.3",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 5,
              "Day": 30,
              "Sixday": 25,
              "Week": 120,
              "Month": 385,
              "Images": [
                "/upload/9a82f42e-9a86-4b8f-a1c5-78e550f6e671.png",
                "/upload/e215be5a-a025-4626-bd30-8a1cf41b373f.png",
                "/upload/dca54550-33e3-4f48-bdf3-ac64241d83c0.png",
                "/upload/aa4e1716-d5d9-4f34-b608-1c1f2cfcb601.png"
              ]
            },
            {
              "id": 112,
              "model": "LPG Nissan Micra",
              "Year": 2005,
              "Engine": "1.2",
              "Fuel": "Gas",
              "Transmission": "Auto",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 20,
              "Week": 100,
              "Month": 350,
              "Images": [
                "/upload/99d3f463-565e-40fa-93ce-30fcfab7e5fc.png",
                "/upload/deca03ca-9831-4c07-831f-52cb65e699b6.png",
                "/upload/a4cbe74d-7c78-4b1e-9a6f-84f63de6e7d0.png",
                "/upload/ff798bdf-2f0b-438b-91a7-5913fb210ff9.png",
                "/upload/b905caa9-3e32-4bcf-aa77-7f6f46e6c2ba.png"
              ]
            },
            {
              "id": 116,
              "model": "LPG Renault Thalia ",
              "Year": 2006,
              "Engine": "1.4",
              "Fuel": "Gas",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 6,
              "Day": 25,
              "Sixday": 20,
              "Week": 100,
              "Month": 350,
              "Images": [
                "/upload/624d6096-7bb5-482e-b20a-f177d8836a13.png",
                "/upload/b3e0a3db-958e-4831-a24a-916ee0a50b7e.png",
                "/upload/fe6b0478-8acc-490f-829d-0a0cfef2e184.png",
                "/upload/3756901d-bc98-4aa7-9f89-4c317c2e4deb.png",
                "/upload/a5b44648-ed94-4a65-b41f-331cb17c51b7.png"
              ]
            },
            {
              "id": 117,
              "model": "Saab 9-3 Vector bi turbo 132kw",
              "Year": 2009,
              "Engine": "1.9",
              "Fuel": "Diesel",
              "Transmission": "Auto",
              "Doors": 5,
              "Consumption": 7,
              "Day": 40,
              "Sixday": 25,
              "Week": 150,
              "Month": 500,
              "Images": [
                "/upload/deff8842-74fe-4261-85d5-29b18900442c.png",
                "/upload/17b60e2d-dc72-46f0-a6b0-8e8f55d59031.png",
                "/upload/c8381896-56fb-482e-b729-7e254f31eb36.png",
                "/upload/ec165045-6f32-42aa-8fe6-aaa184e50097.png",
                "/upload/6851fbf9-dccd-4e19-b903-da577b665e12.png"
              ]
            },
            {
              "id": 119,
              "model": "Renault Thalia",
              "Year": 2007,
              "Engine": "1.2",
              "Fuel": "95",
              "Transmission": "Manual",
              "Doors": 5,
              "Consumption": 7,
              "Day": 25,
              "Sixday": 15,
              "Week": 85,
              "Month": 250,
              "Images": [
                "/upload/fd81ebca-6dbd-4ba4-887f-cbce310c92be.png",
                "/upload/93c45664-6d7e-4e74-a91b-4a4e07991a1e.png",
                "/upload/e54055dc-4c79-46c3-8fc0-bcb562a185d0.png",
                "/upload/7ac4665f-ff50-4b75-b98d-c6826e009c39.png",
                "/upload/dc18cede-9915-40c6-9bad-fbc38657ca74.png"
              ]
            }
          ]
        const resss = cars.map(async data => {
            const newCar: CarModel = await carDocument.create({
                id: data.id,
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
        })
        const awaitPromise = await Promise.all(resss);
        res.status(200).json({done : 'done'});
        // sendResponse(res, 201,'Success!', await sendInfo(newCar));
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            requestSucessful : false,
            message : "An error occured!"
        });
    }
}