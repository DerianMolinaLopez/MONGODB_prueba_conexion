import { useState, useEffect } from "react";
import { Registro } from "../types/Registro";
import TablaRegistros from "../components/TablaRegistros";
import axios from 'axios';

const Home = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [opcion, setOpcion] = useState('ver');

  useEffect(() => {
    const obtenerFamilias = async (): Promise<void> => {
      const response = await axios.get('http://localhost:3000/family');
      setRegistros(response.data);
    }
    obtenerFamilias();
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpcion(event.target.value);
  }

  return (
    <main className="px-22">
      <h1>Gestiona las gestiona las familias</h1>
      <div className="flex flex-row gap-10 ml-14 mt-10">
        <div>
          <label htmlFor="ver">Ver registros </label>
          <input 
            type="radio" 
            name="registro" 
            id="ver" 
            value="ver" 
            checked={opcion === 'ver'} 
            onChange={handleRadioChange} 
          />
        </div>
        <div>
          <label htmlFor="crear">Crear registro</label>
          <input 
            type="radio" 
            name="registro" 
            id="crear" 
            value="crear" 
            checked={opcion === 'crear'} 
            onChange={handleRadioChange} 
          />
        </div>
      </div>
      <section className="grid grid-col-2 p-5 ">
        
        {opcion === 'ver' && <>
                                <div className="flex flex-row justify-around bg-gray-400 rounded-lg font-bold text-2xl">
                                  <article className="">
                                    <h2>Clave de la familia</h2>
                                  </article>
                                  <article>
                                    <h2>
                                      Nombre de la fmilia
                                    </h2>
                                  </article>
                                </div>
                          <TablaRegistros registros={registros}/>
                             </> }
      </section>
    </main>
  )
}

export default Home;