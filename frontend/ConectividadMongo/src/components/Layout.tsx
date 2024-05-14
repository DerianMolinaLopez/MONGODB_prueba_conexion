import {Outlet} from'react-router-dom'
import NavBar from './NavBar.'
const Layout = () => {
  return (
    <div className='flex flex-row h-screen'>
        <NavBar/>
        <div className='w-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
