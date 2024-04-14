import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Select from '../../Components/Select'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncCreateInternship } from '../../store/Actions/internshipActions'

const CreateInternship = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const create = async (data) => {
        await dispatch(asyncCreateInternship(data))
        navigate("/employee")
    }

    return (

       <>
            <div className="w-full flex flex-col items-center py-5 gap-5 bg-zinc-100">
                <h1 className="text-2xl font-semibold">Post Internship</h1>
                <div className="mt-2  w-full md:w-1/2 py-10 px-8 border-2 border-zinc-200 rounded-xl">
                    <form onSubmit={handleSubmit(create)} className="">
                        {/* Section-1-div */}
                        <div className=" p-3 rounded-lg">
                            <h1 className="px-5 py-3 font-semibold">Internship Details</h1>
                            <div className="w-full flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                                {/* Profile-div */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Profile"
                                        placeholder="e.g. MERN Stack Development"
                                        type="text"
                                        {...register("profile")}
                                    />
                                </div>
                                {/* Skills-div */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Skills"
                                        placeholder="e.g. Java"
                                        type="text"
                                        {...register("skills")}
                                    />
                                </div>

                               {/* Internship-type-div */}
                                    <div className="w-full md:max-w-lg mt-5">
                                        <label className="block mb-2">Internship Type:</label>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                                                <input
                                                    id="inOffice"
                                                    type="radio"
                                                    value="In office"
                                                    {...register("internshiptype")}
                                                />
                                                <label htmlFor="inOffice" className="ml-2 mr-4">In office</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="remote"
                                                    type="radio"
                                                    value="Remote"
                                                    {...register("internshiptype")}
                                                />
                                                <label htmlFor="remote" className="ml-2">Remote</label>
                                            </div>
                                        </div>
                                    </div>
                            

                               {/* Working-type-div */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <label className="block mb-2">Working Type:</label>
                                    <div className="flex items-center gap-5">
                                        <div className="flex items-center">
                                            <input
                                                id="partTime"
                                                type="radio"
                                                value="Part-time"
                                                {...register("workingtype")}
                                            />
                                            <label htmlFor="partTime" className="ml-2">Part-time</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="fullTime"
                                                type="radio"
                                                value="Full-time"
                                                {...register("workingtype")}
                                            />
                                            <label htmlFor="fullTime" className="ml-2">Full-time</label>
                                        </div>
                                    </div>
                                </div>



                                {/* Openings */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Number of Openings"
                                        placeholder="e.g. 5"
                                        type="number"
                                        {...register("openings")}
                                    />
                                </div>

                                {/* Start Date */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label className="block mb-2">Start Date:</label>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <input
                                                id="immediately"
                                                type="radio"
                                                value="Immediately"
                                                {...register("startdate")}
                                            />
                                            <label htmlFor="immediately" className="ml-2 mr-4">Immediately</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="later"
                                                type="radio"
                                                value="Later"
                                                {...register("startdate")}
                                            />
                                            <label htmlFor="later" className="ml-2">Later</label>
                                        </div>
                                    </div>
                                </div>


                                {/* Duration */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Duration"
                                        placeholder="e.g. 6 Month"
                                        type="text"
                                        {...register("duration")}
                                    />
                                </div>

                                {/* From */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <label htmlFor="fromDate" className="block mb-2">From:</label>
                                    <input
                                        id="fromDate"
                                        type="date"
                                        {...register("from")}
                                        className="border border-gray-300 px-3 py-2 rounded-lg w-full"
                                    />
                                </div>

                                {/* To */}
                                
                                <div className="w-full md:max-w-lg mt-3">
                                    <label htmlFor="toDate" className="block mb-2">To:</label>
                                    <input
                                        id="toDate"
                                        type="date"
                                        {...register("to")}
                                        className="border border-gray-300 px-3 py-2 rounded-lg w-full"
                                    />
                                </div>

                                {/* Responsibility */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <label htmlFor="responsibility" className="block mb-2">Intern's Responsibility:</label>
                                    <textarea
                                        id="responsibility"
                                        placeholder="Intern's day-to-day responsibility : "
                                        {...register("responsibility")}
                                        className="border border-gray-300 px-3 py-2 rounded-lg w-full h-[110px] resize-none"
                                    />
                                </div>


                            </div>
                        </div>

                        {/* Section-2-div */}
                        <div className=" mt-6 p-3 rounded-lg">
                            <h1 className="px-5 py-2 font-semibold">Stipend & perks</h1>
                            <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                                {/* Stipend */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Stipend Amount"
                                        placeholder="'e.g. 10000'"
                                        type="number"
                                        {...register("stipend.amount")}
                                    />
                                </div>
                                {/* Status */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Select
                                        options={["Fixed", "Negotiable", "Performance based", "Unpaid"]}
                                        label="Stipend Status"
                                        className="mb-4"
                                        {...register("stipend.status")}
                                    />
                                </div>

                                {/* Perks */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <label className="block mb-2">Perks:</label>
                                    <div className="flex flex-col ml-4">
                                        <div className="flex items-center">
                                            <input
                                                id="certificate"
                                                name="perks"
                                                type="checkbox"
                                                value="Certificate"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="certificate" className="ml-2">Certificate</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="letterOfRecommendation"
                                                name="perks"
                                                type="checkbox"
                                                value="Letter of Recommendation"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="letterOfRecommendation" className="ml-2">Letter of Recommendation</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="flexibleWorkHours"
                                                name="perks"
                                                type="checkbox"
                                                value="Flexible Work Hours"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="flexibleWorkHours" className="ml-2">Flexible Work Hours</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="fiveDaysAWeek"
                                                name="perks"
                                                type="checkbox"
                                                value="5 Days a Week"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="fiveDaysAWeek" className="ml-2">5 Days a Week</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="informalDressCode"
                                                name="perks"
                                                type="checkbox"
                                                value="Informal Dress Code"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="informalDressCode" className="ml-2">Informal Dress Code</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="freeSnacksAndBeverages"
                                                name="perks"
                                                type="checkbox"
                                                value="Free Snacks & Beverages"
                                                {...register("perks")}
                                            />
                                            <label htmlFor="freeSnacksAndBeverages" className="ml-2">Free Snacks & Beverages</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Section-3-div */}
                        <div className=" mt-5 p-3 rounded-lg">
                            <h1 className="px-5 py-2 font-semibold">Company, Location, and Description</h1>
                            <div className="w-full mt-2  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">

                                {/* Company */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Company Name"
                                        placeholder="e.g. Google"
                                        type="text"
                                        {...register("company")}
                                    />
                                </div>

                                {/* Location */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Location"
                                        placeholder="e.g. Indore"
                                        type="text"
                                        {...register("location")}
                                    />
                                </div>

                                {/* Assessments */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <label htmlFor="assessments" className="block mb-2">Assessments:</label>
                                    <textarea
                                        id="assessments"
                                        name="assessments"
                                        className="w-full border rounded px-3 py-2 h-[110px] resize-none"
                                        placeholder="Type your question here...."
                                        {...register("assessments")}
                                    />
                                </div>


                                {/* Applicants */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Applicants"
                                        placeholder="e.g. 1250"
                                        type="text"
                                        {...register("applicants")}
                                    />
                                </div>

                                {/* Description */}
                                <div className="w-full md:max-w-lg mt-1">
                                        <label htmlFor="description" className="block mb-2">Description:</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            className="w-full border rounded px-3 py-2 h-[110px] resize-none"
                                            placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                                            {...register("description")}
                                        />
                                    </div>


                                {/* Qualifications */}
                              <div className="w-full md:max-w-lg mt-1">
                                    <label htmlFor="qualifications" className="block mb-2">Qualifications:</label>
                                    <textarea
                                        id="qualifications"
                                        name="qualifications"
                                        className="w-full border rounded px-3 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Solid understanding of JavaScript, HTML, CSS, and related web technologies..."
                                        {...register("qualifications")}
                                    />
                                </div>


                                {/* Work conditions */}
                               <div className="w-full md:max-w-lg mt-1">
                                    <label htmlFor="workconditions" className="block mb-2">Work Conditions:</label>
                                    <textarea
                                        id="workconditions"
                                        name="workconditions"
                                        className="w-full border rounded px-3 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Salary: 2-4 LPA"
                                        {...register("workconditions")}
                                    />
                                </div>


                                {/* Company Detail */}
                                <div className="w-full md:max-w-lg mt-1">
                                <label htmlFor="companyDetail" className="block mb-2">Company Detail:</label>
                                <textarea
                                    id="companyDetail"
                                    name="companyDetail"
                                    className="w-full border rounded px-3 py-2 h-[110px] resize-none"
                                    placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world..."
                                    {...register("companyDetail")}
                                />
                            </div>


                            </div>
                        </div>
                        {/* Section-4-div */}
                        <div className=" mt-6 p-3 rounded-lg">
                            <h1 className="px-5 py-2 font-semibold">Alternate Mobile Number for this listing</h1>
                            <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                                {/* Contact */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Contact Number"
                                        placeholder="e.g. +91 Enter Mobile Number...."
                                        type="number"
                                        {...register("contact")}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10">
                            <Button
                                type="submit"
                                bgColor="bg-[#1F2937]"
                                className="py-2 px-5 bg-[#1F2937] text-white rounded-lg"
                            >
                                Post Internship
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

       </>
       
    )
}

export default CreateInternship
