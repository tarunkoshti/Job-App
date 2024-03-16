import React from 'react'
import { Link } from 'react-router-dom'
import { BsStars } from "react-icons/bs";
const EmployeeHome = () => {
  return (
    <>
      <div className="w-full bg-white font-sans">
        <div className="flex flex-col items-center md:gap-10 px-4 md:px-0 pb-10">
          <div className="flex flex-col items-center gap-8 mt-10 md:mt-32">
            <h1 className="text-center text-[#1F2937] text-4xl md:text-6xl font-bold leading-relax md:pl-12 ">Find the best people for <br /> your company  </h1>

            <p className="pl-4 md:pl-10 text-[#1F2937] leading-normal mt-5 text-base md:text-lg text-center tracking-wide">Get more sales and maximize the converion rates.Discover the most productive channels. </p>
            <Link to="">  <button className='p-4 py-3 bg-[#1f2937] text-white font-semibold rounded-lg'>Get Started</button></Link>
          </div>
        </div>


        <div className='bg-gray-300 h-auto rounded-lg mx-10 my-10 px-10 py-10 text-[1F2937] '>
          <div className='  h-auto rounded-lg'>
            <h1 className="text-center text-[#1F2937] text-4xl md:text-6xl font-bold leading-relax md:pl-12 py-14">Levarage global world - <br /> class talented people</h1>
            <p className="pl-4 md:pl-10 text-[#1F2937] leading-normal mt-5 text-base md:text-lg text-center tracking-wide">Discover the optimal match for you startup and get the best result <br /> together</p>
          </div>
          <div className=' h-auto rounded-lg  flex gap-20 overflow-hidden px-20 py-8'>
            <div className='bg-white h-[280px] w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500'>
            <div className=' h-auto w-full py-10 px-10 pl-10 pt-20  '><span className='  text-2xl '><BsStars /></span></div>
            <div className=''>
              <h3 className='font-semibold text-2xl pl-10'>80% Faster Hiring</h3>
              <p className='pl-10'>No more back and forth to find  the <br /> right qualified candidates</p>
            </div>
            </div>
            <div className='bg-white h-[280px] w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500'>
            <div className=' h-auto w-full py-10 px-10 pl-10 pt-20  '><span className='  text-2xl '><BsStars /></span></div>
            <div className=''>
              <h3 className='font-semibold text-2xl pl-10'>Decrese spendings</h3>
              <p className='pl-10'>Find the right candidates and pay <br /> cheaper than market price</p>
            </div>
            </div>
            <div className='bg-white h-[280px] w-[340px] rounded-lg hover:bg-[#1F2937] hover:text-white duration-500'>
            <div className=' h-auto w-full py-10 px-10 pl-10 pt-20  '><span className='  text-2xl '><BsStars /></span></div>
            <div className=''>
              <h3 className='font-semibold text-2xl pl-10'>Top 0.1% candidates  </h3>
              <p className='pl-10'>Find the right candidates and pay <br /> cheaper than market price</p>
            </div>
            </div>
          </div>
        </div>

        <div className='bg-gray-300 text-center mx-10 rounded-lg py-20'>
          <h1 className='text-3xl font-bold'></h1>
          <h1 className="text-center text-[#1F2937] text-4xl md:text-6xl font-bold leading-relax md:pl-12 ">Start looking for the best talent </h1>
          <p className="pl-4 md:pl-10 py-4 text-[#1F2937] leading-normal mt-5 text-base md:text-lg text-center tracking-wide">Get more sales and maximize the converion rates. <br /> Discover the most productive channels. </p>
          <Link to="">  <button className='p-4 py-3 my-10 bg-[#1f2937] text-white font-semibold rounded-lg'>Get Started</button></Link>
        </div>
      </div>
    </>
  )
}

export default EmployeeHome
