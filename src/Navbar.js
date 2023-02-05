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
    <header className="">
      <div className="relative flex justify-between w-full sm:w-5/6 sm:m-auto ">
        <span><h1 className="my-3 mx-5">INSURE</h1> </span>
        <span className="block sm:hidden"> 
          <img src={hamburger} alt="" className={`mx-5 my-3 ${navbarOpen ? "hidden": "block"}`} onClick={open}/>
          <img src={close} alt="" className={`mx-5 my-3 ${navbarOpen ? "block": "hidden"}`} onClick={open}/>
        </span>
        <span className="hidden sm:block m-3">
          <nav className="">
            <ul className="flex justify-around tracking-wide">
            <li className="px-3 py-2 text-dark-grayish-violet"> HOW WE WORK</li>
            <li className="px-3 py-2 text-dark-grayish-violet">BLOG</li>
            <li className="px-3 py-2 text-dark-grayish-violet">ACCOUNT</li>
            <li className="ml-6 px-3 py-2 border-2 border-black">VIEW PLANS</li>
            </ul>
          </nav>
        </span>
      </div>

      <div className={`bg-dark-violet absolute w-full h-screen ${navbarOpen? "block": "hidden"}`}>
        <img src={moblieNav} alt="" className="absolute bottom-0 right-0" />
        <nav className="w-5/6 m-auto text-center">
          <ul className="text-white font-bold tracking-wide text-lg">
            <li className="p-5"> HOW WE WORK</li>
            <li className="p-5">BLOG</li>
            <li className="p-5">ACCOUNT</li>
            <li className="py-5 border-2 border-white">VIEW PLANS</li>
          </ul>
        </nav>
      </div>
    </header>
   );
}
 
export default Navbar;