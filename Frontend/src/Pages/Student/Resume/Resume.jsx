import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const Resume = () => {

    const student = useSelector((state) => state.userReducer.userData?.student)
    // console.log(student)
    const resume = useSelector((state) => state.userReducer.userData?.student?.resume)
    console.log(resume)

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

                            <div className='education border-b py-5 flex items-start'>
                                <h2 className='uppercase text-sm w-1/4'>education</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.education.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                {item?.college && (
                                                    <div>
                                                        {item?.branch && <p className='font-semibold'>{item?.degree}, <span>({item?.branch})</span></p>}
                                                        {item?.stream && <p className='font-semibold'>{item?.stream}</p>}
                                                        <p>{item?.college}</p>
                                                        <p>{item?.startYear} - {item?.lastYear}</p>
                                                    </div>
                                                )}
                                                {item?.school && (
                                                    <div>
                                                        {item?.stream ?
                                                            (<p className='font-semibold'>Higher Secondary, ({item?.board})</p>)
                                                            : (<p className='font-semibold'>High Secondary, ({item?.board})</p>)}
                                                        <p>{item?.school}</p>
                                                        <p>{item?.completionYear
                                                        }</p>
                                                    </div>
                                                )}
                                                <div className='flex gap-5 pt-2'>
                                                    <HiPencil className='cursor-pointer' />
                                                    <MdDelete className='cursor-pointer' />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        className='text-blue-700' to='/student/resume/add/education'>
                                        <span className='flex items-center gap-1'>
                                            <FaPlus />Add education
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className='work border-b py-5 flex items-start'>
                                <h2 className='uppercase text-sm w-1/4'>WORK EXPERIENCE</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {
                                            resume.jobs.map((item) => (
                                                <li key={item.id}
                                                    className='mb-2 flex justify-between items-start'>

                                                    <div>
                                                        {item?.designation ? <p className='font-semibold'>{item?.designation}<span>, ({item?.profile})</span></p> : <p className='font-semibold'>{item.profile}</p>
                                                        }
                                                        <p>{item.organization}, <span>{item.Location}</span></p>
                                                        {item.designation ? <p className='flex gap-2'><span className='font-medium'>Job</span> <span>{item.startDate}</span>- <span>{item.endDate}</span></p> : <p className='flex gap-2 '><span className='font-medium'>Internship</span> <span>{item.startDate}</span>-<span>{item.endDate}</span></p>}
                                                        <p>{item.description}</p>
                                                    </div>

                                                    <div className='flex gap-5 pt-2'>
                                                        <HiPencil className='cursor-pointer' />
                                                        <MdDelete className='cursor-pointer' />
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex'>
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
                                </div>
                            </div>

                            <div className='responsibility border-b py-5 flex items-start'>
                                <h2 className='uppercase text-sm w-1/4'>POSITIONS OF RESPONSIBILITY</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.responsibilities.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                <div>
                                                    <p className=''>{item.description}</p>
                                                </div>
                                                <div className='flex gap-5 pt-2'>
                                                    <HiPencil className='cursor-pointer' />
                                                    <MdDelete className='cursor-pointer' />
                                                </div>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                    <Link
                                        className='text-blue-700' to='/student/resume/add/responsibility'>
                                        <span className='flex items-center gap-1'>
                                            <FaPlus />Add position of responsibility
                                        </span>
                                    </Link>
                                </div>
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
            )
            }

            <Outlet />

        </div >
    )
}

export default Resume