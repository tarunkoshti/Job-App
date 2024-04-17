import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";

const EmployeeApplication = () => {
  const internshipId = useSelector((state) => state.employeeReducer.employeeData?.employe.internships)
  // console.log(internshipId)
  const jobId = useSelector((state) => state.employeeReducer.employeeData?.employe?.jobs)
  // console.log(jobId)


  const internships = useSelector((state) => state.internshipReducer?.internshipData)
  // console.log(internships)

  const jobs = useSelector((state) => state.jobReducer?.jobData);
  // console.log(jobs)

  return (
    <div>
      <div className='bg-gray-100 mx-20 rounded-lg'>
        <h1 className='text-3xl text-center font-semibold py-4'>Internship Application</h1>
        <div className='flex bg-gray-300 gap-32 px-10 py-2 whitespace-nowrap rounded-lg my-4 font-semibold'>
          <h1 className='w-1/6'>COMPANY</h1>
          <h1 className='w-1/6'>PROFILE</h1>
          <h1 className='w-1/6'> TYPE</h1>
          <h1 className='w-1/6'>NUMBER OF APPLICANTS</h1>
          <h1 className='w-1/6'>REVIEW APPLICATION</h1>
          <h1 className='w-1/6'>View Applicants</h1>
        </div>
        <ul>
          {internshipId && internshipId.map((studentItem, index) => (

            <div key={index}>
              {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
                <div className='px-10 py-3 bg-gray-300 my-2 flex gap-32 ' key={internIndex}>
                  <h1 className='w-1/6'>{intern.company}</h1>
                  <h1 className='w-1/6'>{intern.profile}</h1>
                  <h1 className='w-1/6 '>{intern.internshiptype}</h1>
                  <h1 className='w-1/6'>{intern?.students.length}</h1>

                  <Link className='w-1/6' to={`/student/internship/singleintership/${studentItem}`}> <span ><MdOutlineLibraryBooks /></span></Link>

                  <Link className='w-1/6' to={`/employee/application/applicants/${studentItem}`}><button className='px-8 py-2 bg-gray-400 rounded-lg'>View</button></Link>
                </div>
              ))}
            </div>
          ))}

        </ul>
      </div>
      <div className='bg-gray-100 mx-20 rounded-lg my-10'>
        <h1 className='text-3xl text-center font-semibold py-4'>JOB APPLICATION</h1>
        <div className='flex bg-gray-300 gap-32 whitespace-nowrap px-10 py-2 rounded-lg my-4 font-semibold'>
          <h1 className='w-1/6'>PROFILE</h1>
          <h1 className='w-1/6'>COMPANY</h1>
          <h1 className='w-1/6'> TYPE</h1>
          <h1 className='w-1/6'>NUMBER OF APPLICANTS</h1>
          <h1 className='w-1/6'>REVIEW APPLICATION</h1>
          <h1 className='w-1/6'>View Applicants</h1>
        </div>
        <ul>
          {jobId && jobId.map((studentItem, index) => (

            <div key={index}>
              {jobs?.filter(job => job._id === studentItem).map((job, Index) => (
                <div className='px-10 py-3 bg-gray-300 my-2 flex gap-56' key={Index}>
                  <h1 className='w-1/5'>{job.company}</h1>
                  <h1 className='w-1/5'>{job.profile}</h1>
                  <h1 className='w-1/5'>{job.jobtype}</h1>
                  <h1 className='w-1/5'>{job?.students.length}</h1>

                  <Link className='w-1/5' to={`/student/job/read/${studentItem}`}> <span ><MdOutlineLibraryBooks /></span></Link>
                </div>
              ))}
            </div>
          ))}

        </ul>




      </div>
    </div>
  )
}

export default EmployeeApplication
