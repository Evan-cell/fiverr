import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

const app = express()
dotenv.config();
mongoose.set('strictQuery', true)

const connect = async () =>{
try {
    await mongoose.connect(process.env.mongo);
    console.log('connected')
  } catch (error) {
    console.log(error);
  }
};

app.listen(3000, () => {
    connect()
    console.log('App listening on port 3000!');
});