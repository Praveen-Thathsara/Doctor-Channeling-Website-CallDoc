import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext.jsx';



const DoctorDashboard = () => {

  const {dashData, setDashData, getDashData, dToken} = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }

  },[dToken])
  return dashData && (
    <div>

    </div>
  )
}

export default DoctorDashboard