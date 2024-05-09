import { Request, Response } from 'express';
import User from "../model/User";

class UserControler {
    static async getUsers(req: Request, res: Response) {
        try {
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async createUser(req: Request, res: Response) {
        const { name, email, password, permissions } = req.body;
        try {
            const newUser = new User({ name, email, password, permissions });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async iniciarUsuario(req: Request, res: Response) {
        // Aquí debes implementar la lógica para actualizar un usuario
        const {name,password} = req.params;
        try{
            const user = await User.findOne({name,password}).select('name').select('email').select('permissions');
            if(!user){
                res.send({message: 'User not found'});
            }
            res.status(200).json(user);
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default UserControler;
