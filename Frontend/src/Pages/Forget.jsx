import React from 'react'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import { asyncSendMail as studentMail } from '../store/Actions/userActions'
import { asyncSendMail as employeeMail } from '../store/Actions/employeeActions'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'

const Forget = ({ userType }) => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentHost = window.location.host
    const sId = useSelector((state) => state.userReducer.userData?.student?._id)
    const eId = useSelector((state) => state.employeeReducer.employeeData?.employe?._id)


    const submit = async (data) => {
        data.currentHost = currentHost
        if (userType === "student") {
            await dispatch(studentMail(data))
            sId && navigate(`/student/forget-link/${sId}`)
        }
        else {
            await dispatch(employeeMail(data))
            eId && navigate(`/employee/forget-link/${eId}`)
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

                    <Input
                        label="Email"
                        type="email"
                        placeholder="john123@example.com"
                        {...register("email", { required: true })}
                    />
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
