import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from 'react';

import axios from 'axios'
function App() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [autenticado,setAutenticado] = useState(false)
  const  handleIniciar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if([usuario,password].includes('')){
      toast.error('Todos los campos son obligatorios')
      return
    } 
    const iniciarSesion = async () => {
  const response = await axios.get(`http://localhost:3000/user/begin/${usuario}/${password}`)
  console.log(response.data)
  if(response.data && response.data.message !== 'User not found'){
    setAutenticado(true)
    //mandamos al local storge
    return
  }
  if(response.data && response.data.message ==='User not found'){
       toast.error('Usuario o contraseña incorrecta')
  } else {
       toast.error('Error desconocido')
  }
}
     iniciarSesion()

  }

  return (
    <>
    <div className='fondoPrincipal h-screen w-screen flex justify-center items-center'>
      <form onSubmit={handleIniciar} action="" className="bg-white rounded-lg w-1/3 space-y-10 p-10">
        <h1 className="titulo">
          Inicia para continuar
        </h1>
        <picture className="flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#014E3D" className="w-25 h-20">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         </svg>
        </picture>
        <div>
          <div className="flex flex-row mb-10 gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#014E3D" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          <input value={usuario} onChange={e=> setUsuario(e.target.value)} type="text" className="w-full border-green-800 border-b-2 " placeholder="Nombre de usuario" />
          </div>
          <div className="flex flex-row gap-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#014E3D" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>

          <input  value={password} onChange={e=> setPassword(e.target.value)} 
                 type="text" name="" className="w-full border-green-800 border-b-2" placeholder="contraseña" id="" />
          </div>
        </div>
        <input type="submit" value={'Iniciar'} className="bg-green-800 cursor-pointer w-full rounded p-2  text-white fot-semibold text-3xl" />


      </form>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
