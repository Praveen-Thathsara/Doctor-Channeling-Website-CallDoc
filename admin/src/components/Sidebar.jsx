import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div>{
        aToken && <ul>
            <NavLink to='/admin-dashboard'>
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink to='/all-appointments'>
                <img src={assets.appointment_icon} alt="" />
                <p>Appointments</p>
            </NavLink>
            <NavLink to='/add-doctor'>
                <img src={assets.add_icon} alt="" />
                <p>Add Doctors</p>
            </NavLink>
            <NavLink to='/doctors-list'>
                <img src={assets.people_icon} alt="" />
                <p>Doctor List</p>
            </NavLink>
        </ul>
        }

    </div>
  )
}

export default Sidebar