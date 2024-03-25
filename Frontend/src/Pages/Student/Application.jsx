import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allapplyinternship, currentUser } from '../../store/Actions/userActions'
import { allapplyjob } from '../../store/Actions/userActions'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";
const Application = () => {

  const dispatch = useDispatch()
  const appliedinternships = useSelector((state) => state.internshipReducer.internshipData?.internships);

  const appliedjobs = useSelector((state) => state.jobReducer.jobData?.jobs)

  console.log(appliedjobs)
  console.log(appliedinternships)

  const student = useSelector((state) => state.userReducer.userData?.student)
  
  
  useEffect(() => {
    dispatch(allapplyinternship(student._id))
  }, [dispatch])

  useEffect(() => {
    dispatch(allapplyjob(student._id))

  }, [dispatch])

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
          {appliedinternships && appliedinternships.map((i, index) => (

            <div className='px-10 py-3 bg-gray-300 my-2 flex gap-56 whitespace-nowrap'>
              <h1 className='w-1/5'>{i.company}</h1>
              <h1 className='w-1/5'>{i.profile}</h1>
              <h1 className='w-1/5' >{i.internshiptype}</h1>
              <h1 className='w-1/5'>{i.students.length}</h1>
              <Link className='w-1/5'><MdOutlineLibraryBooks /></Link>
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
          {appliedjobs && appliedjobs.map((i, index) => (

            <div className='px-10 py-3 bg-gray-300 my-2 flex gap-56 whitespace-nowrap'>
              <h1 className='w-1/5'>{i.company}</h1>
              <h1 className='w-1/5'>{i.profile}</h1>
              <h1 className='w-1/5' >{i.jobtype}</h1>
              <h1 className='w-1/5'>{i.students.length}</h1>
              <Link className='w-1/5'><MdOutlineLibraryBooks /></Link>
            </div>
          ))}
        </ul>




      </div>
    </>
  )
}

export default Application
