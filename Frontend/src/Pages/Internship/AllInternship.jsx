import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InternshipCard from '../../Components/InternshipCard';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchInternships } from '../../store/Actions/internshipActions';
import ViewInternshipCard from '../../Components/ViewInternshipCard';



const AllInternship = () => {

  const dispatch = useDispatch();
  const internships = useSelector((state) => state.internshipReducer.internshipData)


  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  const navigate = useNavigate()

  // Loading state
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (fetchInternships !== null) {
      setLoader(false)
    }
  })

 

  return (

    <>
          {/* main-div */}
          <div className='w-full  flex items-center justify-center gap-10'>
            {/* ViewInternshipCard - full width on smaller screens */}
            <div id='job' className='w-full h-screen sm:w-full md:w-[400px]  flex flex-col items-center justify-start gap-5 overflow-y-auto snap-mandatory border-zinc-200 border-2 rounded-lg'>
              <div className='flex flex-col items-center py-10 pb-5'>
                {internships &&
                  internships.map((internship, index) => (
                    <ViewInternshipCard key={index} index={index} internship={internship} />
                  ))}
              </div>
            </div>

            {/* Outlet hidden on small screens */}
            <div id='job' className='hidden md:block w-1/2 h-screen overflow-y-auto overflow-x-hidden snap-mandatory border-2 border-zinc-200  rounded-lg'>
              <div className=' shrink-0 py-10'>
                <Outlet />
              </div>
            </div>
          </div>
        </>







  )
}

export default AllInternship
