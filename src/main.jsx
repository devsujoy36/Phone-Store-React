import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Phones from './Components/Phones/Phones.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Contact from './Components/Contact/Contact.jsx'
import PhoneDetails from './Components/Phones/PhoneDetails.jsx'
import HomeFeatures from './Components/Home/HomeFeatures.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <HomeFeatures />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      },
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      },
      {
        path: '/phonedetails/:phoneId',
        element: <PhoneDetails />,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/phone/${params.phoneId}`)
      },
      {
        path: '/contact',
        element: <Contact />
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
