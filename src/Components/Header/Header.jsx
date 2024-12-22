
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="py-5 shadow-lg">
      <div className="max-w-screen-2xl md:mx-auto flex flex-wrap gap-3 md:justify-between md:items-center mx-10">
        <a href="" className="text-2xl font-semibold">React Phone Hunter</a>

        <div className="">

          <div className="md:flex  mx-5 gap-3 md:gap-10">

            <NavLink to={'/'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Home</button></NavLink>

            <NavLink to={'/iphone'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">iPhone</button></NavLink>
            <NavLink to={'/ipad'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">iPad</button></NavLink>
            <NavLink to={'/samsung'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Samsung</button></NavLink>
            <NavLink to={'/oppo'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Oppo</button></NavLink>
            <NavLink to={'/huawei'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Huawei</button></NavLink>
            <NavLink to={'/watchs'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Watchs</button></NavLink>

            <NavLink to={'/signup'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Sign Up</button></NavLink>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header