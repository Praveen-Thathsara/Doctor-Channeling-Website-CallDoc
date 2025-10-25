import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext.jsx';



const DoctorAppointments = () => {


  const { dToken, getAppointments, appointments } = useContext(DoctorContext);

useEffect(() => {
  if (dToken) {
    getAppointments();
  }
}, [dToken])
  return (
    <div>DoctorAppointments</div>
  )
}

export default DoctorAppointments