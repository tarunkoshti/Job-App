import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInternships } from '../store/Actions/internshipActions';
import { fetchJobs } from '../store/Actions/jobActions';
import InternshipCard from '../Components/InternshipCard';
import JobCard from '../Components/JobCard';

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



  return (


    <div className="w-full bg-white">
      <div className="flex flex-col items-center md:gap-10 px-4 md:px-0">
        <div className="flex flex-col items-center gap-8 mt-10 md:mt-32">
          <h1 className="text-center  text-4xl md:text-6xl font-bold leading-tight md:pl-12">Unleash Your Potential <br /> Find Your Dream Job Today</h1>
          <h4 className="text-center  text-2xl font-semibold md:text-3xl">Navigate Your Career Path with Precision and Ease.</h4>
          <p className="pl-4 md:pl-10  leading-normal mt-5 text-base md:text-lg text-center tracking-wide">Discover endless opportunities and unlock your career Potential <br /> with <span className="font-semibold">Job-Seekers- An amazing job search platform</span></p>
          {/* <img className="w-[600px] mt-5 pl-12 md:w-full h-auto pr-12 md:ml-0 md:max-w-[510px]" src="logo1.jpg" alt="" /> */}
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

      <div className="py-5 mt-5">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">Find your perfect dream jobs</h1>
        <p className="text-center text-[#1F2937] mt-2 md:mt-5 text-base md:text-lg tracking-wider mb-10 pb-5">JobSeekrs present for help candidate for meet the dream company</p>
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