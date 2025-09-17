import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo,setDocInfo] = useState(null)
  const fetchDocinfo = async ()=>{
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);
  }

  useEffect(()=>{
    fetchDocinfo()

  },[doctors, docId])

  return docInfo && (
    <div>
      {/*doctor details*/}
      <div >
        <div><img src={docInfo.image} alt="" /></div>
      </div>

      <div>
        {/*doc info name degree experience*/}
        <p>{docInfo.name}
           <img src={assets.verified_icon} alt="" />
           </p>
           <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
           </div>

           {/*doctors about*/}
           <div>
            <p>About <img src={assets.info_icon} alt="" /></p>
            <p>{docInfo.about}</p>
           </div>

      </div>
    </div>
  )
}

export default Appointment