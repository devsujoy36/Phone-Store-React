
import { NavLink } from "react-router-dom"
import './Header.css'


const Header = () => {
  return (
    <div className="py-5 shadow-lg md:bg-white bg-emerald-500 md:text-black text-white">
      <div className="max-w-screen-2xl md:mx-auto flex flex-wrap gap-3 justify-between items-center px-10">

        <a href="/" className="text-3xl font-semibold ">React Phone Hunter</a>

        <div className="">

          <nav className="flex flex-wrap gap-3 md:gap-10 ">

            <NavLink to={'/'}><button className="font-semibold active:scale-95 hover:underline transition-all">Home</button></NavLink>

            <NavLink to={'/iphone'}><button className="font-semibold active:scale-95 hover:underline transition-all">iPhone</button></NavLink>
            <NavLink to={'/ipad'}><button className="font-semibold active:scale-95 hover:underline transition-all">iPad</button></NavLink>
            <NavLink to={'/samsung'}><button className="font-semibold active:scale-95 hover:underline transition-all">Samsung</button></NavLink>
            <NavLink to={'/oppo'}><button className="font-semibold active:scale-95 hover:underline transition-all">Oppo</button></NavLink>
            <NavLink to={'/huawei'}><button className="font-semibold active:scale-95 hover:underline transition-all">Huawei</button></NavLink>
            <NavLink to={'/watchs'}><button className="font-semibold active:scale-95 hover:underline transition-all">Watchs</button></NavLink>

            <NavLink to={'/signup'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Sign Up</button></NavLink>
          </nav>

        </div>

      </div>
    </div>
  )
}

export default Header