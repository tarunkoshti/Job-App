import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../store/Actions/userActions'

const StudentHome = () => {
  const dispatch= useDispatch()
 

  useEffect(()=>{
   dispatch(currentUser())
  },[dispatch])
  return (
    <div>
      student homepage
    </div>
  )
}

export default StudentHome
