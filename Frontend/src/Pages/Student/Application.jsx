import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
const Application = () => {

  const dispatch = useDispatch()

  const internshipId = useSelector((state) => state.userReducer.userData?.student.internships)

  const jobId = useSelector((state) => state.userReducer.userData?.student.jobs)

  const internships = useSelector((state) => state.internshipReducer.internshipData)
  // console.log(internships)
  const jobs = useSelector((state) => state.jobReducer.jobData)
  // console.log(jobs)
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
      {/* Internship - Application */}
      <div className='w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg'>
        <h1 className='text-3xl  font-medium py-10 max-md:text-xl flex items-center gap-2'> <FaCircle size={10}/> Internship Application</h1>
        <div className='rounded-xl overflow-hidden border-l border-r overflow-x-auto'
        style={{scrollbarWidth: 'none'}}>
          <table className='w-full table-fixed overflow-auto'>
            <thead>
              <tr className='bg-gray-100 font-semibold border-b-2 border-zinc-500 text-base max-md:text-sm'>
                <th className='w-[300px] max-md:w-[200px] text-left py-4 pl-5 font-medium'>Company</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Profile</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Type</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Applicants</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Review</th>
              </tr>
            </thead>
            <tbody>
              {internshipId && internshipId.map((studentItem, index) => (
                <tr key={index} className='border-b border-zinc-300 max-md:text-sm'>
                  {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
                    <React.Fragment key={internIndex}>
                      <td className='w-[300px] max-md:w-[200px] py-3 pl-5'>{intern.company}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{intern.profile}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{intern.internshiptype}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{intern.students.length}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>
                        <Link to={`/student/internship/read/${studentItem}`} className='block'><span><MdOutlineLibraryBooks /></span></Link>
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Job - Application */}

      </div>

      {/* job applications */}
      <div className='w-[100%] px-5 md:w-[90%] md:mx-auto rounded-lg'>
        <h1 className='text-3xl font-medium py-10 max-md:text-xl flex items-center gap-2 '> <FaCircle size={10} />Job Application</h1>
        <div className='rounded-xl overflow-hidden border-l border-r overflow-x-auto'
        style={{scrollbarWidth:'none'}}>
          <table className='w-full table-fixed'>
            <thead>
              <tr className='bg-gray-100 font-semibold border-b-2 border-zinc-500 text-base max-md:text-sm'>
                <th className='w-[300px] max-md:w-[200px] text-left py-4 pl-5 font-medium'>Company</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Profile</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Type</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Applicants</th>
                <th className='w-[300px] max-md:w-[200px] text-left font-medium'>Review</th>
              </tr>
            </thead>
            <tbody>
              {jobId && jobId.map((studentItem, index) => (
                <tr key={index} className='border-b border-zinc-300 max-md:text-sm'>
                  {jobs?.filter(job => job._id === studentItem).map((job, Index) => (
                    <React.Fragment key={Index}>
                      <td className='w-[300px] max-md:w-[200px] py-3 pl-5'>{job.company}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{job.profile}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{job.jobtype}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>{job.students.length}</td>
                      <td className='w-[300px] max-md:w-[200px] py-3'>
                        <Link to={`/student/job/read/${studentItem}`} className='block'><span><MdOutlineLibraryBooks /></span></Link>
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default Application
