import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allapplyinternship, currentUser } from '../../store/Actions/userActions'
import { allapplyjob } from '../../store/Actions/userActions'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from "react-icons/md";
const Application = () => {

  const dispatch = useDispatch()

  const internshipId = useSelector((state) => state.userReducer.userData?.student.internships)
  // console.log(internshipId)
  const jobId = useSelector((state) => state.userReducer.userData?.student.jobs)
  // console.log(jobId)
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
                <div className=' mx-2 md:mx-20 rounded-lg overflow-x-auto border-2 border-zinc-300 mt-16'>
                  <h1 className='text-3xl text-center font-semibold py-10 '>Internship Application</h1>
                  <div className='shadow-md'>
                    <table className='w-full table-fixed'>
                      <thead>
                        <tr className='bg-gray-100 font-semibold border-b-2 border-zinc-500 text-sm'>
                          <th className='w-1/6 md:w-1/5 py-4 text-sm'>Company</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Profile</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Type</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Applicants</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Review</th>
                        </tr>
                      </thead>
                      <tbody>
                        {internshipId && internshipId.map((studentItem, index) => (
                          <tr key={index} className='border-b border-zinc-300'>
                            {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
                              <React.Fragment key={internIndex}>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-10 py-3 md:py-3'>{intern.company}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-18 py-3 text-center'>{intern.profile}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-22 py-3 text-center'>{intern.internshiptype}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-16 lg:pl-24 py-3'>{intern.students.length}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-16 lg:pl-24 py-3'>
                                  <Link to={`/student/internship/read/${studentItem}`} className='block text-center'><span><MdOutlineLibraryBooks /></span></Link>
                                </td>
                              </React.Fragment>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                  {/* Job - Application */}
                <div className=' mx-2 md:mx-20 rounded-lg overflow-x-auto border-2 border-zinc-300 mt-16'>
                  <h1 className='text-3xl text-center font-semibold py-10 '>Job Application</h1>
                  <div className='shadow-md'>
                    <table className='w-full table-fixed'>
                      <thead>
                        <tr className='bg-gray-100 font-semibold border-b-2 border-zinc-500 text-sm'>
                          <th className='w-1/6 md:w-1/5 py-4 text-sm'>Company</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Profile</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Type</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Applicants</th>
                          <th className='w-1/6 md:w-1/5 text-sm'>Review</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobId && jobId.map((studentItem, index) => (
                          <tr key={index} className='border-b border-zinc-300'>
                            {jobs?.filter(job => job._id === studentItem).map((job, Index) => (
                              <React.Fragment key={Index}>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-10 py-3 md:py-3'>{job.company}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-18 py-3 text-center'>{job.profile}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-22 py-3 text-center'>{job.jobtype}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-16 lg:pl-24 py-3'>{job.students.length}</td>
                                <td className='w-1/5 md:w-1/6 pl-4 md:pl-16 lg:pl-24 py-3'>
                                  <Link to={`/student/job/read/${studentItem}`} className='block text-center'><span><MdOutlineLibraryBooks /></span></Link>
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
//           
           
            )
}

export default Application
