import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'
dotenv.config();
import helmet from 'helmet';
import './environment';
import mongoose from 'mongoose'
import connectDB from './config/connectDb';
import cors from 'cors'
// import corsOptions from './config/corsOptions';
import credentials from './middleware/credentials';
import router from './routes/router';
const app: Application = express();

connectDB();
const PORT = process.env.PORT; 
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet()); // For security

// handle options credentials check - before CORS and fetch cookies credentials requirement
app.use(credentials);

// cors
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
};
  
app.use(cors(corsOptions));
  
app.use('/',router)

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
