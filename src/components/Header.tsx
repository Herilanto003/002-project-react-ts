import LogoImage from "../../public/images/logo.png";
import { IoHomeSharp } from "react-icons/io5";
import { MdArticle } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full h-[60px] flex justify-between px-24 items-center shadow-sm bg-white sticky top-0 z-50">
      <div>
        <img src={LogoImage} alt="logo" className="w-16" />
      </div>

      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <a className="flex items-center gap-1 text-slate-800 font-semibold hover:text-cyan-500 transition capitalize" href="#"><IoHomeSharp /> home</a>
          </li>
          <li>
            <a className="flex items-center gap-1 text-slate-800 font-semibold hover:text-cyan-500 transition capitalize" href="#"><MdArticle /> about</a>
          </li>
          <li>
            <a className="flex items-center gap-1 text-cyan-500 font-semibold hover:text-cyan-500 transition capitalize" href="#"> <FaPhone /> contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}