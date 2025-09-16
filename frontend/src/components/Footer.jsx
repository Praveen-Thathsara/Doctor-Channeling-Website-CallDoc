import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex felx-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*left section*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>CallDoc is your trusted online platform to easily book doctor appointments anytime, anywhere. We connect patients with qualified doctors for faster, safer, and more convenient healthcare.</p>

            </div>
            {/*center section*/}
            <div>
                <p className='text-xl font-medium mb-5 text-gray-700'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            {/*right section*/}
            <div>
                <p className='text-xl font-medium mb-5 text-gray-700'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+94703159456</li>
                    <li>calldocsl@gmail.com</li>
                </ul>

            </div>
        </div>
        {/*copy Rights*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2025 CallDoc - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer