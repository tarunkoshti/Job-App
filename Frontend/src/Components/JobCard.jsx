import React, { useEffect } from 'react'
import { ImOffice } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { SiOnlyoffice } from "react-icons/si";
import { FaMoneyBill } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';


const JobCard = ({ job }) => {


    return (
        <>

            <div key={job._id} className='w-72 bg-zinc-100 shrink-0 rounded-lg mb-5 '>

                <div className='flex items-center py-1 px-2 w-1/3 bg-white gap-2 ml-4 mt-5 rounded-xl'>
                    <FaLocationDot size={18} />
                    <h3 className='text-sm font-semibold'>{job.location}</h3>
                </div>

                <div className='flex items-center gap-2 mt-5 px-6'>
                    <ImOffice size={15} />
                    <h3 className='text-md font-semibold'>{job.company}</h3>
                </div>

                <div className='ml-5'>
                    <h3 className='text-xl font-semibold'>{job.profile}</h3>
                </div>

                <div className='flex items-center gap-2 ml-10 mt-1'>
                    <SiOnlyoffice size={15} />
                    <h4 className='font-semibold'>{job.jobtype}</h4>
                </div>

                <div className='flex items-center gap-2 ml-10 mt-1'>
                    <FaMoneyBill size={15} />
                    <h4 className='font-semibold'>₹ {job.salary} /- Year</h4>
                </div>

                <div className='flex items-center gap-2 ml-10 mt-1'>
                    <IoMan size={18} />
                    <h4 className='font-semibold'> {job.experience} year</h4>
                </div>

                <div className='mt-8 border-t-2 border-black'>

                    <div className=' w-full py-5  px-4 flex items-center justify-between'>
                        <span className=' text-sm font-semibold py-1 px-2 bg-white rounded-xl'>Job</span>
                        <Link to={`/student/job/read/${job._id}`}>
                            <span className='flex text-md items-center gap-1 cursor-pointer text-[#1F2937] font-semibold'>View Details <IoChevronForward size="18" /></span></Link>
                    </div>
                </div>
            </div>


        </>




    )
}

export default JobCard