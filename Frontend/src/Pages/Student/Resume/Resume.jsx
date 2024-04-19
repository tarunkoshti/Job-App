import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FaBehance, FaBlog, FaGithub, FaGooglePlay, FaPlus } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import { MdDelete, MdWorkspacesFilled } from "react-icons/md";
import { deleteAccomplishment, deleteEducation, deleteInternship, deleteJob, deleteProject, deleteResponsibility, deleteSkill, deleteTrainingCourse, deleteWorkSample } from '../../../store/Actions/userActions';
import { Document, PDFDownloadLink, PDFViewer, Page, Text, View } from '@react-pdf/renderer';
import MyDocument from '../../ResumeDocument/MyDocument';
import { getStudentResume } from '../../../store/Actions/resumeActions';
import { RiDownload2Line } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { toast } from 'react-toastify';

const Resume = () => {

    const dispatch = useDispatch();

    const student = useSelector((state) => state.userReducer.userData?.student)
    // console.log(student)
    const resume = useSelector((state) => state.userReducer.userData?.student?.resume)
    // console.log(resume)


    const deleteEduHandler = async (id) => {
        const error = await dispatch(deleteEducation(id, student._id))
        console.log(error)
        error ? toast.error(error.data.message)
            : toast.success("Education deleted")
    }
    const deleteJobHandler = async (id) => {
        const error = await dispatch(deleteJob(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Job deleted")
    }
    const deleteInternHandler = async (id) => {
        const error = await dispatch(deleteInternship(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Internship deleted")
    }
    const deleterespoHandler = async (id) => {
        const error = await dispatch(deleteResponsibility(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Responsibility deleted")
    }
    const deletecourseHandler = async (id) => {
        const error = await dispatch(deleteTrainingCourse(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Course deleted")
    }
    const deleteprojectHandler = async (id) => {
        const error = await dispatch(deleteProject(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Project deleted")
    }
    const deleteskillHandler = async (id) => {
        const error = await dispatch(deleteSkill(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Skill deleted")
    }
    const deleteportfolioHandler = async (id) => {
        const error = await dispatch(deleteWorkSample(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Work Sample deleted")
    }
    const deleteaccomplishmentHandler = async (id) => {
        const error = await dispatch(deleteAccomplishment(id, student._id))
        error ? toast.error(error.data.message)
            : toast.success("Accomplishment deleted")
    }

    useEffect(() => {
        dispatch(getStudentResume(student._id))
    }, [dispatch])

    const updatedResume = useSelector((state) => state.resumeReducer?.resumeData?.updatedResume)
    console.log(updatedResume)

    return (
        <div className=''>
            {student && (
                <div className='w-full'>
                    <h1 className="text-center text-4xl font-semibold mt-6">Resume</h1>

                    <div className='w-[65%] m-auto mt-6'>
                        <div className='w-full py-3 rounded-lg border border-orange-300 flex justify-center items-center gap-2'>
                            <MdErrorOutline className='text-orange-300' />
                            <span>Whenever you apply to an internship or fresher job, this is the resume that the employer will see. Always make sure it is up to date.</span>
                        </div>

                        <div className='w-full border rounded-lg mt-5 p-10'>
                            <div className='personalDetail border-b py-5 flex justify-between'>

                                <div>
                                    <h6 className='capitalize font-semibold text-3xl flex items-center gap-2'>
                                        <span>{student.firstname} {student.lastname}</span>
                                        <Link
                                            to='/student/resume/edit/personal_details' className='mt-1.5'><HiPencil size={30}
                                                className='hover:bg-gray-200 rounded-full p-1.5' />
                                        </Link>
                                    </h6>

                                    <p className='font-normal text-base'>{student.email}</p>
                                    <p className='font-normal text-base'>{student.contact}</p>
                                    <p className='font-normal text-base capitalize'>{student.city}</p>
                                </div>

                                <div >
                                    {/* download resume */}
                                    <PDFDownloadLink document={<MyDocument updatedResume={updatedResume} />} fileName='resume'>
                                        <RiDownload2Line size={35}
                                            className='hover:bg-gray-200 rounded-full p-1.5' />
                                    </PDFDownloadLink>
                                </div>
                            </div>

                            <div className='education border-b py-5 flex items-start'>
                                <h2 className='uppercase font-semibold text-sm w-1/4'>education</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.education.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                {item?.college && (
                                                    <div>
                                                        {item?.branch && <p className='font-semibold'>{item?.degree}, <span>({item?.branch})</span></p>}
                                                        {item?.stream && item.eduType === "diploma" && (
                                                            <p className='font-semibold'>Diploma, ({item?.stream})</p>
                                                        )
                                                        }
                                                        {item?.stream && item.eduType === "phd" && (
                                                            <p className='font-semibold'>PHD, ({item?.stream})</p>
                                                        )
                                                        }
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
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/education/${item.id}`}><HiPencil
                                                        className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleteEduHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
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
                                <h2 className='font-semibold uppercase text-sm w-1/4'>WORK EXPERIENCE</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {
                                            resume.jobs.map((item) => (
                                                <li key={item.id}
                                                    className='mb-2 flex justify-between items-start'>

                                                    <div>
                                                        <p className='font-semibold'>{item?.designation}<span>, ({item?.profile})</span></p>
                                                        <p>{item.organization}, <span>{item.Location}</span></p>
                                                        <p className='flex gap-2'><span className='font-medium'>Job</span> <span>{item.startDate}</span>- <span>{item.endDate}</span></p>
                                                        <div>
                                                            <ul>
                                                                {item.description.split('\n').map((point, index) => (
                                                                    <li key={index}>
                                                                        <span>&#8226;</span> {/* Bullet point character */}
                                                                        <span className="ml-2">{point.trim().replace(/^\d+\./, '')}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-5'>
                                                        <Link to={`/student/resume/edit/job/${item.id}`}>
                                                            <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                                size={27} />
                                                        </Link>
                                                        <MdDelete onClick={() => deleteJobHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className=''>
                                        {
                                            resume.internships.map((item) => (
                                                <li key={item.id}
                                                    className='mb-2 flex justify-between items-start'>

                                                    <div>
                                                        <p className='font-semibold'>{item?.profile}</p>
                                                        <p>{item.organization}, <span>{item.Location}</span></p>
                                                        <p className='flex gap-2'><span className='font-medium'>Internship</span> <span>{item.startDate}</span>- <span>{item.endDate}</span></p>
                                                        <div>
                                                            <ul>
                                                                {item.description.split('\n').map((point, index) => (
                                                                    <li key={index}>
                                                                        <span>&#8226;</span> {/* Bullet point character */}
                                                                        <span className="ml-2">{point.trim().replace(/^\d+\./, '')}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-5'>
                                                        <Link to={`/student/resume/edit/internship/${item.id}`}>
                                                            <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                                size={27} />
                                                        </Link>
                                                        <MdDelete onClick={() => deleteInternHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
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
                                <h2 className='font-semibold uppercase text-sm w-1/4'>POSITIONS OF RESPONSIBILITY</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.responsibilities.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                <div>
                                                    <ul>
                                                        {item.description.split('\n').map((point, index) => (
                                                            <li key={index}>
                                                                <span>&#8226;</span> {/* Bullet point character */}
                                                                <span className="ml-2">{point.trim().replace(/^\d+\./, '')}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/responsibility/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleterespoHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                    {resume.responsibilities.length == "0" &&
                                        <Link
                                            className='text-blue-700' to='/student/resume/add/responsibility'>
                                            <span className='flex items-center gap-1'>
                                                <FaPlus />Add position of responsibility
                                            </span>
                                        </Link>}
                                </div>
                            </div>

                            <div className='training&course border-b py-5 flex items-start'>
                                <h2 className='font-semibold uppercase text-sm w-1/4'>TRAININGS/ COURSES</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.courses.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                <div>
                                                    <p className='font-semibold'>{item.training}</p>
                                                    <p>{item.organization}, <span>{item.Location}</span></p>
                                                    {item.startDate && item.endDate &&
                                                        <p>{item.startDate} - {item.endDate}</p>
                                                    }
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/training_courses/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deletecourseHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        className='text-blue-700' to='/student/resume/add/training_courses'>
                                        <span className='flex items-center gap-1'>
                                            <FaPlus />Add training/ course
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className='project border-b py-5 flex items-start'>
                                <h2 className='font-semibold uppercase text-sm w-1/4'>ACADEMICS/ <br /> PERSONAL PROJECTS</h2>
                                <div className='w-3/4'>

                                    <ul className=''>
                                        {resume.projects.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                <div>
                                                    <p className='font-semibold'>{item.title}</p>
                                                    {item.startDate && item.endDate &&
                                                        <p>{item.startDate} - {item.endDate}</p>
                                                    }
                                                    <div>
                                                        <ul>
                                                            {item.description.split('\n').map((point, index) => (
                                                                <li key={index}>
                                                                    <span>&#8226;</span> {/* Bullet point character */}
                                                                    <span className="ml-2">{point.trim().replace(/^\d+\./, '')}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/project/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5' size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleteprojectHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        className='text-blue-700' to='/student/resume/add/project'>
                                        <span className='flex items-center gap-1'>
                                            <FaPlus />Add academic/ personal project
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className='skills border-b py-5 flex items-start'>
                                <h2 className='font-semibold uppercase text-sm w-1/4'>SKILLS</h2>
                                <div className='w-3/4'>
                                    <ul className='flex w-full flex-wrap justify-between'>
                                        {resume.skills.map((item) => (
                                            <li key={item.id}
                                                className='w-[34%] mb-2 flex justify-between items-start'>
                                                <div>
                                                    <p className='font-semibold'>{item.skill}</p>
                                                    <p>{item.level}</p>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/skill/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleteskillHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        className='text-blue-700' to='/student/resume/add/skill'>
                                        <span className='flex items-center gap-1'>
                                            <FaPlus />Add skill
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div className='portfolio border-b py-5 flex items-start'>
                                <h2 className='font-semibold uppercase text-sm w-1/4'>PORTFOLIO/ <br /> WORK SAMPLES</h2>
                                <div className='w-3/4'>

                                    <ul className=''>
                                        {resume.worksamples.map((item) => (

                                            item.value && <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>

                                                <div className='flex items-center gap-2'>
                                                    {
                                                        item.key === "blogLink" && (
                                                            <FaBlog className=' hover:bg-gray-200 rounded-full p-1.5'
                                                                size={30} />
                                                        )
                                                    }
                                                    {
                                                        item.key === "githubLink" && (
                                                            <FaGithub className=' hover:bg-gray-200 rounded-full p-1.5'
                                                                size={30} />
                                                        )
                                                    }
                                                    {
                                                        item.key === "playstoreLink" && (
                                                            <FaGooglePlay className=' hover:bg-gray-200 rounded-full p-1.5'
                                                                size={30} />
                                                        )
                                                    }
                                                    {
                                                        item.key === "behanceLink" && (
                                                            <FaBehance className=' hover:bg-gray-200 rounded-full p-1.5'
                                                                size={30} />
                                                        )
                                                    }
                                                    {
                                                        item.key === "otherworkLink" && (
                                                            <MdWorkspacesFilled className=' hover:bg-gray-200 rounded-full p-1.5'
                                                                size={30} />
                                                        )
                                                    }
                                                    <Link to={item.value} className='hover:text-blue-600 capitalize'>{item.key.replace("Link", "")}</Link>
                                                </div>

                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/portfolio_work/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleteportfolioHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>


                                        ))}
                                    </ul>

                                    {(resume.worksamples.length < 5) &&
                                        <Link
                                            className='text-blue-700' to='/student/resume/add/portfolio_work'>
                                            <span className='flex items-center gap-1'>
                                                <FaPlus />Add portfolio/ work sample
                                            </span>
                                        </Link>
                                    }
                                </div>
                            </div>

                            <div className='accomplishment border-b py-5 flex items-start'>
                                <h2 className='font-semibold uppercase text-sm w-1/4'>ACCOMPLISHMENTS/ <br />
                                    ADDITIONAL DETAILS</h2>
                                <div className='w-3/4'>
                                    <ul className=''>
                                        {resume.accomplishments.map((item) => (
                                            <li key={item.id}
                                                className='mb-2 flex justify-between items-start'>
                                                <div>
                                                    <ul>
                                                        {item.description.split('\n').map((point, index) => (
                                                            <li key={index}>
                                                                <span>&#8226;</span> {/* Bullet point character */}
                                                                <span className="ml-2">{point.trim().replace(/^\d+\./, '')}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <Link to={`/student/resume/edit/accomplishment/${item.id}`}>
                                                        <HiPencil className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                            size={27} />
                                                    </Link>
                                                    <MdDelete onClick={() => deleteaccomplishmentHandler(item.id)} className='cursor-pointer hover:bg-gray-200 rounded-full p-1.5'
                                                        size={27} />
                                                </div>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                    {resume.accomplishments.length == "0" &&
                                        <Link
                                            className='text-blue-700' to='/student/resume/add/accomplishment'>
                                            <span className='flex items-center gap-1'>
                                                <FaPlus />Add accomplishment/ additional detail
                                            </span>
                                        </Link>
                                    }
                                </div>
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
