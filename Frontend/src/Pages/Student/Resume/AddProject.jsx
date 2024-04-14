import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addProject, editProject } from '../../../store/Actions/userActions'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from '../../../Components/Select'



const AddProject = ({ edit = false }) => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)
  const { id } = useParams()

  let [currlength, setCurrlength] = useState(0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    if (currlength <= 1000) {
      edit ? await dispatch(editProject(id, data))
        : await dispatch(addProject(student._id, data))
      navigate("/student/resume")
    }
  }

  const backHandler = () => {
    navigate(-1)
  }

  useEffect(() => {
    const descriptionValue = watch((value, { name }) => {
      if (name == "description") {
        let str = value.description
        setCurrlength(str.length)
      }
    });

  }, [watch]);

  const arr = student?.resume?.projects.filter(item => item.id === id)
  const project = arr[0];

  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        <form
          onSubmit={handleSubmit(submit)}
          className='w-full p-10 flex flex-col gap-5'>
          <h1 className='text-center text-xl font-semibold'>Project details</h1>

          <Input
            defaultValue={edit ? (project?.title || '') : ''}
            label="Title"
            placeholder="e.g. Job Seeker"
            {...register("title", {
              required: true
            })}
          />
          
          <div className='w-full flex gap-2'>

            <Input
              defaultValue={edit ? (project?.startDate || '') : ''}
              type="date"
              label="Start date"
              placeholder="Choose date"
              {...register("startDate", {
              })}
            />
            <Input
              defaultValue={edit ? (project?.endDate || '') : ''}
              type="date"
              label="End date"
              placeholder="Choose date"
              {...register("endDate", {
              })}
            />

          </div>

          <div className='w-full flex gap-2 '>

            <label className='w-1/2 pl-1 flex gap-1.5 items-center'>
              {/* <input
                type="checkbox"
                {...register("workType", {
                })}
              />
              <span>Is work from home</span> */}
            </label>

            <label className='w-1/2 pl-1 flex gap-1.5 items-center'>
              <input
                defaultChecked={edit ? (project?.currentWorking || '') : ''}
                type="checkbox"
                {...register("currentWorking", {
                })}
              />
              <span>Currently ongoing</span>
            </label>

          </div>

          <label htmlFor="des" className='flex flex-col gap-1'>
            <span>Description (Optional)</span>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            <textarea
              defaultValue={edit ? (project?.description || '') : ''}
              name="description"
              className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[100px] resize-none text-sm'
              id='des'
              type="description"
              placeholder={`Short description about project (max 1000 char)\n#Keep it in points`}
              {...register("description", {
                maxLength: {
                  value: 1000,
                  message: "Description should not exceed 1000 characters."
                }
              })}
            />
            <span className='text-xs'>{currlength}/1000</span>
          </label>

          <div className='w-full'>
            <Input
              defaultValue={edit ? (project?.projectLink || '') : ''}
              label="Project link (Optional)"
              placeholder="e.g. http://myprojectlink.com"
              {...register("projectLink", {
              })}
            />
            <p className='text-sm mt-1 text-gray-400'>If you have multiple project links or an offline project, upload and provide link to google drive.</p>
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

export default AddProject
