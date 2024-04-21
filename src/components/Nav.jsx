import React from "react";
import headerLogo from "../assets/img/logo/LogoBienestarTransparent.png";
import hamburger from "../assets/img/icons/hamburger.png";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import Loginbar from "./Loginbar";

function Nav() {
  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div className="">
          <NavLink to="/">
            <img src={headerLogo} width={200} />
          </NavLink>
        </div>
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                key={item.label}
                to={item.href}
                className="font-montserrat leading-normal text-lg text-default-color-700 hover:text-third-color-500  transition-all hover:font-extrabold hover:border-bottom"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Loginbar />
        </div>
        <div className="hidden max-lg:block justify-end">
          <img src={hamburger} className="w-20" alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
