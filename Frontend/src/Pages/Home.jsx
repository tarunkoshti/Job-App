import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInternships } from '../store/Actions/internshipActions';
import { fetchJobs } from '../store/Actions/jobActions';
import InternshipCard from '../Components/InternshipCard';
import JobCard from '../Components/JobCard';
import Button from '../Components/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { LuArrowDown } from "react-icons/lu";
import LoadingPage from '../Components/Loading/LoadingPage';

const Home = () => {

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector((state) => state.internshipReducer.internshipData)

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

  const navigate = useNavigate()

  // Loading state
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (fetchInternships !== null && fetchJobs !== null) {
      setLoader(false)
    }
  })

  // if (loader) {
  //   return (
  //     <LoadingPage />
  //   )
  // }

  function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the color code in hexadecimal format
    const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

    return colorCode;
  }

  return (

    <div className="w-full ">
      <div className=" w-full h-screen flex justify-center px-10">
        <div className="pt-10 md:pt-20 md:flex flex-col items-center">
          <div className='flex flex-wrap gap-4'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider">Welcome To
            </h1>
            < img className='h-10 sm:h-12 md:h-14' src="Job_Seeking2-removebg-preview.png" alt="./logo.jpg" />
          </div>
          <span className='text-3xl md:text-4xl block mt-3 tracking-wide'>Your Gateway to Career Opportunities!</span>

          <p className="text-gray-500 mt-10 text-base md:text-lg md:text-center tracking-wider">Discover endless opportunities and unlock your career Potential and explore <br /> endless possibilities with  <span className="font-semibold">Hirer- An amazing job search platform.</span></p>

          <Button className='mt-10 md:mt-20 flex items-center gap-2 py-3'
            onClick={() => navigate('/student/signup')}>
            Get Started Now
            <MdArrowOutward />
          </Button>

          <div class="animate-bounce bg-[#2507B3] rounded-full absolute bottom-5"><LuArrowDown className='text-white p-5 size-16' />
          </div>
        </div>
      </div>

      <div className='w-full py-10 sm:py-16 bg-gray-100  flex px-10'>
        <div className='w-full h-full flex flex-wrap justify-center gap-10 sm:gap-20'>
          <div className='one hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md '>
            <div className='top text-4xl'>01</div>
            <div className='bottom'>
              <h1 className='font-semibold'>Register Account</h1>
              <p className='text-sm text-gray-700'>Create a personalized account to access all platform exclusive features.</p>
            </div>
          </div>
          <div className='two hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md '>
            <div className='top text-4xl'>02</div>
            <div className='bottom'>
              <h1 className='font-semibold'>Search For Job</h1>
              <p className='text-sm text-gray-700'>Explore diverse job listings and find the perfect match for your skills.</p>
            </div>
          </div>
          <div className='three hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md '>
            <div className='top text-4xl'>03</div>
            <div className='bottom'>
              <h1 className='font-semibold'>Create Resume</h1>
              <p className='text-sm text-gray-700'>Craft a professional resume to showcase your qualifications and experience.</p>
            </div>
          </div>
          <div className='four hover:shadow-2xl hover:text-black duration-500 cursor-pointer w-full sm:w-56 bg-white p-4 rounded-lg shadow-md '>
            <div className='top text-4xl'>04</div>
            <div className='bottom'>
              <h1 className='font-semibold'>Apply For Job</h1>
              <p className='text-sm text-gray-700'>Submit applications easily and track your job search progress effectively.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 sm:py-20 px-10 border-b-2 border-zinc-300 ">
        <h1 className="sm:text-center text-3xl md:text-5xl leading-tight ">Trusted <span className=" font-bold text-[#2507B3]">1000+</span> company find best job seekers</h1>
        <div className="w-full flex flex-wrap items-center sm:justify-evenly max-sm:gap-3 mt-10">
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photos.png" alt="" />
        </div>
      </div>

      {/* Explore Internships */}
      <div className='w-full overflow-hidden'>

        <div className='py-14 sm:py-20 px-10'>
          <h1 className='text-4xl sm:text-center font-medium'>Explore all Internship Opportunity</h1>
        </div>

        <div id='job' className='w-full flex items-center gap-5 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-x px-10 bg-gray-50 py-10 '>
          {
            internships &&
            (internships.map((internship, index) => (
              <InternshipCard key={index} index={index} internship={internship} color={generateRandomColor()} />
            )))
          }
        </div>

      </div>

      {/* Explore Job */}
      <div className=' w-full overflow-hidden '>

        <div className='py-14 sm:py-20 px-10'>
          <h1 className='text-4xl sm:text-center font-medium'>Explore all Job Opportunity</h1>
        </div>

        <div id='job' className='w-full flex items-center gap-5 whitespace-nowrap  overflow-y-hidden overflow-x-scroll snap-mandatory  px-10 bg-gray-50 py-10'>
          {
            jobs &&
            (jobs.map((job, index) => (
              <JobCard key={index} index={index} job={job} color={generateRandomColor()} />
            )))
          }
        </div>

      </div>

    </div>

  )
}

export default Home