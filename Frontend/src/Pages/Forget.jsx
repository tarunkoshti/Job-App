import React from 'react'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import { asyncSendMail as studentMail } from '../store/Actions/userActions'
import { asyncSendMail as employeeMail } from '../store/Actions/employeeActions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';

import { MdErrorOutline } from 'react-icons/md'
import { Bounce, Flip, Slide, Zoom } from 'react-toastify'


const Forget = ({ userType }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentHost = window.location.host
    const sId = useSelector((state) => state.userReducer.userData?.student?._id)
    const eId = useSelector((state) => state.employeeReducer.employeeData?.employe?._id)


    const submit = async (data) => {
        data.currentHost = currentHost
        if (userType === "student") {
            const error = await dispatch(studentMail(data))
            error ? toast.error(error.data.message)
                : toast.success("Link send successfully to registered mail id")

            sId && navigate(`/student/forget-link/${sId}`)
        }
        else {
         const error=   await dispatch(employeeMail(data))
            eId && navigate(`/employee/forget-link/${eId}`)
           error?toast.error(error.data.message): toast.success("Email successfully sent")
        }
    }

    const style = {
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
    }

    return (

        <div style={style} className={`mx-auto w-full max-w-md bg-white rounded-xl p-10 `}>

            {
                !(sId || eId) && <div className='w-full flex justify-around font-semibold text-xl'>
                    <Link to={`/student/forget-password`} className={userType === "student" ? "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg" : "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg"}>Student</Link>
                    <Link to={`/employee/forget-password`} className={userType === "student" ? "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg" : "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg"}>Employee</Link>
                </div>
            }

            <form onSubmit={handleSubmit(submit)}
                className='mt-5'
            >
                <div className='space-y-5'>

                    <div>
                        <Input
                            label="Email"
                            type="string"
                            placeholder="john123@example.com"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "email is required"
                                },
                                // pattern: {
                                //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                //     message: "Invalid email address"
                                // }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.email.message}</span></p>}
                    </div>

                    <Button
                        type='submit'
                        bgColor='bg-[#1F2937]'
                        className='w-full font-semibold'
                    >Continue</Button>
                </div>
            </form>

        </div>
    )
}

export default Forget
