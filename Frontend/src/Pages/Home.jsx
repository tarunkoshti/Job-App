import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInternships } from "../store/Actions/internshipActions";
import { fetchJobs } from "../store/Actions/jobActions";
import InternshipCard from "../Components/InternshipCard";
import JobCard from "../Components/JobCard";
import Button from "../Components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { LuArrowDown } from "react-icons/lu";
import LoadingPage from "../Components/Loading/LoadingPage";

const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);
  const internships = useSelector(
    (state) => state.internshipReducer.internshipData
  );

  useEffect(() => {
    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  const navigate = useNavigate();

  // Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (fetchInternships !== null && fetchJobs !== null) {
      setLoader(false);
    }
  });

  // if (loader) {
  //   return (
  //     <LoadingPage />
  //   )
  // }

  return (
    <div className="w-full ">
      <div className=" w-full h-screen flex justify-center px-10">
        <div className="pt-10 md:pt-20 md:flex flex-col items-center">
          <div className="flex flex-wrap gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider">
              Welcome To
            </h1>
            <img
              className="h-10 sm:h-12 md:h-14"
              src="Job Seeking2.png"
              alt="./logo.jpg"
            />
          </div>
          <span className="text-3xl md:text-4xl block mt-3 tracking-wide">
            Your Gateway to Career Opportunities!
          </span>

          <p className="text-gray-500 mt-10 text-base md:text-lg md:text-center tracking-wider">
            Discover endless opportunities and unlock your career Potential and
            explore <br /> endless possibilities with{" "}
            <span className="font-semibold">
              Hirer- An amazing job search platform.
            </span>
          </p>

          <Button
            className="mt-10 md:mt-20 flex items-center gap-2 py-3"
            onClick={() => navigate("/student/signup")}
          >
            Get Started Now
            <MdArrowOutward />
          </Button>

          <div class="animate-bounce bg-[#2507B3] rounded-full absolute bottom-5">
            <LuArrowDown className="text-white p-5 size-16" />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 px-10">
        <div className="py-8 sm:py-16">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-medium">
            Steps to Follow
          </h1>
        </div>
        <div className="w-full  bg-gray-100  flex px-10">
          <div className="w-full h-full flex flex-wrap justify-center gap-10 sm:gap-20">
            <div className="one w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
              <div className="top text-4xl">01</div>
              <div className="bottom">
                <h1 className="font-semibold">Register Account</h1>
                <p className="text-sm">
                  Create a personalized account to access all platform exclusive
                  features.
                </p>
              </div>
            </div>
            <div className="two w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
              <div className="top text-4xl">02</div>
              <div className="bottom">
                <h1 className="font-semibold">Search For Job</h1>
                <p className="text-sm">
                  Explore diverse job listings and find the perfect match for
                  your skills.
                </p>
              </div>
            </div>
            <div className="three w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
              <div className="top text-4xl">03</div>
              <div className="bottom">
                <h1 className="font-semibold">Create Resume</h1>
                <p className="text-sm">
                  Craft a professional resume to showcase your qualifications
                  and experience.
                </p>
              </div>
            </div>
            <div className="four w-full sm:w-56 bg-white p-4 rounded-lg shadow-md ">
              <div className="top text-4xl">04</div>
              <div className="bottom">
                <h1 className="font-semibold">Apply For Job</h1>
                <p className="text-sm">
                  Submit applications easily and track your job search progress
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroller animation */}
      <div className="w-full  bg-gray-100 py-16 overflow-hidden ">
        <div className=" pb-10 my-5">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium px-10">
            Trusted <span className=" font-semibold text-[#2507B3]">1000+</span>{" "}
            company find best job seekers
          </h3>
        </div>

        <div className="flex">
          <div
            id="scroller"
            className="w-fit gap-16 px-10 flex whitespace-nowrap "
          >
            {/* Add your company logos here with appropriate styling */}

            <div className="h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>
          </div>

          <div
            id="scroller"
            className="w-fit gap-16 px-10 flex whitespace-nowrap "
          >
            {/* Add your company logos here with appropriate styling */}

            <div className="h-[5vh] md:h-[8vh] w-32 md:w-40 bg-[url(https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://car-logos.b-cdn.net/wp-content/uploads/2023/04/ceat-logo-present-scaled.webp)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2022/08/Zara-Logo-1980s.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Nestle-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2022/01/Unilever-Symbol.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[6vh] w-32 md:48 bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Collabera_logo.png/1200px-Collabera_logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>

            <div className="h-[5vh] md:h-[8vh] w-32 md:48 bg-[url(https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png)] bg-center bg-cover bg-no-repeat shrink-0 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Explore Internships */}
      <div className=" w-full overflow-hidden">
        <div className="py-14 sm:py-20 px-10">
          <h1 className="text-4xl sm:text-center font-medium">
            Explore all Internship Opportunity
          </h1>
        </div>

        <div
          id="job"
          className="h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  px-10"
        >
          {internships &&
            internships.map((internship, index) => (
              <InternshipCard
                key={index}
                index={index}
                internship={internship}
              />
            ))}
        </div>
      </div>

      {/* Explore Job */}
      <div className=" w-full overflow-hidden ">
        <div className="py-14 sm:py-20 px-10">
          <h1 className="text-4xl sm:text-center font-medium">
            Explore all Job Opportunity
          </h1>
        </div>

        <div
          id="job"
          className="h-3/5 w-full flex items-center gap-10 whitespace-nowrap overflow-y-hidden overflow-x-scroll snap-mandatory  px-10"
        >
          {jobs &&
            jobs.map((job, index) => (
              <JobCard key={index} index={index} job={job} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
