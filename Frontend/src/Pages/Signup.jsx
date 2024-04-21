import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSignup as studentSignup } from '../store/Actions/userActions'
import { asyncSignup as employeeSignup } from '../store/Actions/employeeActions';
import { MdErrorOutline } from "react-icons/md";
import { toast } from 'react-toastify'

const Signup = ({ userType }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
    const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const create = async (data) => {
        if (userType === "student") {
            const error = await dispatch(studentSignup(data))
            error ? toast.error(error.data.message)
                : toast.success("Signup Successfully")
        } else if (userType === "employee") {
            const error = dispatch(employeeSignup(data))
            error ? toast.error(error.data.message)
                : toast.success("Signup Successfully")
        }
    }

    useEffect(() => {
        if (isStudentAuth || isEmployeeAuth) {
            navigate(`/${userType}/login`)
        }
    }, [isStudentAuth, isEmployeeAuth, navigate])

    const style = {
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
    }

    return (
        <div className="flex items-center justify-center">
            <div style={style} className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>

                <div className='w-full flex justify-around font-semibold text-xl'>
                    <Link to={`/student/signup`} className={userType === "student" ? "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg" : "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg"}>Student</Link>
                    <Link to={`/employee/signup`} className={userType === "student" ? "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg" : "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg"}>Employee</Link>
                </div>

                <div className="mt-5 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-[#1F2937]">Sign-up and apply for free</h2>

                <form onSubmit={handleSubmit(create)}
                    className='mt-5'
                >
                    <div className='space-y-5'>
                        <div>
                            <Input
                                label="Email"
                                placeholder="John@example.com"
                                type="string"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email is required"
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.email.message}</span></p>}
                        </div>
                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Must be atleat 6 character"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required"
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "password should not exceed more then 15 character"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "password should have atleast 6 character"
                                    },
                                })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.password.message}</span></p>}
                        </div>
                        <div className='w-full flex gap-2'>
                            <div>
                                <Input
                                    label="Firstname"
                                    placeholder="John"
                                    {...register("firstname", {
                                        required: {
                                            value: true,
                                            message: "firstname is required"
                                        },
                                    })}
                                />
                                {errors.firstname && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.firstname.message}</span></p>}
                            </div>

                            <div>
                                <Input
                                    label="Lastname"
                                    placeholder="Doe"
                                    {...register("lastname", {
                                        required: {
                                            value: true,
                                            message: "lastname is required"
                                        },
                                    })}
                                />
                                {errors.lastname && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.lastname.message}</span></p>}
                            </div>
                        </div>

                        <p className='text-xs'>By signing up, you agree to our <Link className='text-blue-700'>Terms and Conditions</Link>.</p>

                        <Button
                            type='submit'
                            bgColor='bg-[#1F2937]'
                            className='w-full font-semibold'
                        >Signup</Button>

                        <span className='text-center inline-block'>Already registered? <Link to={`/${userType}/login`} className='text-blue-700'>Login</Link></span>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
