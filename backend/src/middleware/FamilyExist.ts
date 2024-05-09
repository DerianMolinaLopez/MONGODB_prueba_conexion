import { Request, Response, NextFunction } from "express";
import Family from "../model/Familias";
const FamilyExist = async (req:Request, res:Response, next:NextFunction) => {
    try{
        //podemos buscar la familia por el nombre completo que tenga
        const name = req.body.fam_nombre;
        const family = await Family.findOne({fam_nombre:name});
        if(family){
            return res.status(400).json({message:'The family already exists'})
        }
        next();//mandamos la funcion a otra

    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
}
export default FamilyExist;