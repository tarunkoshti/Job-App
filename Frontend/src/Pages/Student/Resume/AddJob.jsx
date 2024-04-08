import React, { useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addJob } from '../../../store/Actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from '../../../Components/Select'



const AddJob = () => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)

  // const [first, setfirst] = useState("true")

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    console.log(data)
    await dispatch(addJob(student._id, data))
    navigate("/student/resume")
  }

  const backHandler = () => {
    navigate(-1)
  }

  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        <form
          onSubmit={handleSubmit(submit)}
          className='w-full p-10 flex flex-col gap-5'>
          <h1 className='text-center text-xl font-semibold'>Graduation details/ Post graduation details</h1>

          <Input
            label="Designation"
            placeholder="e.g. Sofware Engineer"
            {...register("designation", {
              required: true
            })}
          />
          <Input
            label="Profile"
            placeholder="e.g. Operations"
            {...register("profile", {
              required: true
            })}
          />
          <Input
            label="Organization"
            placeholder="e.g. Career Race"
            {...register("organization", {
              required: true
            })}
          />
          <Input
            label="Location"
            placeholder="e.g. Mumbai"
            {...register("Location", {
              required: true
            })}
          />
          <div className='w-full flex gap-2'>

            <Input
              type="date"
              label="Start date"
              placeholder="Choose date"
              {...register("startDate", {
              })}
            />
            <Input
              type="date"
              label="End date"
              placeholder="Choose date"
              {...register("endDate", {
              })}
            />

          </div>

          <div className='w-full flex gap-2'>

            <label >
              <input
                type="checkbox"
                {...register("workType", {
                })}
              />
              Is work from home
            </label>

            <label >
              <input
                type="checkbox"
                {...register("currentWorking", {
                })}
              />
              Is work from home
            </label>

          </div>

          <Button
            type='submit'
            bgColor='bg-[#1F2937]'
            className='w-1/2 font-semibold m-auto'
          >Save</Button>
        </form>

      </div>
    </div >


  )
}

export default AddJob
