import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
const ResumeTemp = () => {
  const { id } = useParams()
  console.log(id)
  const internships = useSelector((state) => state.internshipReducer.internshipData);
  console.log(internships)
  const internshipData = internships?.filter(internship => internship._id == id);
  console.log(internshipData)

  const intern = internshipData;
  console.log(intern)
  console.log(intern&&intern[0]?.students[0]?.resume)
  
  return (
    <div>
      
    </div>
  )
}

export default ResumeTemp
