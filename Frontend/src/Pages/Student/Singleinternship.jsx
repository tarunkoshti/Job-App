import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { internshipDetail } from '../../store/Actions/internshipActions';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { FaBookmark } from "react-icons/fa";
import { SiOnlyoffice } from "react-icons/si";
import { IoCalendarNumber } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { applyinternship } from '../../store/Actions/userActions';
import { bookmarkinternship } from '../../store/Actions/userActions';
import { disbookmarkinternship } from '../../store/Actions/userActions';
import { CiBookmark } from "react-icons/ci";
import { toast } from 'react-toastify';


const Singleinternship = () => {

    const { id } = useParams()

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const internships = useSelector((state) => state.internshipReducer.internshipData)
    console.log(internships)
    const internship = internships?.find(internship => internship._id === id)
    console.log(internship)

    const student = useSelector((state) => state.userReducer.userData?.student)
    console.log(student)

    const bookmarkedInternships = student?.bookmarkinternship
    console.log(bookmarkedInternships)
    const bookmarkedInternship = bookmarkedInternships?.find((internId) => internId == id)

    const bookmarkHandler = async () => {
            await dispatch(bookmarkinternship(id));
    }

    const disbookmarkHandler = async () => {
        await dispatch(disbookmarkinternship(id));
    }


    const appliedInternship = student?.internships?.find((internid) => internid == id)
    console.log(appliedInternship)

    const applyHandler = async () => {
        if(!appliedInternship){
            const error = await dispatch(applyinternship(id));
            error ? toast.error(error.data.message)
                : toast.success("Applied successfully")
            navigate("/student")
        } else {
            toast.error("You have already applied")
        }
    }

    
    // useEffect(() => {
    //     dispatch(internshipDetail(id));
    // }, [dispatch]);

    return (

        internship && <div class="w-full flex flex-col items-center">
            <h1 class="text-center text-4xl font-semibold mt-6">{internship.profile} internship</h1>
            <div class="w-full sm:w-3/4 mt-16 border-2 border-zinc-200 py-2 relative rounded-lg">

                <div class="border-b-2 border-zinc-200 ">
                    <div className='flex justify-between' >
                        <div class="flex items-center   w-fit gap-2 px-4 py-1 bg-[#1F2937] text-white rounded-md ml-10 mt-4">
                            <FaArrowTrendUp size={14} />
                            <h6 class="text-xs">Actively hiring</h6>
                        </div>
                        <div className='mt-4 px-10'>
                            <button >
                                {bookmarkedInternship ? <FaBookmark onClick={disbookmarkHandler} size={24} /> : <CiBookmark onClick={bookmarkHandler} size={24} />}
                            </button ></div >

                    </div >

                    {/* <!-- internship-profile --> */}
                    < div class="mt-3" >
                        <h1 class="text-lg ml-10 font-semibold">{internship.profile}</h1>
                    </div >

                    {/* <!-- company-name --> */}
                    < div class="mt-1" >
                        <h1 class="text-md ml-10 font-semibold text-zinc-600">{internship.company}</h1>
                    </div >

                    {/* <!-- location --> */}
                    < div class="flex items-center ml-9 gap-1 mt-6" >
                        <IoLocationSharp size={15} />
                        <h1 class="text-md font-semibold">{internship.location}</h1>
                    </div >

                    {/* <!-- start, salary, experience, and opening number --> */}
                    < div class="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-10 mt-8" >
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2">
                                <FaRegCirclePlay class="w-6 h-6 sm:w-8 sm:h-8" />
                                <h1 class="text-sm sm:text-base tracking-wider font-semibold">START DATE</h1>
                            </div>
                            <h1 class="font-normal">{internship.to}</h1>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2">
                                <FaMoneyBill class="w-6 h-6 sm:w-8 sm:h-8" />
                                <h1 class="text-sm sm:text-base tracking-wider font-semibold">CTC (ANNUAL)</h1>
                            </div>
                            <h1 class="font-normal">₹ {internship.stipend?.amount} /- Month</h1>
                        </div>
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2">
                                <IoBagCheck class="w-6 h-6 sm:w-8 sm:h-8" />
                                <h1 class="text-sm sm:text-base tracking-wider font-semibold uppercase">Duration</h1>
                            </div>
                            <h1 class="ml-2 font-normal">{internship.duration}</h1>
                        </div>
                        <div class="flex flex-col items-start gap-1">
                            <div class="flex items-center gap-2">
                                <SiOnlyoffice class="w-6 h-6 sm:w-8 sm:h-8" />
                                <h1 class="text-sm sm:text-base tracking-wider font-semibold uppercase">internship TYPE</h1>
                            </div>
                            <h1 class="ml-2 font-normal">{internship.internshiptype}</h1>
                        </div>
                    </div >


                    <div class="flex items-center gap-1 mt-6">
                        <div class="flex items-center gap-2 px-4 py-1 bg-[#1F2937] text-white rounded-md ml-10 mt-4">
                            <RxCountdownTimer size={16} />
                            <h6 class="text-xs">Posted 3 weeks ago</h6>
                        </div>
                        <div class=" px-4 py-1 bg-[#1F2937] text-white rounded-md ml-5 mt-4">
                            <h6 class="text-xs">internship</h6>
                        </div>
                        <div class=" px-4 py-1 bg-[#1F2937] text-white rounded-md ml-5 mt-4">
                            <h6 class="text-xs">Part time</h6>
                        </div>
                    </div>

                    {/* <!-- Applicants --> */}
                    <div class="flex items-center gap-2 mt-8 ml-10 mb-8">
                        <IoMdPeople size={30} />
                        <h1 class="font-medium">{internship.applicants} applicants</h1>
                    </div>
                </div >

                {/* <!-- description --> */}
                < div class="ml-10 mt-5" >
                    <div>
                        <h1 class="font-semibold">About the internship</h1>
                        <h3 class="ml-2">{internship.description}</h3>
                    </div>
                    <div class="mt-2">
                        <h1>Key responsibilities :</h1>
                        <p class="ml-3 mt-2">{internship.responsibility}
                            <p>1. Conduct demo classes as per the PlanetSpark content and methodology</p>
                            <p>2. Ensure an amazing demo experience for the child and parent</p>
                            <p>3. Conduct regular classes (post enrolment) using an in-house curriculum</p>
                            <p>4. Ensure timely feedback to the child</p>
                            <p>5. Adhere to the schedule for the demo as well as regular classes</p>
                        </p>
                    </div>
                    <div class="mt-4">
                        <h1>Qualifications:</h1>
                        <p class="ml-3 mt-2">{internship.qualifications}
                            <p>1. Solid understanding of JavaScript, HTML, CSS, and related web technologies</p>
                            <p>2. Experience working with the MERN (MongoDB, Express.js, React.js, Node.js) stack</p>
                            <p>3. Familiarity with front-end frameworks such as React or Angular</p>
                            <p>4. Strong problem-solving and analytical skills</p>
                            <p>5. Ability to work independently and as part of a team</p>
                            <p>6. Excellent communication and collaboration skills</p>
                        </p>
                    </div>
                    <div class="mt-4">
                        <h1>Compensation and working conditions:</h1>
                        <p class="ml-3 mt-2">{internship.workconditions}
                            <p>1. Salary: 2-4 LPA (based on experience and skills)</p>
                            <p>2. Commitment: 8 hours per day, Monday to Saturday</p>
                            <p>3. Probation period: 4 months</p>
                        </p>
                    </div>
                </div >

                {/* <!-- skills --> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Skill(s) required :</h1>
                    <h1 class="font-normal ml-4 mt-2 ">{internship.skills}</h1>
                </div >

                {/* <!-- Salary --> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Stipend</h1>
                    <h3 class="ml-4 capitalize">Stipend: {internship.stipend?.status} </h3>
                </div >

                {/* <!-- Joining--> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Joining</h1>
                    <h3 class="ml-4 capitalize">{internship.startdate} </h3>
                </div >

                {/* <!-- Staring Date --> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Duration Date</h1>
                    <h3 class="ml-4 ">{internship.from}   to   {internship.to}</h3>
                </div >

                {/* <!-- Openings --> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Number of openings :</h1>
                    <h3 class="ml-4 mt-1">{internship.openings}</h3>
                </div >

                {/* <!-- Preferences --> */}
                < div class="ml-10 mt-5" >
                    <h1 class="font-semibold text-lg">Preferences :</h1>
                    <h3 class="ml-4 mt-1">{internship.preferences}</h3>
                </div >

                {/* <!-- Perks --> */}
                < div className="ml-10 mt-5" >
                    <h1 className="font-semibold text-lg">Perks:</h1>
                    <ul className="list-disc ml-10">
                        {internship.perks && internship.perks.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div >


                {/* <!-- Assessments --> */}
                {/* <div class="ml-10 mt-5">
                <h1 class="font-semibold text-lg">Assessments :</h1>
                <h3 class="ml-4 mt-1">{internship.assessments}</h3>
                </div> */}

                {/* <!-- companyDetail --> */}
                <div class="ml-10 mt-5">
                    <h1 class="font-semibold text-lg">About {internship.company}</h1>
                    <h3 class="ml-4 mt-1 w-full px-4">At {internship.companyDetail}, we're not just another digital agency, we're your dedicated allies in the dynamic world of marketing, community management, and website development. Our mission is simple - to provide our clients, ranging from small influencers and startups to industry-leading enterprises, with an unparalleled ease-of-work experience.</h3>
                </div>

                {/* <!-- Contect Number --> */}
                <div class="ml-10 mt-5">
                    <h1 class="font-semibold text-lg">Contect Number :</h1>
                    <h3 class="ml-4 mt-1">{internship.contact}</h3>
                </div>


                <div class="flex justify-center items-center mt-5 py-4">
                    <div class="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex items-center  rounded-lg">
                        <div class="flex items-center gap-2 ml-4 md:ml-10">
                            <IoCalendarNumber class="w-6 h-6 md:w-8 md:h-8" />
                            <h3 class="text-sm md:text-base">Hiring since August 2023</h3>
                        </div>
                        <div class="flex items-center gap-2 ml-4 md:ml-10">
                            <MdMessage class="w-6 h-6 md:w-8 md:h-8" />
                            <h3 class="text-sm md:text-base">28 opportunities posted</h3>
                        </div>
                        <div class="flex items-center gap-2 ml-4 md:ml-10">
                            <RiContactsFill class="w-6 h-6 md:w-8 md:h-8" />
                            <h3 class="text-sm md:text-base">105 candidate hired</h3>
                        </div>
                    </div>
                </div>




                <div class="flex justify-center items-center mt-8 py-8">
                    <button onClick={applyHandler} class="px-8 py-2 bg-[#1F2937] text-white font-semibold rounded-lg">Apply Now</button>
                </div>
            </div >
        </div >

    )
}

export default Singleinternship
