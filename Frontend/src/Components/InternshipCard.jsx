import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";


const InternshipCard = ({index, internship}) => {
    
    const colors = ["bg-[#D8E8D4]", "bg-[#FFE0CD]",];

  return (
    <>         

            {/* <div key={internship._id} className='w-72 bg-zinc-100 shrink-0 rounded-lg mb-5 '>
            
            <div className='flex items-center py-1 px-2 w-1/3 bg-[#1F2937] text-white gap-2 ml-4 mt-5 rounded-xl'>
                <FaLocationDot size={18}/>
                <h3 className='text-sm font-semibold'>{internship.location}</h3>
            </div>

            <div className='flex items-center gap-2 mt-5 px-6'>
                <ImOffice size={15}/>
                <h3 className='text-md font-semibold'>{internship.company}</h3>
            </div>

            <div className='ml-5 mt-1'>
                 <h3 className='text-xl font-semibold'>{internship.profile}</h3>
            </div>

            <div className='flex items-center gap-3 ml-10 mt-2'>
                 <SiOnlyoffice size={15}/>
                 <h4 className='font-semibold'>{internship.internshiptype}</h4>
            </div>

            <div className='flex items-center gap-3 ml-10 mt-2'>
                <MdAccessTimeFilled size={15}/>
                <h4 className='font-semibold'> {internship.duration}</h4>
            </div>

            <div className='flex items-center gap-3 ml-10 mt-2'>
                <FaCalendar size={18}/>
                <h4 className='font-semibold'>  {internship.from}</h4>
            </div>

            <div className='mt-10 border-t-2 border-black'>
                
                <div className=' w-full py-5  px-4 flex items-center justify-between'>
                    <span className=' text-sm font-semibold py-1 px-2 bg-[#1F2937] text-white rounded-xl'>Internship</span>
                    <Link to={`/student/internship/singleintership/${internship._id}`}> <span className='flex text-md items-center gap-1 cursor-pointer text-[#1F2937] font-semibold'>View Details <IoChevronForward size="18" /></span></Link>
                </div>
                </div>
            </div> */}

             <div key={internship._id} className='w-80  bg-white shrink-0 rounded-xl mb-5 border-2'>

            <div className={`m-2 rounded-xl pb-24 ${colors[index % colors.length]}`}>

            <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2 py-1 px-2 w-1/2 bg-white text-white ml-4 mt-5 rounded-xl'>
                <span className='text-black text-lg'><CiCalendarDate/></span>
                <h3 className='text-black font-semibold'>{internship.from}</h3>
            </div>
            <div className='flex items-center gap-2 mr-6 mt-5 py-2 px-2 border-2 rounded-full bg-white cursor-pointer'>
                <span className='text-lg '><IoBookmark /></span>
            </div>
            </div>

            <div className='mt-5 pl-8'>
                <h3 className='text-sm font-semibold'>{internship.company}</h3>
            </div>

            <div className='mt-3 pl-8'>
                <h3 className='text-2xl font-semibold'>{internship.profile}</h3>
            </div>

            <div className='flex items-center font-semibold'>
                <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3'>
                    <h3 className='text-sm text-center'>{internship.workingtype}</h3>
                </div>
                <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-3 mt-3'>
                    <h3 className='text-sm text-center'>{internship.internshiptype}</h3>
                </div>
            </div>

            <div className='flex items-center font-semibold'>
                <div className='py-1 px-2 bg-white w-1/3 rounded-lg ml-8 mt-3'>
                    <h3 className='text-sm text-center'>{internship.duration}</h3>
                </div>
                <div className='py-1 px-2 bg-white w-66 rounded-lg ml-3 mt-3'>
                    <h3 className='text-sm text-center'>{internship.stipend.status}</h3>
                </div>
            </div>
            </div>

            <div className='flex items-center justify-between px-2 mt-2 border-t-2 border-zinc-300'>
                <div className='flex flex-col items-start my-4'>
                <div className='py-1 px-2 text-center bg-white w-28 rounded-lg ml-5 '>
                    <h3 className=' text-sm text-center font-semibold'>{internship.stipend.amount} /- Month</h3>
                </div>
                <div className='ml-5 '>
                   <h3 className='text-xs ml-3'>{internship.location}, India</h3>
              </div>
              </div>
                <div className='px-6 py-1 bg-[#1F2937] text-white rounded-lg mr-4'>
                    <Link to={`/student/internship/read/${internship._id}`}>
                        <span className=''>Details </span></Link>
                </div> 
            </div> 
        </div>

            
    </>

   


  )
}

export default InternshipCard