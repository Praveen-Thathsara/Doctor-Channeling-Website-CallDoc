import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto bg-white rounded-lg p-8 my-6">
        <img src={assets.contact_image} alt="" className="w-full lg:w-1/2 h-64 lg:h-80 object-cover rounded-lg shadow-md" />
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm font-semibold text-[#00A4A6] uppercase tracking-wide">OUR OFFICE</p>
          <p className="text-gray-700 leading-relaxed">54709 Willms Station <br />Suite 350, Washington, USA</p>
          <p className="text-gray-700 leading-relaxed">Tel: +9449857270 <br />Email: calldoc@gmail.com</p>
          <p className="text-sm font-semibold text-[#00A4A6] uppercase tracking-wide pt-4 border-t border-gray-200">CAREERS AT PRESCRIPTO</p>
          <p className="text-gray-600">Learn more about our teams and job openings.</p>
          <button className="bg-[#00A4A6] hover:bg-[#00898A] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact