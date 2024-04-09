import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addAccomplishment } from '../../../store/Actions/userActions'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";



const AddAccomplishment = () => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)
  let [currlength, setCurrlength] = useState(0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    if (currlength <= 250) {
      await dispatch(addAccomplishment(student._id, data))
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
            {/* <span>Description</span> */}
            <p className='text-sm mb-1 font-semibold text-gray-700'>Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</p>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            <textarea
              name="description"
              className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[100px] resize-none text-sm'
              id='des'
              type="description"
              placeholder={`e.g. Secured 1st rank among 500 entries in national level story writing compitition organised by Carrer Race.\n#Keep it to 2-3 points`}
              {...register("description", {
                required: true,
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

export default AddAccomplishment
