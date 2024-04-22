import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInternships } from '../store/Actions/internshipActions';
import { fetchJobs } from '../store/Actions/jobActions';
import InternshipCard from '../Components/InternshipCard';
import JobCard from '../Components/JobCard';
import Button from '../Components/Button'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

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

  return (


    <div className="w-full ">
      <div className="h-screen w-full flex justify-center">
        <div className="pt-20 flex flex-col items-center">
          <div className='flex gap-4'>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wider">Welcome To
            </h1>
            < img className='h-14' src="Job Seeking2.png" alt="./logo.jpg" />
          </div>
          <span className='md:text-4xl block mt-3 tracking-wide'>Your Gateway to Career Opportunities!</span>

          <p className="text-gray-500 mt-10 text-base md:text-lg text-center tracking-wider">Discover endless opportunities and unlock your career Potential and explore <br /> endless possibilities with  <span className="font-semibold">Hirer- An amazing job search platform.</span></p>

          <Button className='mt-20 flex items-center gap-2 py-3'
            onClick={() => navigate('/student/signup')}>
            Get Started Now
            <MdArrowOutward />
          </Button>
        </div>
      </div>

      <div className="w-full py-10 px-2 md:px-0 border-b-2 border-zinc-300 my-8">
        <h1 className="text-center  text-3xl md:text-5xl leading-tight font-semibold">Trusted <span className=" font-bold">1000+</span> company find best <br className="md:hidden" />job seekers</h1>
        <div className="w-full flex flex-wrap items-center justify-evenly mt-10">
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png" alt="" />
          <img className="w-[110px] h-auto mb-4" src="https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photos.png" alt="" />
        </div>
      </div>

      {/* Explore Internships */}
      <div className=' w-full overflow-hidden'>

        <div className='py-3 mb-8'>
          <h1 className='text-4xl text-center font-semibold'>Explore all Internship Opportunity</h1>
        </div>

        <div id='job' className='h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
          {
            internships &&
            (internships.map((internship, index) => (
              <InternshipCard key={index} index={index} internship={internship} />
            )))
          }
        </div>

      </div>

      {/* Explore Job */}
      <div className=' w-full overflow-hidden'>

        <div className='py-3 mb-8'>
          <h1 className='text-4xl text-center font-semibold'>Explore all Job Locations</h1>
        </div>

        <div id='job' className='h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
          {
            jobs &&
            (jobs.map((job, index) => (
              <JobCard key={index} index={index} job={job} />
            )))
          }
        </div>

      </div>

    </div>

  )
}

export default Home