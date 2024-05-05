import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JobCard from '../../Components/JobCard';
import InternshipCard from '../../Components/InternshipCard';
import { FaCircle } from 'react-icons/fa';
const Bookmark = () => {

  const internshipId = useSelector((state) => state.userReducer.userData?.student.bookmarkinternship);
  console.log(internshipId)
  const internships = useSelector((state) => state.internshipReducer.internshipData);

  const jobId = useSelector((state) => state.userReducer.userData?.student.bookmarkjob)
  console.log(jobId)

  const jobs = useSelector((state) => state.jobReducer.jobData)


  return (
    <>
      {/* Internship - BookMark */}

      <div className='w-[100%] px-5 md:w-[90%] md:mx-auto'>
        <h1 className='text-3xl  font-medium py-10 max-md:text-xl flex items-center gap-2'> <FaCircle size={10} />Bookmark Internship</h1>
        <div id='job' className='w-full flex items-center gap-10 whitespace-nowrap overflow-x-auto snap-mandatory '>
          <ul className='flex items-center gap-10 whitespace-nowrap'>
            {internshipId && internshipId.map((studentItem, index) => (
              <React.Fragment key={index}>
                {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
                  <InternshipCard internship={intern} index={index} key={internIndex} />
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* Jobs - BookMark */}
      <div className='w-[100%] px-5 md:w-[90%] md:mx-auto'>
        <h1 className='text-3xl  font-medium py-10 max-md:text-xl flex items-center gap-2'> <FaCircle size={10} />Bookmark Job</h1>
        <div id='job' className='w-full flex items-center gap-10 whitespace-nowrap overflow-x-auto snap-mandatory '>
          <ul className='flex items-center gap-10 whitespace-nowrap'>
            {jobId && jobId.map((studentItem, index) => (
              <React.Fragment key={index}>
                {jobs?.filter(job => job._id === studentItem).map((job, jobIndex) => (
                  <JobCard job={job} key={jobIndex} index={index} />
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>


  )
}

export default Bookmark
