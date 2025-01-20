import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between ">
      <NavLink>
        <div>
          <img src='' />
        </div>
      </NavLink>

      <div>
        <NavLink>
          <p>
            Home
          </p>
        </NavLink>
        <NavLink>
          <div>
          <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
