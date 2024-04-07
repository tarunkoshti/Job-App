import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JobCard from '../../Components/JobCard';
import InternshipCard from '../../Components/InternshipCard';
const Bookmark = () => {

  const internshipId = useSelector((state) => state.userReducer.userData?.student.bookmarkinternship);
  console.log(internshipId)
  const internships = useSelector((state) => state.internshipReducer.internshipData);

  const jobId = useSelector((state) => state.userReducer.userData?.student.bookmarkjob)
  console.log(jobId)

  const jobs = useSelector((state) => state.jobReducer.jobData)
  

  return (
    <>
    <div className=' w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
      <ul className='className=' px-10 py-3 bg-gray-300 my-2 flex gap-56 whitespace-nowrap>
        {internshipId && internshipId.map((studentItem, index) => (

          <>
            {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (

              <InternshipCard internship={intern} />

            ))}
          </>
        ))}

      </ul>

    </div>
      <div className=' w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
        <ul className='className=' px-10 py-3 bg-gray-300 my-2 flex gap-56 whitespace-nowrap>
          {jobId && jobId.map((studentItem, index) => (

            <>
              {jobs?.filter(job => job._id === studentItem).map((job, internIndex) => (

                <JobCard job={job} />
                

              ))}
            </>
          ))}

        </ul>

      </div></>
  )
}

export default Bookmark
