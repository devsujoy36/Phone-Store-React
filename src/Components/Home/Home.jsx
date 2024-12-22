import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import HomeFeatures from "./HomeFeatures"

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeFeatures/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Home