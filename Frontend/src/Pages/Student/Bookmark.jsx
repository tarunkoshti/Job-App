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
    // <>

    //   {/* Internship - BookMark */}

    //   <div className='flex items-center justify-center py-2 pt-10'>
    //     <h1 className='text-3xl font-semibold'>All Bookmark Internships</h1>
    //   </div>
    //   <div id='job' className='h-3/5 w-full flex items-center gap-10 py-6 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory px-10'>

    //     <ul className='flex items-center px-10 py-4  gap-10 whitespace-nowrap'>
    //     {internshipId && internshipId.map((studentItem, index) => (

    //       <>
    //         {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (

    //           <InternshipCard internship={intern} />

    //         ))}
    //       </>
    //     ))}

    //   </ul>
         
    //   </div>

    //   {/* Jobs - BookMark */}

    //   <div className='flex items-center justify-center py-2 '>
    //     <h1 className='text-3xl font-semibold'>All Bookmark Jobs</h1>
    //   </div>
    //   <div id='job' className='h-3/5 w-full flex items-center gap-10 py-6 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory px-10'>

    //     <ul className='flex items-center px-10 py-4 gap-10 whitespace-nowrap'>
    //     {jobId && jobId.map((studentItem, index) => (

    //         <>
    //           {jobs?.filter(job => job._id === studentItem).map((job, internIndex) => (

    //             <JobCard job={job} />
                

    //           ))}
    //         </>
    //       ))}


    //   </ul>
         
    //   </div>
      
    //   </>
    
    <>
  {/* Internship - BookMark */}
  <div className='flex items-center justify-center py-2 pt-10'>
    <h1 className='text-3xl font-semibold text-center'>All Bookmark Internships</h1>
  </div>
  <div id='job' className='h-3/5 w-full flex items-center gap-10 py-6 whitespace-nowrap overflow-x-auto snap-mandatory px-2 sm:px-10'>
    <ul className='flex items-center px-2 sm:px-10 py-4 gap-10 whitespace-nowrap'>
      {internshipId && internshipId.map((studentItem, index) => (
        <React.Fragment key={index}>
          {internships?.filter(internship => internship._id === studentItem).map((intern, internIndex) => (
            <InternshipCard internship={intern} index={index} key={internIndex} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  </div>

  {/* Jobs - BookMark */}
  <div className='flex items-center justify-center py-2'>
    <h1 className='text-3xl font-semibold text-center'>All Bookmark Jobs</h1>
  </div>
  <div id='job' className='h-3/5 w-full flex items-center gap-10 py-6 whitespace-nowrap overflow-x-auto snap-mandatory px-2 sm:px-10'>
    <ul className='flex items-center px-2 sm:px-10 py-4 gap-10 whitespace-nowrap'>
      {jobId && jobId.map((studentItem, index) => (
        <React.Fragment key={index}>
          {jobs?.filter(job => job._id === studentItem).map((job, jobIndex) => (
            <JobCard job={job} key={jobIndex} index={index} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  </div>
</>


  )
}

export default Bookmark
