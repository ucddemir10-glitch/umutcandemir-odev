import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <header className='bg-blue-900 text-white px-4 py-2 mb-4' >
        <nav className='flex items-center justify-between max-w-7x1 mx-auto '>
          <div className="flex items-start">
            <img src={logo} alt=""  className="w-14 h-12"/>
            <div  className=' font-bold text-2xl ' > U&D
          </div>
            </div>
            <div className='flex gap-6'>
                <Link to="/">Anasayfa</Link>
                <Link to="/sepetim">Sepetim</Link>
            </div>
        </nav>
    </header>
    </>
  )
}
