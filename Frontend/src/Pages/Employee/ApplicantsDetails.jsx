import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import StudentInfo from './StudentInfo'


const ApplicantsDetails = () => {

  

  const { id } = useParams()
  // console.log(id)
  const internships = useSelector((state) => state.internshipReducer.internshipData);
  // console.log(internships)
  const internship = internships?.find(internship => internship._id == id);
  // console.log(internship)

  const students = internship && internship?.students
  console.log(students)

  const dispatch = useDispatch()
 

  

  // useEffect(() => {
  //   students.map((studentId) => (
  //     dispatch(getStudentResume(studentId))
  //   ))
  // }, [])

  
  // console.log(updatedResume)

  return (
    <>
      <div className='h-fitcontent w-screen p-16 relative'>
        <div className='flex py-4 bg-gray-200 rounded-lg px-10 mx-16 font-semibold'>
          <h1 className='w-1/4'>First Name</h1>
          <h1 className='w-1/4'>Last Name</h1>
          <h1 className='w-1/4'>Email</h1>
          <h1 className='w-1/4'>Applicant Resume</h1>
        </div>
        <ul>
          {internship && internship?.students.map((studentId) => (
            // <div>
            //   <div className='py-3 px-12 bg-gray-100 rounded-lg flex gap-32 mx-16'>
            //     <h1 className='w-1/4'>{updatedResume?.details?.firstname}</h1>
            //     <h1 className='w-1/4'></h1>
            //     <h1 className='w-1/4'></h1>
            //     <div >
            //       <RiDownload2Line onClick={() => handleDownload(studentId)} size={25} />
            //     </div>
            //   </div>
            // </div>
            <div>
              <StudentInfo id={studentId}/>
            </div>
          ))
          }
        </ul>
      </div>
      
    </>
  )
}

export default ApplicantsDetails
