import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HiPencil } from "react-icons/hi2";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";

const Resume = () => {

    const student = useSelector((state) => state.userReducer.userData?.student)
    // console.log(student)

    return (
        <div className=''>
            {student && (
                <div className='w-full'>
                    <h1 className="text-center text-4xl font-semibold mt-6">Resume</h1>

                    <div className='w-[65%] m-auto mt-6'>
                        <div className='w-full text-center py-3 rounded-lg border border-orange-300'>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.
                        </div>

                        <div className='w-full border rounded-lg mt-5 p-10'>
                            <div className='personalDetail border-b py-5'>
                                <h6 className='capitalize font-semibold text-3xl'>{student.firstname} {student.lastname}
                                    <Link
                                        to='/student/resume/edit/personal_details' className='inline-block ml-5'><HiPencil size={20} /></Link>
                                </h6>

                                <p className='font-normal text-base'>{student.email}</p>
                                <p className='font-normal text-base'>{student.contact}</p>
                                <p className='font-normal text-base capitalize'>{student.city}</p>
                            </div>

                            <div className='education border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>education</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/education'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add education
                                    </span>
                                </Link>
                            </div>

                            <div className='work border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>WORK EXPERIENCE</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/job'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add job
                                    </span>
                                </Link>
                                <Link
                                    className='text-blue-700 ml-5' to='/student/resume/add/internship'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add internship
                                    </span>
                                </Link>
                            </div>

                            <div className='responsibility border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>POSITIONS OF RESPONSIBILITY</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/responsibility'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add position of responsibility
                                    </span>
                                </Link>
                            </div>

                            <div className='training&course border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>TRAININGS/ COURSES</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/training_courses'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add training/ course
                                    </span>
                                </Link>
                            </div>

                            <div className='project border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>ACADEMICS/ <br /> PERSONAL PROJECTS</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/project'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add academic/ personal project
                                    </span>
                                </Link>
                            </div>

                            <div className='skills border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>SKILLS</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/skill'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add skill
                                    </span>
                                </Link>
                            </div>

                            <div className='portfolio border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>PORTFOLIO/ <br /> WORK SAMPLES</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/portfolio_work'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add portfolio/ work sample
                                    </span>
                                </Link>
                            </div>
                            <div className='accomplishment border-b py-5 flex items-center'>
                                <h2 className='uppercase text-sm w-1/4'>ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS</h2>
                                <Link
                                    className='text-blue-700' to='/student/resume/add/accomplishment'>
                                    <span className='flex items-center gap-1'>
                                        <FaPlus />Add accomplishment/ additional detail
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            )}

                <Outlet />

        </div>
    )
}

export default Resume
