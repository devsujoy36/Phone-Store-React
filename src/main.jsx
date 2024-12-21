import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Phones from './Components/Phones/Phones.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/phones',
        element:<Phones/>,
        loader:()=>fetch('https://openapi.programming-hero.com/api/phones?search=a')
      },
      {
        path:'/phone',
        // path:'/phone/:phoneId',
        element:<Phones/>,
        loader:()=>fetch(`https://openapi.programming-hero.com/api/phone/oppo_find_x5_pro-11236`)
        // loader:({params})=>fetch(`https://openapi.programming-hero.com/api/phone/${params.phoneId}`)
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
