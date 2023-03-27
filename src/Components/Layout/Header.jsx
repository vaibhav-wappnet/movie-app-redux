import React from 'react'
import Logo from "../../Assets/Logo_white.png"

import { NavLink } from 'react-router-dom'
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      <div className="header px-3 flex items-center justify-between text-white bg-slate-900 h-16">
        <NavLink to="/">
          <div className="logo-container">
            <img src={Logo} className="h-6 w-ful" alt="Amaze Movies" />
          </div>
        </NavLink>
        <div className="profile-container">
        <BiUserCircle className="text-4xl" />
        </div>
      </div>
    </div>
  )
}

export default Header;