import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';
import { conectDB } from './db/db';
import Family from './model/Familias';
import UserRoute from './routes/UserRoute';
import { RouterFamilies } from './routes/FamilyRoute';
import routerArticle from './routes/ArticlerRoute';
import cors from 'cors';
import seedAllData from './seed';
dotenv.config();
 const app = express();
 app.use(express.json());//lectura de datos en formato json
 app.use(cors());
 app.get('/',(req:Request,res:Response)=>{
        res.send('puntos conectados');
 })
  conectDB()
  
 app.listen(3000,()=>{
     console.log(colors.bold.blue('server on port 3000'));
 })
 app.use('/family',RouterFamilies)
 app.use('/article',routerArticle)
 app.use('/user',UserRoute)

