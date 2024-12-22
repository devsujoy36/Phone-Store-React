import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Phones from './Components/Phones/Phones.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import PhoneDetails from './Components/Phones/PhoneDetails.jsx'
import SwiperSlider from './Components/Swiper/SwiperSlider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <SwiperSlider />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=a')
      },


      {
        path: '/iphone',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      },
      {
        path: '/ipad',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=ipad')
      },
      {
        path: '/samsung',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=samsung')
      },
      {
        path: '/oppo',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=oppo')
      },
      {
        path: '/huawei',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=nova')
      },
      {
        path: '/watchs',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=watch')
      },


      {
        path: '/phonedetails/:phoneId',
        element: <PhoneDetails />,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/phone/${params.phoneId}`)
      },
      
      
      {
        path: '/signup',
        element: <SignUp />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
