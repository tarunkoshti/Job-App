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
    <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>
      <h1 className='text-center font-semibold text-lg'>Create Job</h1>
      <form onSubmit={handleSubmit(create)}
        className='mt-5'
      >
        <div className='space-y-5'>
          <Input
            label="Profile"
            placeholder="Enter Profile"
            type="text"
            {
            ...register("profile")
            }
          />
          <Input
            label="Skills"
            placeholder="Enter Skills"
            type="text"
            {
            ...register("skills")
            }
          />
          <Select
            options={["In office", "Remote"]}
            label="Internship Type"
            className="mb-4"
            {...register("jobtype")}
          />
          <Input
            label="Opening"
            placeholder="Enter Number of openings"
            type="Number"
            {
            ...register("openings")
            }
          />
          <Input
            label="Description"
            placeholder="Write Description"
            type="text"
            {
            ...register("description")
            }
          />
          <Input
            label="Preferences"
            placeholder="Enter Preferences"
            type="text"
            {
            ...register("preferences")
            }
          />

          <Input
            label="Salary"
            placeholder="Enter Salary"
            type="number"
            {...register("salary")}
          />

          <Input
            label="Perks"
            placeholder="Enter Perks"
            type="text"
            {...register("perks")}
          />

          <Input
            label="Assements"
            placeholder="Enter assements"
            type="text"
            {...register("assements")}
          />
          <Input
            label="Company Name"
            placeholder="Enter Company Name"
            type="text"
            {...register("company")}
          />

          <Input
            label="Location"
            placeholder="Enter location"
            type="text"
            {...register("location")}
          />

          <Input
            label="Experience"
            placeholder="Enter Experience"
            type="text"
            {...register("experience")}
          />

          <Input
            label="Responsibility"
            placeholder="Enter Responsibility"
            type="text"
            {...register("responsibilities")}
          />
          
          <Input
            label="Qualifications"
            placeholder="Enter qualifications"
            type="text"
            {...register("qualifications")}
          />

          <Input
            label="Work conditions"
            placeholder="Enter Work conditions"
            type="text"
            {...register("workconditions")}
          />

          <Input
            label="Company Detail"
            placeholder="Enter Company Detail"
            type="text"
            {...register("companyDetail")}
          />

          <Button
            type='submit'
            bgColor='bg-[#1F2937]'
            className='w-full font-semibold'
          >Create</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateJob
