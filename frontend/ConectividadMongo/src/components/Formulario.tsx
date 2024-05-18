// Importa React desde el módulo 'react'

import { useState,useEffect } from 'react';
// Define un tipo para las props que se pasarán al componente Formulario
type FormularioProops ={
    tipo: string;
}
type Articulo = {
  nombre: string;
  descripcion: string;
  precio: number;
  stop: number;
  cantidad: number;
  id_familia: string;

}
// Define el componente Formulario
const Formulario = ({tipo}:FormularioProops) => {
  const [Objeto, setObjeto] = useState<Articulo>({
    nombre: '',
    descripcion: '',
    precio: 0,
    stop: 0,
    cantidad: 0,
    id_familia: ''
  })

  useEffect(() => {
    if(tipo==='familias'){

    }
  }, [
    Objeto.nombre,
    Objeto.descripcion,
    Objeto.precio,
    Objeto.stop,
    Objeto.cantidad,
    Objeto.id_familia
  ]) 

  // Renderiza un div vacío
  return (
    <div className='mt-24'>
      <form action="" className='bg-white w-full ml-10 p-5 rounded-2xl space-y-3'>
        {/*de fomra dinamica generamos los inputs dinamicos */}
        {tipo === 'familias'?(
        <>
        <div className=''>
          <label htmlFor="">Nombre de la familia</label>
          <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        </>)
        :
        (
        <>
        <div>
          <label htmlFor="">Nombre del articulo</label>
           <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        <div>
          <label htmlFor="">Descripcion del articulo</label>
           <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        <div>
          <label htmlFor="">Precio del articulo</label>
           <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        <div>
          <label htmlFor="">Stop maximo</label>
           <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        <div>
          <label htmlFor="">Cantidad iniciar</label>
          <input type="text" className='w-full'/>
        </div>
        <div>
          <label htmlFor="">ID de la familia a asociar</label>
           <input type="text" className='mb-4 w-full border-b-4 bg-gray-100 rounded-t-lg border-green-400'/>
        </div>
        </>)
        }
        <button className='bg-green-600 w-full rounded-md shadow-2xl text-white text-2xl font-bold'>Crear {tipo==='familia'?'Familia':'Articulo'}</button>
      </form>
    </div>
  )
}

// Exporta el componente Formulario como el export por defecto de este módulo
export default Formulario