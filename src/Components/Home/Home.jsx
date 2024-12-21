import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Phones from "../Phones/Phones"

const Home = () => {
  return (
    <div>
        <Header/>
        <Phones/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home