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
  console.log(intern)
  
  return (
    <>
      <div className='h-fitcontent w-screen bg-slate-500 p-16'>
        <div className='flex py-4 bg-gray-200 rounded-lg px-10 mx-16 font-semibold'>
          <h1 className='w-1/4'>First Name</h1>
          <h1 className='w-1/4'>Last Name</h1>
          <h1 className='w-1/4'>Email</h1>
          <h1 className='w-1/4'>Applicant Resume</h1>
        </div>
        <ul>
          {intern && intern[0].students.map((item, index) => (
            <div className='py-3 px-12 bg-gray-100 rounded-lg flex gap-32 mx-16'>
              <h1 className='w-1/4'>{intern[0].students[index].firstname}</h1>
              <h1 className='w-1/4'>{intern[0].students[index].lastname}</h1>
              <h1 className='w-1/4'>{intern[0].students[index].email}</h1>
              <Link className='py-2 px-3 w-1/4 bg-gray-200 rounded-lg' to={`/employee/applicants/resume/${intern[0].students[index]._id}`}>Resume→</Link>
              
            </div>
        ))

          }

        </ul>

      </div>
    </>
  )
}

export default ApplicantsDetails
