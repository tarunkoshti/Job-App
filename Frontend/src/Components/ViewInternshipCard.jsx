import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const ViewInternshipCard = ({ index, internship }) => {
  const colors = ["bg-[#D8E8D4]", "bg-[#FFE0CD]",];

    return (
        <>
           <Link to={`/student/internships/readinterbship/${internship._id}`}>
                            
             <div key={internship._id} className={`m-2 w-[320px] mb-5 p-2 shadow-xl shrink-0 rounded-lg pb-16 ${colors[index % colors.length]}`}>

                    <div className='flex items-center justify-between gap-2 mt-2'>
                        <div className='flex items-center gap-2 py-1 px-2 w-1/2 bg-white text-white ml-4 mt-5 rounded-xl'>
                            <span className='text-black text-lg'><CiCalendarDate /></span>
                            <h3 className='text-black font-medium'>{internship.from}</h3>
                        </div>
                        <div className='flex items-center mr-6 mt-5 gap-1 py-2 px-2 border-2 rounded-full bg-white cursor-pointer'>
                            <span className='text-black text-lg'><IoLocationSharp /></span>
                            <h3 className='text-sm font-semibold'>{internship.location}</h3>
                        </div>
                    </div>

                    <div className='mt-5 pl-8'>
                        <h3 className='text-md font-semibold'>{internship.company}</h3>
                    </div>

                    <div className='mt-3 pl-8'>
                        <h3 className='text-2xl font-semibold'>{internship.profile}</h3>
                    </div>

                    <div className='flex items-center  font-medium'>
                        <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3'>
                            <h3 className='text-sm text-center'>{internship.workingtype}</h3>
                        </div>
                        <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3'>
                            <h3 className='text-sm text-center'>{internship.internshiptype}</h3>
                        </div>
                    </div>

                    <div className='flex items-center  font-medium'>
                        <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3'>
                            <h3 className='text-sm text-center'>{internship.duration}</h3>
                        </div>
                        <div className='py-1 px-2 bg-white w-66 rounded-lg ml-3 mt-3'>
                            <h3 className='text-sm text-center'>{internship.stipend.status}</h3>
                        </div>

                    </div>

                    <div className='flex items-center text-center font-medium mt-4 ml-3'>
                        <div className='py-1 px-2 flex items-center justify-center text-center bg-white w-32 rounded-lg ml-5'>
                            <h3 className=' text-[13px] text-center font-medium'>₹ {internship.stipend.amount} /- Month</h3>
                        </div>
                        
                    </div>
                </div>
            </Link>
        </>
    )
}
export default ViewInternshipCard