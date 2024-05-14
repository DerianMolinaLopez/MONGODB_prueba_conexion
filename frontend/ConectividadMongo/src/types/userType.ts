type UserType = {
    name: string,
    email: string,
    password: string
    permissions : String[] //ser un arreglo de permisos, por que se van acumulando
}
export default UserType;