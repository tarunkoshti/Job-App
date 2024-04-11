import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addSkill, editSkill } from '../../../store/Actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";

const AddSkill = ({ edit = false }) => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)
  const { id } = useParams()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    edit ? await dispatch(editSkill(id, data))
      : await dispatch(addSkill(student._id, data))
      navigate("/student/resume")
  }

  const arr = student?.resume?.skills.filter(item => item.id === id)
  const skill = arr[0];

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
          <h1 className='text-center text-xl font-semibold'>Skills</h1>

          <Input
            defaultValue={edit ? (skill?.skill || '') : ''}
            label="Add skills"
            placeholder="e.g. Adobe Photoshop"
            {...register("skill", {
              required: true
            })}
          />

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

export default AddSkill
