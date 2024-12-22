
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="py-5 shadow-lg">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-semibold">React Phone Hunter</a>
        <div className="flex gap-10">
          <NavLink to={'/'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Home</button></NavLink>
          <NavLink to={'/phones'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Phone</button></NavLink>
          <NavLink to={'/contact'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Contact</button></NavLink>
          <NavLink to={'/signup'}><button className="font-semibold active:scale-95 hover:text-emerald-500 transition-all">Sign Up</button></NavLink>
          </div>
      </div>
    </div>
  )
}

export default Header