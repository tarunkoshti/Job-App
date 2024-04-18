import React, { useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addEducation, editEducation, updateStudent } from '../../../store/Actions/userActions'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from '../../../Components/Select'



const AddEducation = ({ edit = false }) => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)

  const { id } = useParams()

  const [first, setfirst] = useState("true")

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    console.log(data)
    edit ? await dispatch(editEducation(id, student._id, data))
      : await dispatch(addEducation(student._id, data))
    navigate("/student/resume")
  }

  const backHandler = () => {
    navigate(-1)
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const year = currentYear - 46
  const startYearOptions = Array.from({ length: currentYear - year + 1 }, (_, index) => 1984 + index);

  const edu = student?.resume?.education.filter(item => item.id === id)
  // console.log(edu?.eduType)

  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        {
          !edit && first === "true" && <div className='p-10 flex flex-col gap-5'>
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
          ((edu && (edu.eduType === "graduation")) || first === "one") && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Graduation details/ Post graduation details</h1>

            <Input
              defaultValue="graduation"
              className="hidden"
              {...register("eduType")}
            />
            <Input
              defaultValue={edit ? (edu?.college || '') : ''}
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />
            <div className='w-full flex gap-2'>

              <Select
                defaultValue={edit ? (edu?.startYear || '') : ''}
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                defaultValue={edit ? (edu?.lastYear || '') : ''}
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              defaultValue={edit ? (edu?.degree || '') : ''}
              label="Degree"
              placeholder="e.g. B.tech"
              {...register("degree", {
                required: true
              })}
            />
            <Input
              defaultValue={edit ? (edu?.branch || '') : ''}
              label="Branch(Optional)"
              placeholder="e.g. Computer Science"
              {...register("branch", {
              })}
            />
            <Input
              defaultValue={edit ? (edu?.performance || '') : ''}
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
          ((edu && (edu.eduType === "seniorSecondary")) || first === "two") && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Senior Secondary or Equivalent (XII) details</h1>

            <Input
              defaultValue="seniorSecondary"
              className="hidden"
              {...register("eduType")}
            />

            <Select
              defaultValue={edit ? (edu?.completionYear || '') : ''}
              label="Year of completion"
              options={startYearOptions.reverse()}
              {...register("completionYear", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.board || '') : ''}
              label="Board"
              placeholder="e.g. CBSE"
              {...register("board", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.performance || '') : ''}
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Input
              defaultValue={edit ? (edu?.stream || '') : ''}
              label="Stream"
              placeholder="e.g. Science"
              {...register("stream", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.school || '') : ''}
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
          ((edu && (edu.eduType === "secondary")) || first === "three") && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Secondary (X) details</h1>

            <Input
              defaultValue="secondary"
              className="hidden"
              {...register("eduType")}
            />

            <Select
              defaultValue={edit ? (edu?.completionYear || '') : ''}
              label="Year of completion"
              options={startYearOptions.reverse()}
              {...register("completionYear", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.board || '') : ''}
              label="Board"
              placeholder="e.g. CBSE"
              {...register("board", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.performance || '') : ''}
              label="Performance"
              placeholder="0.00"
              {...register("performance", {
              })}
            />

            <Input
              defaultValue={edit ? (edu?.school || '') : ''}
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
          ((edu && (edu.eduType === "diploma")) || first === "four") && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'>Diploma details</h1>

            <Input
              defaultValue="diploma"
              className="hidden"
              {...register("eduType")}
            />

            <Input
              defaultValue={edit ? (edu?.college || '') : ''}
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />

            <div className='w-full flex gap-2'>

              <Select
                defaultValue={edit ? (edu?.startYear || '') : ''}
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                defaultValue={edit ? (edu?.lastYear || '') : ''}
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              defaultValue={edit ? (edu?.stream || '') : ''}
              label="Stream (Optional)"
              placeholder="e.g. Creative Writing"
              {...register("stream", {
              })}
            />

            <Input
              defaultValue={edit ? (edu?.performance || '') : ''}
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
          ((edu && (edu.eduType === "phd")) || first === "five") && <form
            onSubmit={handleSubmit(submit)}
            className='w-full p-10 flex flex-col gap-5'>
            <h1 className='text-center text-xl font-semibold'> PhD details</h1>

            <Input
              defaultValue="phd"
              className="hidden"
              {...register("eduType")}
            />

            <Input
              defaultValue={edit ? (edu?.college || '') : ''}
              label="College"
              placeholder="e.g. Hindu College"
              {...register("college", {
                required: true
              })}
            />

            <div className='w-full flex gap-2'>

              <Select
                defaultValue={edit ? (edu?.startYear || '') : ''}
                label="Start year"
                options={startYearOptions.reverse()}
                {...register("startYear", {
                  required: true
                })}
              />

              <Select
                defaultValue={edit ? (edu?.lastYear || '') : ''}
                label="End year"
                options={startYearOptions}
                {...register("lastYear", {
                  required: true
                })}
              />

            </div>

            <Input
              defaultValue={edit ? (edu?.stream || '') : ''}
              label="Stream"
              placeholder="e.g. Commerce & Business Studies"
              {...register("stream", {
                required: true
              })}
            />

            <Input
              defaultValue={edit ? (edu?.performance || '') : ''}
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
