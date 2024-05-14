import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import Home from './pages/Home.tsx'
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import Layout from './components/Layout.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/home',
    element: <Layout/>,
    children:[
      {
        path: '/home/familias',
        element: <Home/>
      }
    
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
