import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0) 
  const [slotTime, setSlotTime] = useState('')
  const fetchDocinfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);
  }

  const getAvailableSlots = () => {
    setDocSlots([])

  }

  //getting current date
  let today = new Date()

  for(let i=0; i<7; i++){
    //getting date with index
    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    //setting end time of the date with index
    let endTime = new Date()
    endTime.setHours(today.getDate()+1)
    endTime.sethours(21,0,0,0)

    //setting hours
    if(today.getDate() === currentDate.getDate()){
  }

  useEffect(() => {
    fetchDocinfo()

  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots
  },[docInfo])

  return docInfo && (
    <div>
    <div className='flex flex-col sm:flex-row gap-4'>
      {/*doctor details*/}
      <div >
        <div><img className='bg-[#00A4A6] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" /></div>
      </div>

      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/*doc info name degree experience*/}
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
          <img className='w-5' src={assets.verified_icon} alt="" />
        </p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
        </div>

        {/*doctors about*/}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>
          Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
        </p>

      </div>
    </div>
    </div>
  )
}
}

export default Appointment