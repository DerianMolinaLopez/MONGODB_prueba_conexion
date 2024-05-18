import { Request, Response } from 'express';
import mongoose from 'mongoose';

import Family from '../model/Familias';
export default class FamilyController {
    static async getFamilies(req:Request, res:Response) {
        const families = await Family.find().select('fam_nombre _id');
        res.json(families);
    }
    static async createFamily(req:Request, res:Response) {
        try{
            const {fam_nombre,articles} = req.body;
            const newFamily = new Family({fam_nombre,articles});
            await newFamily.save();
        }catch(error){
            console.log(error)
            res.status(500).json({message:error.message})
        }
        res.send('familia creada');
    }
 

    static async getFamilyByID(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const family = await Family.findById(id);
         
            if (!family) {
                return res.status(404).json({ message: 'Family not found' });
            }
            res.json(family);
        } catch (error) {
            console.log(error.message);
            // Si la búsqueda falla debido a un formato de ID incorrecto,
            // devolvemos un mensaje de error apropiado
            if (error instanceof mongoose.Error.CastError) {
                return res.status(400).json({ message: 'Family not found' });
            }
            res.status(500).json({ message: 'Error in the server' });
        }
    }
    
    

}
