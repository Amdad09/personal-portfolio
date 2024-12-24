import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex sticky px-5 justify-between items-center py-2 lg:py-5 bg-gradient-to-r from-red-400 to-orange-500">
      {/* <h3 className="font-bold text-4xl">RAFIQ</h3> */}
      
      <a href="/"><img className="w-[40px] h-[40px] rounded-full" src="../../../src/assets/logo.jpeg" alt="logo" /></a>
      <div className="">
        <div
          onClick={() => setMenu(!menu)}
          className="lg:hidden"
        >
          <TiThMenu />
        </div>
        <div
           className={`absolute top-14 right-0  bg-gradient-to-b duration-1000 from-orange-500 to-red-400 text-white ${
            menu ? "top-12":"-top-96" 
          }  lg:static lg:flex lg:h-auto`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-5 lg:p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
