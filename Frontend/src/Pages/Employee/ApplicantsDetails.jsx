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
  console.log(intern&&intern[0]?.students[0]?.resume)
  return (
    <>
      <div className='h-fitcontent w-screen bg-slate-500 p-16'>
        <ul>
          {intern && intern.map((item, index) => (
            <div className='py-7 bg-blue-300 rounded-lg flex gap-32'>
              <h1>{intern[index].students[index].firstname}</h1>
              <h1>{intern[index].students[index].lastname}</h1>
              <h1>{intern[index].students[index].email}</h1>
              <Link to={`/employee/applicants/resume/${intern[index].students[index]._id}`}>Resume</Link>
              
            </div>
        ))

          }

        </ul>

      </div>
    </>
  )
}

export default ApplicantsDetails
