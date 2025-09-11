import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = "flex item-center justify-between text-sm py-4 mb-5">
        <img className = "w-44 cursor-pointer"  src={assets.logo} alt="" />
        <ul className ="flex sm:justify-center space-x-4">
            <NavLink className="no-underline">
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink className="no-underline">
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink className="no-underline">
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink className="no-underline">
                <li>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Create Account</button>
        </div>
    </div>
  )
}

export default Navbar