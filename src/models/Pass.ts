import mongoose, { Schema, Document, Model } from 'mongoose';


export interface PassModel extends Document {
  id : number
  password : string
}

const carSchema: Schema<PassModel> = new mongoose.Schema({
    id: {
        type: Number,
        required : true,
    },
    password: {
        type: String,
        required : true
    },
},
{
    timestamps : true
});

  
export default mongoose.model('Pass', carSchema) as any;

