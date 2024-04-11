import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addResponsibility, editResponsibility } from '../../../store/Actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";



const AddResponsibility = ({ edit = false }) => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)
  const { id } = useParams()

  let [currlength, setCurrlength] = useState(0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    if (currlength <= 250) {
      edit ? await dispatch(editResponsibility(id, data))
        : await dispatch(addResponsibility(student._id, data))
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

  const arr = student?.resume?.responsibilities.filter(item => item.id === id)
  const responsibility = arr[0];

  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        <form
          onSubmit={handleSubmit(submit)}
          className='w-full p-10 flex flex-col gap-5'>
          <h1 className='text-center text-xl font-semibold'>Position of responsibility</h1>


          <label htmlFor="des" className='flex flex-col gap-1'>
            <span>Description</span>
            <p className='text-sm mb-1 text-gray-400'>If you have been/are an active part of societies, conducted any events or led a team, add details here</p>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            <textarea
              defaultValue={edit ? (responsibility?.description || '') : ''}
              name="description"
              className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[100px] resize-none text-sm'
              id='des'
              type="description"
              placeholder={`e.g. Led a team of 5 volunteers to plan and conduct activities for literary event in college fest.\n#Keep it to 2-3 points`}
              {...register("description", {
                required:true,
                maxLength: {
                  value: 250,
                  message: "Description should not exceed 250 characters."
                }
              })}
            />
            <span className='text-xs'>{currlength}/250</span>
          </label>

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

export default AddResponsibility
