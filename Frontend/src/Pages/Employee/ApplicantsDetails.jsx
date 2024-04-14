import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ApplicantsDetails = () => {
  // const students = useSelector((state)=> state.employeeReducer.employeeData.employee)

  const { id } = useParams()
  console.log(id)
  const internships = useSelector((state) => state.internshipReducer.internshipData);
  console.log(internships)
  const internshipData = internships?.filter(internship => internship._id == id);
  console.log(internshipData)

  const intern = internshipData;
  return (
    <>
     
    </>
  )
}

export default ApplicantsDetails
