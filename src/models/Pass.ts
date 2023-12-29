import mongoose, { Schema, Document, Model } from 'mongoose';


export interface PassModel extends Document {
  password : string
}

const carSchema: Schema<PassModel> = new mongoose.Schema({
    password: {
        type: String,
        required : true
    },
},
{
    timestamps : true
});

  
export default mongoose.model('Pass', carSchema) as any;

