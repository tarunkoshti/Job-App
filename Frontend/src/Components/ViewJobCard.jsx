import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const ViewJobCard = ({ index, job }) => {
 const colors = ["bg-[#D8E8D4]", "bg-[#FFE0CD]",];

    return (
      <>
        <Link to={`/student/jobs/readjob/${job._id}`}>
          {/* <div  className='  bg-white  rounded-xl '> */}

          <div
            key={job._id}
            className={`m-2 w-[320px] mb-5 p-2 shadow-xl hover:shadow-2xl shrink-0 rounded-lg pb-16 ${
              colors[index % colors.length]
            }`}
          >
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex items-center gap-2 py-1 px-2 w-1/2 bg-white text-white ml-4 mt-5 rounded-xl">
                <span className="text-black text-lg">
                  <CiCalendarDate />
                </span>
                <h3 className="text-black font-medium text-sm">
                  {job.startdate}
                </h3>
              </div>
              <div className="flex items-center  gap-2 mr-6 mt-5 py-2 px-4  rounded-full bg-white cursor-pointer">
                <span className="text-black text-lg">
                  <IoLocationSharp />
                </span>
                <h3 className="text-sm font-semibold">{job.location}</h3>
              </div>
            </div>

            <div className="mt-5 pl-8 tracking-wide">
              <h3 className="text-lg font-semibold">{job.company}</h3>
            </div>

            <div className="mt-3 pl-8">
              <h3 className="text-2xl font-semibold">{job.profile}</h3>
            </div>

            <div className="flex items-center font-medium">
              <div className="py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3">
                <h3 className="text-sm text-center">{job.workingtype}</h3>
              </div>
              <div className="py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3">
                <h3 className="text-sm text-center">{job.jobtype}</h3>
              </div>
            </div>

            <div className="flex items-center font-medium">
              <div className="py-1 px-2 bg-white w-66 rounded-lg ml-8 mt-3">
                <h3 className="text-sm text-center">
                  {job.applicants} Applicants
                </h3>
              </div>
              <div className="py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3">
                <h3 className="text-sm text-center">{job.openings} Opnings</h3>
              </div>
            </div>
            <div className="flex items-center font-medium mt-4 ml-3">
              <div className="py-1 px-2 text-center bg-white w-36 rounded-lg ml-5 ">
                <h3 className=" text-sm text-center font-medium">
                  ₹ {job.salary} /- Month
                </h3>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Link>
      </>
    );
}

export default ViewJobCard