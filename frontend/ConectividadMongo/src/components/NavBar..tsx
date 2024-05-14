
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='w-1/4 bg-green-700 px-14'>
        <ul className='flex flex-col gap-10 text-white font-semibold text-3xl mt-52'>
            <li className='m-2'>
            <Link to='/home/familias'>Familias</Link>
            </li>
            <li className='m-2'>
            <Link to='/about'>Productos</Link>
            </li>
           
        </ul>
    </nav>
  )
}

export default NavBar
