import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JobCard from '../../Components/JobCard';
import { fetchJobs } from '../../store/Actions/jobActions';
import InternshipCard from '../../Components/InternshipCard';
import { fetchInternships } from '../../store/Actions/internshipActions';
import Button from '../../Components/Button';
import { MdArrowOutward } from 'react-icons/md';




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
  }, [dispatch]);


  // filter functionality

  const [data, setData] = useState(undefined);

  const options = [
    "Remote",
    "In office",
    "Part-time",
    "Full-time",

  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };

  const [optionData, setOptionData] = useState(undefined);

  const JobOptions = [
    "Remote",
    "In office",
    "Part-time",
    "Full-time",

  ];
  const onOptionChangeJobHandler = (event) => {
    setOptionData(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };
  return (
    <>
      <div className='w-full py-2'>

        <div className='w-full mt-14 px-4 md:px-10 flex flex-col items-center justify-center'>
          <h1 className='w-full lg:w-[70%] text-4xl sm:5xl md:text-6xl sm:text-center font-medium tracking-wide leading-22'>
            Find Your <span className='text-[#2507B3]'>Dream Job</span> That Suits Exciting Opportunities
          </h1>
          <h4 className='text-gray-500 mt-12 text-base md:text-lg lg:text-center tracking-wider lg:w-[60%]'>
            Embark on a journey towards your career, your ultimate job-finding companion! We've curated a platform that connects talented individuals with existing opportunities.
          </h4>
          <Button className='mt-10 md:mt-20 flex items-center gap-2 py-3'
            onClick={() => navigate('/student/signup')}>
            Get Started Now
            <MdArrowOutward />
          </Button>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mt-16 md:mt-20 px-10 '>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-medium items-center whitespace-nowrap'>Live Jobs</h1>
            <h1 className='text-2xl md:text-3xl font-medium'>30000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-medium items-center whitespace-nowrap'>Daily Job Post</h1>
            <h1 className='text-2xl md:text-3xl font-medium'>5000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-medium items-center whitespace-nowrap'>People Get Hired</h1>
            <h1 className='text-2xl md:text-3xl font-medium'>25000+</h1>
          </div>

          <div className='text-center flex flex-col gap-3'>
            <h1 className='text-lg font-medium items-center whitespace-nowrap'>Companies</h1>
            <h1 className='text-2xl md:text-3xl font-medium'>1000+</h1>
          </div>

        </div>

        {/* Company-scorllbar */}

        <div className='w-full  bg-gray-100 py-20 overflow-hidden my-16'>
          <div className=' pb-10'>
            <h3 className='text-center text-2xl sm:text-3xl md:text-4xl font-medium px-10'>Trusted by the Best Companies</h3>
          </div>

          <div className='flex'>
            <div id='scroller' className='w-fit gap-10 px-10 flex whitespace-nowrap '>

              {/* Add your company logos here with appropriate styling */}

              <div className='h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>


            </div>

            <div id='scroller' className='w-fit gap-10 px-10 flex whitespace-nowrap '>

              {/* Add your company logos here with appropriate styling */}

              <div className='h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Capgemini/Capgemini-Logo.wine.png'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>

              <div className='h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md'></div>


            </div>
          </div>
        </div>

        {/* <JobCard /> */}
        <section>
          <div className=' w-full overflow-hidden'>

            <div className='py-3 mb-8'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-medium px-10'>Explore all Job Opportunity</h1>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='px-2 bg-pink-100 py-1 rounded-lg font-semibold'>Apply filter </h1>
              <select className='py-1 bg-blue-100 rounded-lg px-3 mx-4' onChange={onOptionChangeJobHandler}>
                <option>Please choose one option</option>
                {JobOptions.map((option, index) => {
                  return (
                    <option key={index}>
                      {option}
                    </option>
                  );
                })}
              </select></div>
            <div id='job' className='h-3/5 w-full flex items-center gap-6 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>
              {optionData === "Remote" ? (
                jobs && jobs.filter((job) => job.jobtype === "Remote").map((job, index) => (
                  <JobCard key={index} index={index} job={job} />
                ))
              ) : optionData == "In office" ? (
                jobs && jobs.filter((job) => job.jobtype === "In office").map((job, index) => (
                  <JobCard key={index} index={index} job={job} />
                ))
              ) : optionData == "Full-time" ? (
                jobs && jobs.filter((job) => job.workingtype === "Full-time").map((job, index) => (
                  <JobCard key={index} index={index} job={job} />
                ))) : optionData == "Part-time" ? (
                  jobs && jobs.filter((job) => job.workingtype === "Part-time").map((job, index) => (
                    <JobCard key={index} index={index} job={job} />
                  ))) : (

                jobs &&
                (jobs.map((job, index) => (
                  <JobCard key={index} index={index} job={job} />
                )))

              )}
            </div>

          </div>
        </section>

        {/* Internship-Card */}
        <section>
          <div className=' w-full overflow-hidden'>

            <div className='py-3 mb-8'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-medium'>Explore all Internship Opportunity</h1>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='px-2 bg-pink-100 py-1 rounded-lg font-semibold'>Apply filter </h1>
              <select className='py-1 bg-blue-100 rounded-lg px-3 mx-4' onChange={onOptionChangeHandler}>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                  return (
                    <option key={index}>
                      {option}
                    </option>
                  );
                })}
              </select></div>
            <div id='job' className='h-3/5 w-full flex items-center gap-6 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  py-4 px-10'>

              {data === "Remote" ? (
                internships && internships.filter((internship) => internship.internshiptype === "Remote").map((internship, index) => (
                  <InternshipCard key={index} index={index} internship={internship} />
                ))
              ) : data == "In office" ? (
                internships && internships.filter((internship) => internship.internshiptype === "In office").map((internship, index) => (
                  <InternshipCard key={index} index={index} internship={internship} />
                ))
              ) : data == "Full-time" ? (
                internships && internships.filter((internship) => internship.workingtype === "Full-time").map((internship, index) => (
                  <InternshipCard key={index} index={index} internship={internship} />
                ))) : data == "Part-time" ? (
                  internships && internships.filter((internship) => internship.workingtype === "Part-time").map((internship, index) => (
                    <InternshipCard key={index} index={index} internship={internship} />
                  ))) : (

                internships &&
                (internships.map((intern, index) => (
                  <InternshipCard key={index} index={index} internship={intern} />
                )))

              )}

            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default StudentHome;

