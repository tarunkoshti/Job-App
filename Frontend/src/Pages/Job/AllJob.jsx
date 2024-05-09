import React, { useEffect, useState } from "react";
import ViewJobCard from "../../Components/ViewJobCard";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchJobs } from "../../store/Actions/jobActions";
import { IoMdSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const AllJob = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobReducer.jobData);

  useEffect(() => {
    try {
      dispatch(fetchJobs());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const [jobTitleInput, setJobTitleInput] = useState("")
  const [jobLocationInput, setJobLocationInput] = useState("")
  const [filterredJobs, setFilteredJobs] = useState([])

  useEffect(() => {
    if (jobs && !jobTitleInput && !jobLocationInput) {
      // console.log("hey")
      setFilteredJobs(jobs);
    }
  }, [jobs, jobTitleInput, jobLocationInput]);

  const handleJobSearch = () => {
    // console.log(jobLocationInput, jobTitleInput)
    if (jobTitleInput === "" && jobLocationInput === "") {
      setFilteredJobs(jobs);
      console.log(jobs)
    }
    else {
      const filtered = jobs.filter((job) => {
        return (
          (job.location && job.location.toLowerCase().startsWith(jobLocationInput.toLowerCase()))
          &&
          (job.profile && job.profile.toLowerCase().startsWith(jobTitleInput.toLowerCase()))
        );
      });
      setFilteredJobs(filtered);
      // console.log(filtered)
    }
  }

  const navigate = useNavigate();

  // Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (fetchJobs !== null) {
      setLoader(false);
    }
  });

  function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the color code in hexadecimal format
    const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return colorCode;
  }

  return (
    <>

<div className="py-10">
        {/* search bar */}
        <div className="flex items-center bg-white shadow-lg  hover-border text-black w-1/2 rounded-full m-auto overflow-hidden">

          <div className="w-full flex items-center gap-2 pl-5 h-12">
            <div><IoMdSearch size={20} className="text-gray-500" /></div>
            <input
              type="text"
              placeholder="Job title"
              className="w-full bg-transparent h-full outline-none"
              value={jobTitleInput}
              onChange={(e) => setJobTitleInput(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center gap-2 pl-5 h-12">
            <div><IoLocationSharp className="text-gray-500" /></div>
            <input
              type="text"
              placeholder="City or remote"
              className="w-full h-full outline-none"
              value={jobLocationInput}
              onChange={(e) => setJobLocationInput(e.target.value)}
            />
          </div>
          <div className="h-12">
            <button
              type="submit"
              className="w-full h-full rounded-tr-full rounded-br-full outline-none bg-[#2507B3] text-white text-sm px-5"
              onClick={handleJobSearch}>
              Search
            </button>
          </div>
        </div>
</div>

      {/* main-div */}
      <div className="w-full  flex items-center justify-center gap-10">
        {/* ViewJobCard - full width on smaller screens */}
        <div
          id="job"
          className="w-full h-screen md:w-[400px] sm:w-full  flex flex-col items-center justify-start gap-5 overflow-y-auto snap-mandatory border rounded-xl"
        >
          <div className="flex flex-col items-center py-10 pb-5">
            {filterredJobs &&
              filterredJobs.map((job, index) => (
                <ViewJobCard
                  key={index}
                  index={index}
                  job={job}
                  color={generateRandomColor()}
                />
              ))}
          </div>
        </div>

        {/* Outlet hidden on small screens */}
        <div
          id="job"
          className="hidden md:block w-1/2 h-screen  overflow-y-auto overflow-x-hidden snap-mandatory border-2 border-zinc-200 rounded-xl "
        >
          <div className=" shrink-0 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJob;
