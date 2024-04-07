import React, { useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addEducation, updateStudent } from '../../../store/Actions/userActions'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from '../../../Components/Select'



const AddEducation = () => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)

  const [first, setfirst] = useState("true")

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    console.log(data)
    await dispatch(addEducation(student._id, data))
    navigate("/student/resume")
  }

  const backHandler = () => {
    navigate(-1)
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const year = currentYear - 46
  const startYearOptions = Array.from({ length: currentYear - year + 1 }, (_, index) => 1984 + index);


  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        {
          first === "true" && <div className='p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Education</h1>

            <Link
              onClick={() => setfirst("one")}
              className='text-blue-700' to='/student/resume/add/education'>
              <span className='flex items-center gap-1'>
                <FaPlus />Add graduation/ post graduation
              </span>
            </Link>
            <Link
              onClick={() => setfirst("two")}
              className='text-blue-700' to='/student/resume/add/education'>
              <span className='flex items-center gap-1'>
                <FaPlus />Add senior secondary (XII)
              </span>
            </Link>
            <Link
              onClick={() => setfirst("three")}
              className='text-blue-700' to='/student/resume/add/education'>
              <span className='flex items-center gap-1'>
                <FaPlus />Add secondary (X)
              </span>
            </Link>
            <Link
              onClick={() => setfirst("four")}
              className='text-blue-700' to='/student/resume/add/education'>
              <span className='flex items-center gap-1'>
                <FaPlus />Add diploma
              </span>
            </Link>
            <Link
              onClick={() => setfirst("five")}
              className='text-blue-700' to='/student/resume/add/education'>
              <span className='flex items-center gap-1'>
                <FaPlus />Add PhD
              </span>
            </Link>
          </div>
        }
        {
          first === "one" && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Graduation details/ Post graduation details</h1>

            <Input
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />
            <div className='w-full flex gap-2'>

              <Select
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              label="Degree"
              placeholder="e.g. B.tech"
              {...register("degree", {
                required: true
              })}
            />
            <Input
              label="Branch(Optional)"
              placeholder="e.g. Computer Science"
              {...register("branch", {
              })}
            />
            <Input
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-1/2 font-semibold m-auto'
            >Save</Button>
          </form>
        }

        {
          first === "two" && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Senior Secondary or Equivalent (XII) details</h1>

            <Select
              label="Year of completion"
              options={startYearOptions.reverse()}
              {...register("completionYear", {
                required: true
              })}
            />

            <Input
              label="Board"
              placeholder="e.g. CBSE"
              {...register("board", {
                required: true
              })}
            />

            <Input
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Input
              label="Stream"
              placeholder="e.g. Science"
              {...register("stream", {
                required: true
              })}
            />

            <Input
              label="School"
              placeholder="e.g. Hindu Public School"
              {...register("school", {
                required: true
              })}
            />

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-1/2 font-semibold m-auto'
            >Save</Button>
          </form>
        }
        {
          first === "three" && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Secondary (X) details</h1>

            <Select
              label="Year of completion"
              options={startYearOptions.reverse()}
              {...register("completionYear", {
                required: true
              })}
            />

            <Input
              label="Board"
              placeholder="e.g. CBSE"
              {...register("board", {
                required: true
              })}
            />

            <Input
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Input
              label="School"
              placeholder="e.g. Hindu Public School"
              {...register("school", {
                required: true
              })}
            />

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-1/2 font-semibold m-auto'
            >Save</Button>
          </form>
        }
        {
          first === "four" && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Diploma details</h1>

            <Input
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />

            <div className='w-full flex gap-2'>

              <Select
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              label="Stream (Optional)"
              placeholder="e.g. Creative Writing"
              {...register("stream", {
              })}
            />

            <Input
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-1/2 font-semibold m-auto'
            >Save</Button>
          </form>
        }
        {
          first === "five" && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'> PhD details</h1>

            <Input
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />

            <div className='w-full flex gap-2'>

              <Select
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              label="Stream"
              placeholder="e.g. Commerce & Business Studies"
              {...register("stream", {
                required: true
              })}
            />

            <Input
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-1/2 font-semibold m-auto'
            >Save</Button>
          </form>
        }

      </div>
    </div >


  )
}

export default AddEducation
