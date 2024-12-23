import { Outlet, useLocation, useNavigation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Loader from "../Loader/Loader"

const Home = () => {

  const navigation = useNavigation()
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
        <Header/>
        {/* <Loader/> */}
        {
            navigation.state === 'loading' ? <Loader/> : <Outlet/>
        }
        <Footer/>
    </div>
  )
}

export default Home