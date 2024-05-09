import mongoose from "mongoose";

enum Permissions {
    READ   = 'read',
    WRITE  = 'write',
    UPDATE = 'update',
    DELETE = 'delete'
}

type InterUser = {
    name: string,
    email: string,
    password: string
    permissions : Permissions[] //ser un arreglo de permisos, por que se van acumulando
}

const UserSchema = new mongoose.Schema<InterUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    permissions: {type: [String], required: true}
})
const User = mongoose.model<InterUser>('User',UserSchema)
export default User;