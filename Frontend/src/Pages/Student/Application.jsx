import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allapplyinternship, currentUser } from '../../store/Actions/userActions'
import { allapplyjob } from '../../store/Actions/userActions'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";
const Application = () => {

  const dispatch = useDispatch()

  const internshipId = useSelector((state) => state.userReducer.userData?.student.internships)
  const jobId = useSelector((state) => state.userReducer.userData?.student.jobs)
 
  const internships = useSelector((state) => state.internshipReducer.internshipData)
  console.log(internships)
  const jobs = useSelector((state) => state.jobReducer.jobData)
  console.log(jobs)
  // console.log(internship)


  // const  internship = internships?.filter(internship => internship._id === )

  // console.log(internship)

  // useEffect(() => {
  //   dispatch(allapplyinternship(student._id))
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(allapplyjob(student._id))

  // }, [dispatch])

  // const applications = [...appliedinternships, ...appliedjobs];
  return (
    <>
      <div className='bg-gray-100 mx-20 rounded-lg'>
        <h1 className='text-3xl text-center font-semibold py-4'>Internship Application</h1>
        <div className='flex bg-gray-300 gap-56 px-10 py-2 rounded-lg my-4 font-semibold'>
          <h1 className='w-1/5'>COMPANY</h1>
          <h1 className='w-1/5'>PROFILE</h1>
          <h1 className='w-1/5'> TYPE</h1>
          <h1 className='w-1/5'>NUMBER OF APPLICANTS</h1>
          <h1 className='w-1/5'>REVIEW APPLICATION</h1>
        </div>
        <ul>
          {internshipId && internshipId.map((studentItem, index) => (

            <div key={index}>
              {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
                <div className='px-10 py-3 bg-gray-300 my-2 flex gap-52 ' key={internIndex}>
                  <h1 className='w-1/5'>{intern.company}</h1>
                  <h1 className='w-1/3'>{intern.profile}</h1>
                  <h1 className='w-1/5'>{intern.internshiptype}</h1>
                  <h1 className='w-1/5'>{intern.students.length}</h1>
                  
                  <Link className='w-1/5' to={`/student/internship/singleintership/${studentItem}`}> <span ><MdOutlineLibraryBooks /></span></Link>
                  {/* Ensure proper usage of Link component */}
                </div>
              ))}
            </div>
          ))}

        </ul>
      </div>
      <div className='bg-gray-100 mx-20 rounded-lg my-10'>
        <h1 className='text-3xl text-center font-semibold py-4'>JOB APPLICATION</h1>
        <div className='flex bg-gray-300 gap-56 px-10 py-2 rounded-lg my-4 font-semibold'>
          <h1 className='w-1/5'>COMPANY</h1>
          <h1 className='w-1/5'>PROFILE</h1>
          <h1 className='w-1/5'> TYPE</h1>
          <h1 className='w-1/5'>NUMBER OF APPLICANTS</h1>
          <h1 className='w-1/5'>REVIEW APPLICATION</h1>
        </div>
        <ul>
          {jobId && jobId.map((studentItem, index) => (

            <div key={index}>
              {jobs?.filter(job => job._id === studentItem).map((job, Index) => (
                <div className='px-10 py-3 bg-gray-300 my-2 flex gap-56' key={Index}>
                  <h1 className='w-1/5'>{job.company}</h1>
                  <h1 className='w-1/5'>{job.profile}</h1>
                  <h1 className='w-1/5'>{job.jobtype}</h1>
                  <h1 className='w-1/5'>{job.students.length}</h1>
                  
                
                  <Link className='w-1/5' to={`/student/job/read/${studentItem}`}> <span ><MdOutlineLibraryBooks /></span></Link>
                  {/* Ensure proper usage of Link component */}
                </div>
              ))}
            </div>
          ))}

        </ul>




      </div>
    </>
  )
}

export default Application
