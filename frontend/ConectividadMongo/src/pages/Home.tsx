import { useState, useEffect } from "react";
import { Registro } from "../types/Registro";
import TablaRegistros from "../components/TablaRegistros";
import Formulario from "../components/Formulario";
import axios from 'axios';

const Home = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [opcion, setOpcion] = useState('ver');
  const [tipo,setTipo] = useState('familias')//por defecto mostramos las famillias;
  useEffect(() => {
    const obtenerFamilias = async (): Promise<void> => {
      const response = await axios.get('http://localhost:3000/family');
      setRegistros(response.data);
    }
    obtenerFamilias();
  }, []);

  console.log(tipo)
  return (
    <main className="px-22">
      <h1 className="text-2xl font-bold ml-10 text-gray-200 mt-3">Gestiona la informaciond e tus productos</h1>
       <select onChange={e => setTipo(e.target.value)} className="mt-10 ml-5 w-1/2 text-center" name="" id="">
        <option selected value="familias">--Familias--</option>
        <option value="articulos">--Articulos--</option>
       </select>
       <div className="grid grid-cols-2">
        <Formulario tipo={tipo}/>
        <div>{/*esto es para las tablas */}

        </div>
       </div>
    </main>
  )
}

export default Home;