import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Select from '../../Components/Select'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncCreateJob } from '../../store/Actions/jobActions'

const CreateJob = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const create = async (data) => {
        await dispatch(asyncCreateJob(data))
        navigate("/employee")
    }

    return (
        <>
            <div className="w-full flex flex-col items-center py-5 gap-5 bg-zinc-100">
                <h1 className="text-2xl font-semibold">Post Job</h1>
                <div className="mt-2  w-full md:w-1/2 py-10 px-8 border-2 border-zinc-200 rounded-xl">
                    <form onSubmit={handleSubmit(create)} className="">
                        {/* Section-1-div */}
                        <div className=" p-3 rounded-lg">
                            <h1 className="px-5 py-3 font-semibold">Job Details</h1>
                            <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">

                                {/* title-div */}
                                <div className="w-full md:max-w-lg mt-1">
                                    <Input
                                        label="Job Title"
                                        placeholder="e.g. Software Engineer Trainee"
                                        type="text"
                                        {...register("profile", {
                                            required: {
                                                value: true,
                                                message: "Profile is required"
                                            },
                                        })}
                                    />
                                    {errors.profile && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.profile.message}</span></p>}
                                </div>

                                {/* Skills-div */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Skills required"
                                        placeholder="e.g. Java"
                                        type="text"
                                        {...register("skills", {
                                            required: {
                                                value: true,
                                                message: "Skills is required"
                                            },
                                        })}
                                    />
                                    {errors.skills && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.skills.message}</span></p>}
                                </div>

                                {/* Job-type-div */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Select
                                        options={["In office", "Remote", "Hybrid"]}
                                        label="Job Type"
                                        className="mb-4"
                                        {...register("jobtype", {
                                            required: {
                                                value: true,
                                                message: "Jobtype is required"
                                            },
                                        })}
                                    />
                                     {errors.jobtype && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.jobtype.message}</span></p>}
                                </div>

                                {/* Working-type-div */}

                                <div className="w-full md:max-w-lg mt-3">
                                    <label className="block text-md">Working Type</label>
                                    <div className="mt-2 flex ml-5">
                                        <div className="mr-4 flex items-center">
                                            <input
                                                id="fullTime"
                                                name="workingType"
                                                type="radio"
                                                value="Full-time"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                {...register("workingtype", {
                                                    required: {
                                                        value: true,
                                                        message: "Workingtype is required"
                                                    },
                                                })}
                                            />
                                            <label htmlFor="fullTime" className="ml-2 block text-md text-gray-900">Full-time</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input
                                                id="partTime"
                                                name="workingType"
                                                type="radio"
                                                value="Part-time"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                {...register("workingtype", {
                                                    required: {
                                                        value: true,
                                                        message: "Workingtype is required"
                                                    },
                                                })}
                                            />
                                            <label htmlFor="partTime" className="ml-2 block text-md text-gray-900">Part-time</label>
                                        </div>
                                    </div>
                                    {errors.workingtype && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.workingtype.message}</span></p>}
                                </div>


                                {/* Starting */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <label className="block text-md">Start</label>
                                    <div className="mt-2 flex">
                                        <div className="mr-4 flex items-center ml-5">
                                            <input
                                                id="immediately"
                                                name="start"
                                                type="radio"
                                                value="Immediately"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                {...register("start")}
                                            />
                                            <label htmlFor="immediately" className="ml-2 block text-md text-gray-900">Immediately</label>
                                        </div>
                                        <div className='flex items-center'>
                                            <input
                                                id="later"
                                                name="start"
                                                type="radio"
                                                value="Later"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                {...register("start")}
                                            />
                                            <label htmlFor="later" className="ml-2 block text-md text-gray-900">Later</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Openings */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Number of Opening"
                                        placeholder="e.g. 5"
                                        type="number"
                                        {...register("openings")}
                                    />
                                </div>

                                {/* Start date */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Start Date"
                                        placeholder="e.g. 01-06-2024"
                                        type="text"
                                        {...register("startdate")}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Section-2-div */}
                        <div className=" mt-6 p-3 rounded-lg">
                            <h1 className="px-5 py-2 font-semibold">Salary & perks</h1>
                            <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">

                                {/* Salary  */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Salary Amount (CTC)"
                                        placeholder="e.g. 10000"
                                        type="number"
                                        {...register("salary")}
                                    />
                                </div>

                                {/*Annual Salary  */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Annual Amount (CTC)"
                                        placeholder="e.g. 3,50000 /- Year"
                                        type="number"
                                        {...register("package")}
                                    />
                                </div>

                                {/* Perks */}
                                <div className="w-full md:max-w-lg mt-3">
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
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Company Name"
                                        placeholder="e.g. Google"
                                        type="text"
                                        {...register("company")}
                                    />
                                </div>

                                {/* Experience */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Experience"
                                        placeholder="e.g. 0-2 Years"
                                        type="text"
                                        {...register("experience")}
                                    />
                                </div>

                                {/* Location */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Location"
                                        placeholder="e.g. Indore"
                                        type="text"
                                        {...register("location")}
                                    />
                                </div>

                                {/* Applicants */}
                                <div className="w-full md:max-w-lg mt-3">
                                    <Input
                                        label="Applicants"
                                        placeholder="e.g. 1250"
                                        type="text"
                                        {...register("applicants")}
                                    />
                                </div>

                                {/* Assessments */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="assessments" className="block text-md ">Assessments</label>
                                    <textarea
                                        id="assessments"
                                        name="assessments"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="Type your question here......"
                                        {...register("assessments")}
                                    />
                                </div>

                                {/*  preferences */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="preferences" className="block text-md">Preferences</label>
                                    <textarea
                                        id="preferences"
                                        name="preferences"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. I want to work for a Good company....."
                                        {...register("preferences")}
                                    />
                                </div>

                                {/* Description */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="description" className="block text-md ">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                                        {...register("description")}
                                    />
                                </div>

                                {/* responsibilities */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="responsibilities" className="block text-md">Responsibilities</label>
                                    <textarea
                                        id="responsibilities"
                                        name="responsibilities"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Adhere to the schedule for the demo as well as regular classes..."
                                        {...register("responsibilities")}
                                    />
                                </div>

                                {/* Qualifications */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="qualifications" className="block text-md ">Qualifications</label>
                                    <textarea
                                        id="qualifications"
                                        name="qualifications"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Solid understanding of JavaScript, HTML, CSS, and related web technologies..."
                                        {...register("qualifications")}
                                    />
                                </div>

                                {/* Work conditions */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="workconditions" className="block text-md ">Work Conditions</label>
                                    <textarea
                                        id="workconditions"
                                        name="workconditions"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. Salary: 2-4 LPA"
                                        {...register("workconditions")}
                                    />
                                </div>


                                {/* Company Detail */}
                                <div className="w-full md:max-w-lg mt-4">
                                    <label htmlFor="companyDetail" className="block text-md">Company Detail</label>
                                    <textarea
                                        id="companyDetail"
                                        name="companyDetail"
                                        rows="4"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-lg px-2 py-2 h-[110px] resize-none"
                                        placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world ...."
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
                                Post Job
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateJob
