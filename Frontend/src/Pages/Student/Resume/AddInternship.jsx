import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addInternship, addJob, editInternship } from '../../../store/Actions/userActions'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import Select from '../../../Components/Select'



const AddInternship = ({ edit = false }) => {

    const student = useSelector((state) => state.userReducer.userData?.student)
    // console.log(student)
    const { id } = useParams()

    let [currlength, setCurrlength] = useState(0)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const submit = async (data) => {
        if (currlength <= 250) {
            edit ? await dispatch(editInternship(id, student._id, data))
                : await dispatch(addInternship(student._id, data))
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

    const internship = student?.resume?.internships.filter(item => item.id === id)

    return (
        < div className='w-full h-screen absolute top-[0]' >
            <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
            <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
                <form
                    onSubmit={handleSubmit(submit)}
                    className='w-full p-10 flex flex-col gap-5'>
                    <h1 className='text-center text-xl font-semibold'>Internship details</h1>

                    <Input
                        defaultValue={edit ? (internship?.profile || '') : ''}
                        label="Profile"
                        placeholder="e.g. Sales & Marketing"
                        {...register("profile", {
                            required: true
                        })}
                    />
                    <Input
                        defaultValue={edit ? (internship?.organization || '') : ''}
                        label="Organization"
                        placeholder="e.g. Career Race"
                        {...register("organization", {
                            required: true
                        })}
                    />
                    <Input
                        defaultValue={edit ? (internship?.Location || '') : ''}
                        label="Location"
                        placeholder="e.g. Mumbai"
                        {...register("Location", {
                            // required: true
                        })}
                    />
                    <div className='w-full flex gap-2'>

                        <Input
                            defaultValue={edit ? (internship?.startDate || '') : ''}
                            type="date"
                            label="Start date"
                            placeholder="Choose date"
                            {...register("startDate", {
                            })}
                        />
                        <Input
                            ddefaultValue={edit ? (internship?.endDate || '') : ''}
                            type="date"
                            label="End date"
                            placeholder="Choose date"
                            {...register("endDate", {
                            })}
                        />

                    </div>

                    <div className='w-full flex gap-2 '>

                        <label className='w-1/2 pl-1 flex gap-1.5 items-center'>
                            <input
                                defaultChecked={edit ? (internship?.workType || '') : ''}
                                type="checkbox"
                                {...register("workType", {
                                })}
                            />
                            <span>Is work from home</span>
                        </label>

                        <label className='w-1/2 pl-1 flex gap-1.5 items-center'>
                            <input
                                defaultChecked={edit ? (internship?.currentWorking || '') : ''}
                                type="checkbox"
                                {...register("currentWorking", {
                                })}
                            />
                            <span>Currently working here</span>
                        </label>

                    </div>

                    <label htmlFor="des" className='flex flex-col gap-1'>
                        <span>Description (Optional)</span>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                        <textarea
                            defaultValue={edit ? (internship?.description || '') : ''}
                            name="description"
                            className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full h-[100px] resize-none text-sm'
                            id='des'
                            type="description"
                            placeholder={`Short description of work done(max 250 char)\n#Mention key job responsibilities, measurable impact or results you helped deliver, any awards you won during this time.\n#Keep it to 2-3 points`}
                            {...register("description", {
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

export default AddInternship
