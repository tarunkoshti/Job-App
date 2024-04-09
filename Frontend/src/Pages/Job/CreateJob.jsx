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
    // <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>
    //   <h1 className='text-center font-semibold text-lg'>Create Job</h1>
    //   <form onSubmit={handleSubmit(create)}
    //     className='mt-5'
    //   >
    //     <div className='space-y-5'>
    //       <Input
    //         label="Profile"
    //         placeholder="Enter Profile"
    //         type="text"
    //         {
    //         ...register("profile")
    //         }
    //       />
    //       <Input
    //         label="Skills"
    //         placeholder="Enter Skills"
    //         type="text"
    //         {
    //         ...register("skills")
    //         }
    //       />
    //       <Select
    //         options={["In office", "Remote"]}
    //         label="Internship Type"
    //         className="mb-4"
    //         {...register("jobtype")}
    //       />
    //       <Input
    //         label="Opening"
    //         placeholder="Enter Number of openings"
    //         type="Number"
    //         {
    //         ...register("openings")
    //         }
    //       />
    //       <Input
    //         label="Description"
    //         placeholder="Write Description"
    //         type="text"
    //         {
    //         ...register("description")
    //         }
    //       />
    //       <Input
    //         label="Preferences"
    //         placeholder="Enter Preferences"
    //         type="text"
    //         {
    //         ...register("preferences")
    //         }
    //       />

    //       <Input
    //         label="Salary"
    //         placeholder="Enter Salary"
    //         type="number"
    //         {...register("salary")}
    //       />

    //       <Input
    //         label="Perks"
    //         placeholder="Enter Perks"
    //         type="text"
    //         {...register("perks")}
    //       />

    //       <Input
    //         label="Assements"
    //         placeholder="Enter assements"
    //         type="text"
    //         {...register("assements")}
    //       />
    //       <Input
    //         label="Company Name"
    //         placeholder="Enter Company Name"
    //         type="text"
    //         {...register("company")}
    //       />

    //       <Input
    //         label="Location"
    //         placeholder="Enter location"
    //         type="text"
    //         {...register("location")}
    //       />

    //       <Input
    //         label="Experience"
    //         placeholder="Enter Experience"
    //         type="text"
    //         {...register("experience")}
    //       />

    //       <Input
    //         label="Responsibility"
    //         placeholder="Enter Responsibility"
    //         type="text"
    //         {...register("responsibilities")}
    //       />
          
    //       <Input
    //         label="Qualifications"
    //         placeholder="Enter qualifications"
    //         type="text"
    //         {...register("qualifications")}
    //       />

    //       <Input
    //         label="Work conditions"
    //         placeholder="Enter Work conditions"
    //         type="text"
    //         {...register("workconditions")}
    //       />

    //       <Input
    //         label="Company Detail"
    //         placeholder="Enter Company Detail"
    //         type="text"
    //         {...register("companyDetail")}
    //       />

    //       <Button
    //         type='submit'
    //         bgColor='bg-[#1F2937]'
    //         className='w-full font-semibold'
    //       >Create</Button>
    //     </div>
    //   </form>
    // </div>
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
                                      {...register("profile")}
                                  />
                              </div>
                              {/* Skills-div */}
                              <div className="w-full md:max-w-lg mt-3">
                                  <Input
                                      label="Skills required"
                                      placeholder="e.g. Java"
                                      type="text"
                                      {...register("skills")}
                                  />
                              </div>
                              {/* Job-type-div */}
                              <div className="w-full md:max-w-lg mt-3">
                                  <Select
                                      options={["In office", "Remote", "Hybrid"]}
                                      label="Job Type"
                                      className="mb-4"
                                      {...register("jobtype")}
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
                                      {...register("start")}
                                  />
                              </div>
                          </div>
                      </div>
                      {/* Section-2-div */}
                      <div className=" mt-6 p-3 rounded-lg">
                          <h1 className="px-5 py-2 font-semibold">Salary & perks</h1>
                          <div className="w-full  flex flex-col items-center py-8 border-2 border-zinc-200 rounded-lg">
                              {/* Salary  */}
                              <div className="w-full md:max-w-lg mt-1">
                                  <Input
                                      label="Salary Amount (CTC)"
                                      placeholder="e.g. 10000"
                                      type="number"
                                      {...register("salary")}
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
                                  <Input
                                      label="Assessments"
                                      placeholder="Type your question here."
                                      type="text"
                                      {...register("assements")}
                                  />
                              </div>
                              {/*  preferences */}
                              <div className="w-full md:max-w-lg mt-1">
                                  <Input
                                      label="Preferences"
                                      placeholder="e.g. I want to work for a Good company"
                                      type="text"
                                      {...register("preferences")}
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
                                  <Input
                                      label="Description"
                                      placeholder="e.g. Ensure an amazing demo experience for the child and parent..."
                                      type="textarea" 
                                      {...register("description")}
                                  />
                              </div>

                               {/* responsibilities */}
                              <div className="w-full md:max-w-lg mt-1">
                                  <Input
                                      label="Responsibilities"
                                      placeholder="e.g. Adhere to the schedule for the demo as well as regular classes..."
                                      type="textarea" 
                                      {...register("description")}
                                  />
                              </div>

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
                              <div className="w-full md:max-w-lg mt-1">
                                  <Input
                                      label="Work Conditions"
                                      placeholder="e.g. Salary: 2-4 LPA ("
                                      type="textarea" 
                                      {...register("workconditions")}
                                  />
                              </div>

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
