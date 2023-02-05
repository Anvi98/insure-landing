import React, { useState } from "react";
import hamburger from "./images/icon-hamburger.svg"
import close from "./images/icon-close.svg"
import moblieNav from './images/bg-pattern-mobile-nav.svg'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const open = () => {
    setNavbarOpen(!navbarOpen);
  }

  return ( 
    <div>
      <div className="flex justify-between bg-slate-400">
        <span><h1 className="my-3 mx-5">INSURE</h1> </span>
        <span> 
          <img src={hamburger} alt="" className={`mx-5 my-3 ${navbarOpen ? "hidden": "block"}`} onClick={open}/>
          <img src={close} alt="" className={`mx-5 my-3 ${navbarOpen ? "block": "hidden"}`} onClick={open}/>
        </span>
      </div>

      <div className={`bg-dark-violet h-screen ${navbarOpen? "block": "hidden"}`}>
        <img src={moblieNav} alt="" className="absolute bottom-0" />
        <nav className="w-5/6 m-auto text-center">
          <ul className="text-white font-bold tracking-wide text-lg">
            <li className="p-5"> HOW WE WORK</li>
            <li className="p-5">BLOG</li>
            <li className="p-5">ACCOUNT</li>
            <li className="py-5 border-2 border-white">VIEW PLANS</li>
          </ul>
        </nav>
      </div>
    </div>
   );
}
 
export default Navbar;