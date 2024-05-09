import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { RxCountdownTimer } from 'react-icons/rx';
import { BsCalendarDate } from 'react-icons/bs';
import { FaMoneyBill } from 'react-icons/fa';
import { HiMiniUsers } from "react-icons/hi2";

const JobCard = ({ index, job , color}) => {
    const defaultColor = '#dadada';

    const colors = [];

    // Convert the ISO string to a Date object
    const date1 = new Date(job?.createdAt)
    const date2 = new Date(); // Current date

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = date2 - date1;
    // console.log(differenceInMilliseconds)

    // Convert milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // console.log(`Difference in days: ${differenceInDays}`);

    return (

        <>
            <Link to={`/student/job/read/${job._id}`}>

                <div key={job._id} className={`m-2 w-80 mb-5 p-4 text-black border bg-white shrink-0 rounded-xl ${colors[index % colors.length]}`}>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 py-1 px-3 border rounded-md'>
                            <span className=''><RxCountdownTimer color='blue' /></span>
                            <h3 className='text-xs font-medium'>posted {differenceInDays} days ago</h3>
                        </div>
                        {/* <div className='flex items-center  gap-2 mr-6 mt-5 py-2 px-4  rounded-full bg-white cursor-pointer'>
                        <span className='text-black text-lg'><IoLocationSharp /></span>
                        <h3 className='text-sm font-semibold'>{job.location}</h3>
                    </div> */}
                    </div>

                    <div className='py-4 border-b flex justify-between items-center'>
                        <div>
                            <div className=''>
                                <h3 className='text-lg font-semibold capitalize text-gray-700'>{job.profile}</h3>
                            </div>

                            <div className=''>
                                <h3 className='text-sm font-medium capitalize text-gray-500'>{job.company}</h3>
                            </div>
                        </div>
                        <div className={`h-10 w-10 uppercase flex justify-center items-center font-bold text-white rounded-full`}
                            style={{ backgroundColor: color || defaultColor }}>
                            {job.company.charAt(0)}
                        </div>
                    </div>

                    <div className='py-4 text-sm capitalize text-gray-500'>
                        <div className='flex items-center gap-2 mt-2'>
                            <IoLocationSharp />
                            <h3 className=''>{job.location}</h3>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <BsCalendarDate />
                            <h3 className=''>₹ {job.salary} /month</h3>
                        </div>
                        {/* <div className='flex items-center gap-2 mt-2'>
                            <FaMoneyBill />
                            <h3 className=''>{job.duration} months</h3>
                        </div> */}
                        <div className='flex items-center gap-2 mt-2'>
                            <HiMiniUsers />
                            <h3 className=''>{job.applicants} applicants</h3>
                        </div>
                    </div>

                    {/* <div className='mt-5 pl-8 tracking-wide'>
                    <h3 className='text-lg font-semibold'>{job.company}</h3>
                </div>

                <div className='mt-3 pl-8'>
                    <h3 className='text-2xl font-semibold'>{job.profile}</h3>
                </div>

                <div className='flex items-center font-medium'>
                    <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3'>
                        <h3 className='text-sm text-center'>{job.workingtype}</h3>
                    </div>
                    <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3'>
                        <h3 className='text-sm text-center'>{job.jobtype}</h3>
                    </div>
                </div>

                <div className='flex items-center font-medium'>
                    <div className='py-1 px-2 bg-white w-66 rounded-lg ml-8 mt-3'>
                        <h3 className='text-sm text-center'>{job.applicants} Applicants</h3>
                    </div>
                    <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3'>
                        <h3 className='text-sm text-center'>{job.openings} Opnings</h3>
                    </div>
                </div>
                <div className='flex items-center font-medium mt-4 ml-3'>
                    <div className='py-1 px-2 text-center bg-white w-36 rounded-lg ml-5 '>
                        <h3 className=' text-sm text-center font-medium'>₹ {job.salary} /- Month</h3>
                    </div>
                </div> */}
                </div>
            </Link>
        </>
    )
}

export default JobCard