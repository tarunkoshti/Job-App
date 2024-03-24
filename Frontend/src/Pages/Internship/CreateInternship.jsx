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
    <div className="mt-2 bg-yellow-300 w-full md:w-1/2 py-10 px-8 border-2 border-black rounded-xl">
        <form onSubmit={handleSubmit(create)} className="">
            {/* Section-1-div */}
            <div className="bg-red-500 p-3 rounded-lg">
                <h1 className="px-5 py-3 font-semibold">Internship Details</h1>
                <div className="w-full bg-blue-600 flex flex-col items-center py-8 border-2 border-black rounded-lg">
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
                    <div className="w-full md:max-w-lg mt-3">
                        <Select
                            options={["In office", "Remote"]}
                            label="Internship Type"
                            className="mb-4"
                            {...register("internshiptype")}
                        />
                    </div>
                    {/* Working-type-div */}
                    <div className="w-full md:max-w-lg mt-3">
                        <Input
                            label="Working Type"
                            placeholder="e.g. Part-time or Full-time"
                            type="text"
                            {...register("workingtype")}
                        />
                    </div>
                    {/* Openings */}
                    <div className="w-full md:max-w-lg mt-3">
                        <Input
                            label="Opening"
                            placeholder="e.g. 5"
                            type="number"
                            {...register("openings")}
                        />
                    </div>
                    {/* Start date */}
                    <div className="w-full md:max-w-lg mt-3">
                        <Input
                            label="Start Date"
                            placeholder="e.g. Immediately or Later"
                            type="text"
                            {...register("startdate")}
                        />
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
                        <Input
                            label="From"
                            placeholder="e.g. 01-01-2024"
                            type="text"
                            {...register("from")}
                        />
                    </div>
                    {/* To */}
                    <div className="w-full md:max-w-lg mt-3">
                        <Input
                            label="To"
                            placeholder="e.g. 01-06-2024"
                            type="text"
                            {...register("to")}
                        />
                    </div>
                    {/* Responsibility */}
                    <div className="w-full md:max-w-lg mt-3">
                        <Input
                            label="Responsibility"
                            placeholder="Intern's day-to-day responsibility"
                            type="text"
                            {...register("responsibility")}
                        />
                    </div>
                </div>
            </div>
            {/* Section-2-div */}
            <div className="bg-green-400 mt-6 p-3 rounded-lg">
                <h1 className="px-5 py-2 font-semibold">Stipend & perks</h1>
                <div className="w-full bg-pink-500 flex flex-col items-center py-8 border-2 border-black rounded-lg">
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
                        <Input
                            label="Perks"
                            placeholder="e.g. 5 Days working"
                            type="text"
                            {...register("perks")}
                        />
                    </div>
                </div>
            </div>
            {/* Section-3-div */}
            <div className="bg-purple-400 mt-5 p-3 rounded-lg">
                <h1 className="px-5 py-2 font-semibold">Company, Location, and Description</h1>
                <div className="w-full mt-2 bg-orange-500 flex flex-col items-center py-8 border-2 border-black rounded-lg">
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
                        <Input
                            label="Assessments"
                            placeholder="Type your question here."
                            type="text"
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
                    {/* <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Description"
                            placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                            type="text"
                            {...register("description")}
                        />
                    </div> */}
                    {/* Description */}
                    <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Description"
                            placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                            type="textarea" 
                            {...register("description")}
                        />
                    </div>

                    {/* Qualifications */}
                    {/* <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Qualifications"
                            placeholder="e.g. Solid understanding of JavaScript, HTML, CSS, and related web technologies..."
                            type="text"
                            {...register("qualifications")}
                        />
                    </div> */}
                    {/* Qualifications */}
                    <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Qualifications"
                            placeholder="e.g. Solid understanding of JavaScript, HTML, CSS, and related web technologies..."
                            type="textarea" 
                            {...register("qualifications")}
                        />
                    </div>


                    {/* Work conditions */}
                    {/* <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Work Conditions"
                            placeholder="e.g. Salary: 2-4 LPA ("
                             type="text"
                            {...register("workconditions")}
                        />
                    </div> */}
                    {/* Work conditions */}
                    <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Work Conditions"
                            placeholder="e.g. Salary: 2-4 LPA ("
                            type="textarea" 
                            {...register("workconditions")}
                        />
                    </div>

                    {/* Company Detail */}
                    {/* <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Company Detail"
                            placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world ...."
                            type="text"
                            {...register("companyDetail")}
                        />
                    </div> */}
                    {/* Company Detail */}
                    <div className="w-full md:max-w-lg mt-1">
                        <Input
                            label="Company Detail"
                            placeholder="e.g. We're not just another digital agency, we're your dedicated dynamic world ...."
                            type="textarea" 
                            {...register("companyDetail")}
                        />
                    </div>

                </div>
            </div>
            {/* Section-4-div */}
            <div className="bg-[#e11d48] mt-6 p-3 rounded-lg">
                <h1 className="px-5 py-2 font-semibold">Alternate Mobile Number for this listing</h1>
                <div className="w-full bg-[#5b21b6] flex flex-col items-center py-8 border-2 border-black rounded-lg">
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
