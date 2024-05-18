import { conectDB } from "../db/db";
import seedFamilyData from "./FamilyData";
import colors from 'colors';
function seedAllData(){
    //antes que nada conectamos con la base de datos
    conectDB()
    //enviando datos
    console.log(colors.bold.yellow('Datos enviados'))
    seedFamilyData();
}
export default seedAllData;