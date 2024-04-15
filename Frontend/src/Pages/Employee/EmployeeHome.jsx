import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsStars } from "react-icons/bs";
import { useSelector,useDispatch } from 'react-redux';
import { fetchJobs } from '../../store/Actions/jobActions';
import { fetchInternships } from '../../store/Actions/internshipActions';
const EmployeeHome = () => {

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector((state) => state.internshipReducer.internshipData)
  const students = useSelector((state)=> state.userReducer.userData)
  useEffect(() => {
   
    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error)
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);
   

  useEffect(()=>{
    dispatch
  },[dispatch])
  return (
    
            <>
              <div className="w-full bg-white font-sans">
                <div className="flex flex-col items-center md:gap-6 px-4 md:px-0 pb-8">
                  <div className="flex flex-col items-center mt-10 md:mt-24">
                    <h1 className="text-center text-[#1F2937] text-4xl md:text-6xl font-semibold leading-relaxed md:pl-12 ">
                      Find the best <span className='text-[#1E3A8A]'>Candidates</span> for <br /> your Company
                    </h1>
                    <p className="pl-4 md:pl-10 mt-8 text-[#1F2937] text-base md:text-lg text-center tracking-wide">
                      Get more sales and maximize the conversion rates. Discover the most productive channels.
                    </p>
                    <p className='mt-2 text-center'>Discover the optimal match for your Company and get the best results together</p>
                    <Link to=""><button className='p-4 px-10 py-3 mt-10 bg-[#1f2937] text-white font-semibold rounded-lg'>Get Started</button></Link>
                  </div>
                </div>

                <div className='border-t-2 border-b-2 border-zinc-200 h-auto rounded-lg mx-4 md:mx-10 my-10 px-4 md:px-10 py-10 text-[1F2937]'>
                  <div className='h-auto rounded-lg'>
                    <h1 className="text-center text-[#1F2937] text-4xl md:text-5xl font-semibold md:pl-12 py-6 tracking-wide leading-relaxed">
                      Leverage Global World-class <br /> talented people
                    </h1>
                    <p className="pl-4 md:pl-10 text-[#1F2937] leading-normal mt-2 text-base md:text-lg text-center tracking-wide">
                      Discover the optimal match for your startup and get the best results together
                    </p>
                  </div>
                  <div className='h-auto rounded-lg flex flex-col md:flex-row gap-8 md:gap-20 overflow-hidden px-4 md:px-20 py-8'>

                     <div className='bg-white border-2 h-[280px] md:h-auto md:max-w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500 flex flex-col justify-between'>
                    <div className='py-8 px-6 md:py-10 md:px-10'>
                      <div className='w-full flex justify-center'>
                        <span className='text-3xl md:text-4xl'><BsStars /></span>
                      </div>
                      <div className='text-center mt-4'>
                        <h3 className='font-semibold text-xl md:text-2xl'>80% Faster Hiring</h3>
                        <p className='mt-2 text-sm md:text-base'>No more back and forth to find the right qualified candidates</p>
                      </div>
                    </div>
                    </div>

                     <div className='bg-white border-2 h-[280px] md:h-auto md:max-w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500 flex flex-col justify-between'>
                    <div className='py-8 px-6 md:py-10 md:px-10'>
                      <div className='w-full flex justify-center'>
                        <span className='text-3xl md:text-4xl'><BsStars /></span>
                      </div>
                      <div className='text-center mt-4'>
                        <h3 className='font-semibold text-xl md:text-2xl'>Decrease Spendings</h3>
                        <p className='mt-2 text-sm md:text-base'>Find the right candidates and pay cheaper than market price</p>
                      </div>
                    </div>
                    </div>

                   <div className='bg-white border-2 h-[280px] md:h-auto md:max-w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500 flex flex-col justify-between'>
                    <div className='py-8 px-6 md:py-10 md:px-10'>
                      <div className='w-full flex justify-center'>
                        <span className='text-3xl md:text-4xl'><BsStars /></span>
                      </div>
                      <div className='text-center mt-4'>
                        <h3 className='font-semibold text-xl md:text-2xl'>Top 0.1% Candidates</h3>
                        <p className='mt-2 text-sm md:text-base'>Find the right candidates and pay cheaper than market price</p>
                      </div>
                    </div>
                    </div>

                  </div>
                </div>

                <div className='text-center mx-4 md:mx-10 rounded-lg py-20'>
                  <h1 className="text-center text-[#1F2937] text-4xl md:text-5xl font-semibold leading-relaxed md:pl-12 ">Start looking for the Best Talent </h1>
                  <p className="pl-4 md:pl-10 py-4 text-[#1F2937] leading-normal mt-2 text-base md:text-lg text-center tracking-wide">
                    Get more sales and maximize the conversion rates. Discover the most productive channels.
                  </p>
                  <Link to=""><button className='p-4 py-3 px-10 mt-8 bg-[#1f2937] text-white font-semibold rounded-lg'>Get Started</button></Link>
                </div>
              </div>
            </>

  )
}

export default EmployeeHome
