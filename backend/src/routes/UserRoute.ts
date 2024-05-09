//las rutas de usuario sern solmente poder
//modificar permisos y demas cosas
//simularemos una restriccion de permisos
//segun los atributos del usuario
import { Router } from "express";
import UserControler from "../controller/UserControler";
const UserRoute = Router();

UserRoute.get('/',UserControler.getUsers)
UserRoute.post('/',UserControler.createUser)
UserRoute.get('/begin/:name/:password',UserControler.iniciarUsuario)

export default UserRoute;