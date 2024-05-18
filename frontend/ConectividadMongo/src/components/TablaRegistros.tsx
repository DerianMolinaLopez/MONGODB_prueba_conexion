import { Registro } from '../types/Registro';

type TablaRegistrosProps = {
    registros: Registro[];
}    

const TablaRegistros = ({registros}:TablaRegistrosProps) => {
  console.log(registros)
  return (
    <>
     <article className='space-y-5 mt-5'>
       {registros.map(registro=>(
         <article className='flex justify-around' key ={registro._id}>
          <div className=''>
            <h3>{registro._id}</h3>
          </div>
          <div className=''>
            <h3>{registro.fam_nombre}</h3>
            <article>
              <button>Modificar</button>
              <button>Eliminar</button>
            </article>
          </div>
         </article>
       ))}
     </article>
    </>
  )
}

export default TablaRegistros