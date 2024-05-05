import React, { useEffect, useState } from 'react'
import ViewJobCard from '../../Components/ViewJobCard';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchJobs } from '../../store/Actions/jobActions';

const AllJob = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);


  useEffect(() => {

    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error)
    }
  }, [dispatch]);

  const navigate = useNavigate()

  // Loading state
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (fetchJobs !== null) {
      setLoader(false)
    }
  })

 

  return (

   <>
      {/* main-div */}
      <div className='w-full  flex items-center justify-center gap-10'>
        {/* ViewJobCard - full width on smaller screens */}
        <div id='job' className='w-full h-screen md:w-[400px] sm:w-full  flex flex-col items-center justify-start gap-5 overflow-y-auto snap-mandatory border-2 border-zinc-200 rounded-xl'>
          <div className='flex flex-col items-center py-10 pb-5'>
            {jobs &&
              jobs.map((job, index) => (
                <ViewJobCard key={index} index={index} job={job} />
              ))}
          </div>
        </div>

        {/* Outlet hidden on small screens */}
        <div id='job' className='hidden md:block w-1/2 h-screen  overflow-y-auto overflow-x-hidden snap-mandatory border-2 border-zinc-200 rounded-xl '>
          <div className=' shrink-0 py-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </>



  )
}

export default AllJob
