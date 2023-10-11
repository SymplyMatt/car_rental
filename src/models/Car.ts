import mongoose, { Schema, Document, Model } from 'mongoose';


export interface CarModel extends Document {
  id : number
  model : string
  Year : number
  Engine : string
  Fuel : string
  Transmission: string
  Doors : number
  Consumption : number
  Day : number
  Sixday : number
  Week : number
  Month : number
  Images : Array<string>
  createdAt : Date 
  updatedAt : Date
}

const carSchema: Schema<CarModel> = new mongoose.Schema({
    id: {
        type: Number,
        required : true,
    },
    model: {
        type: String,
        required : true
    },
    Year: {
        type: Number,
        required : true,
    },
    Engine: {
        type: String,
        required : true,
    },
    Fuel: {
        type: String,
        required : true
    },
    Transmission: {
        type: String,
        required : true,
    },
    Doors: {
        type: Number,
        required : true,
    },
    Consumption: {
        type: Number,
        required : true,
    },
    Day: {
        type: Number,
        required : true
    },
    Sixday: {
        type: Number,
        required : true,
    },
    Week: {
        type: Number,
        required : true,
    },
    Month: {
        type: Number,
        required : true
    },
    Images: {
        type: [String],
        required : true,
    },
},
{
    timestamps : true
});

  
export default mongoose.model('Car', carSchema) as any;

