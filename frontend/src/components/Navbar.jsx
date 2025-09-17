import React, {useState} from 'react';
import { assets } from '../assets/assets';
import { NavLink,useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token , setToken] = useState(true);

  // This function will determine the classes for the NavLink
  const getNavLinkClass = ({ isActive }) => {
    // We use a template literal to build the class string
    return `
      pb-1  // Add some padding at the bottom
      ${isActive 
        ? 'text-black border-b-2 border-blue-600' // Classes for the ACTIVE link
        : 'text-gray-500 border-b-2 border-transparent' // Classes for INACTIVE links
      }
    `;
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />

      {/* Corrected UL structure */}
      <ul className="flex sm:justify-center space-x-6">
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={getNavLinkClass}>
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getNavLinkClass}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div>
        {
            token 
            ? <div className = 'flex items-center gap-2 cursor-pointer group relative' >
                <img className = 'w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className = 'w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
            :<button onClick={()=>navigate('/login')} className="bg-[#00A4A6] text-white px-8 py-3 rounded-full hover:bg-[#00898A] transition-colors duration-200">
          Create Account
        </button>
        }
        
      </div>
    </div>
  );
};

export default Navbar;