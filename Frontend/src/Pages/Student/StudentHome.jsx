import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../../Components/JobCard';
import { fetchJobs } from '../../store/Actions/jobActions';
import InternshipCard from '../../Components/InternshipCard';
import { fetchInternships } from '../../store/Actions/internshipActions';




const StudentHome = () => {

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
    console.log("hii")
  }, [dispatch]);


  return (
    <>
      <div className='w-full  py-2'>

        <div className='mt-10 px-4 md:px-10 lg:px-20 xl:px-32 flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl text-center font-medium leading-tight md:leading-snug'>
            Find Your <span className='text-blue-900'>Dream Job</span> That Suits <br /> Exciting Opportunities
          </h1>
          <h4 className='text-lg md:text-xl text-center leading-normal mt-5 font-semibold'>
            Embark on a journey towards your career, your ultimate job-finding companion! We've curated <br /> a platform that connects talented individuals with existing opportunities.
          </h4>
          <button className='px-8 md:px-12 lg:px-16 py-3 border-2 border-black rounded-lg font-semibold bg-[#1F2937] text-white mt-10 md:mt-16'>Get Started</button>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-48 mt-16 md:mt-20 px-4 md:px-10 lg:px-20 xl:px-32'>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-semibold items-center'>Live Jobs</h1>
            <h1 className='text-2xl md:text-3xl font-bold'>30000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-semibold items-center'>Daily Job Post</h1>
            <h1 className='text-2xl md:text-3xl font-bold'>5000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-semibold items-center'>People Get Hired</h1>
            <h1 className='text-2xl md:text-3xl font-bold'>25000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-semibold items-center'>Companies</h1>
            <h1 className='text-2xl md:text-3xl font-bold'>1000+</h1>
          </div>

        </div>

        {/* Company-scorllbar */}

        <div className='h-[40vh] md:h-[50vh] w-full mt-10 md:mt-16 border-t-2 border-black overflow-hidden'>
          <div className='h-[20vh] w-full'>
            <h3 className='pt-8 md:pt-12 text-center text-2xl md:text-4xl font-bold '>Trusted by the Best Companies</h3>
          </div>

          <div id='scroller' className='h-[20vh] md:h-[30vh] w-full px-4 md:px-10 lg:px-20 xl:px-32 flex items-center gap-4 md:gap-10 whitespace-nowrap overflow-x-auto snap-mandatory'>

            {/* Add your company logos here with appropriate styling */}

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

            <div className='h-[8vh] md:h-[12vh] w-36 md:w-52 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>


          </div>
        </div>

        {/* <JobCard /> */}

        <div className=' w-full overflow-hidden'>

          <div className='py-3 mb-8'>
            <h1 className='text-4xl text-center font-semibold'>Explore all Job Locations</h1>
          </div>

          <div id='job' className='h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
            {
              jobs &&
              (jobs.map((job) => (
                <JobCard job={job} />
              )))
            }
          </div>

        </div>

        {/* Internship-Card */}

        <div className=' w-full overflow-hidden'>

          <div className='py-3 mb-8'>
            <h1 className='text-4xl text-center font-semibold'>Explore all Internship Opportunity</h1>
          </div>

          <div id='job' className='h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
            {
              internships &&
              (internships.map((internship) => (
                <InternshipCard internship={internship} />
              )))
            }
          </div>

        </div>

      </div>
    </>
  );
};

export default StudentHome;

