import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { asyncLogin as studentLogin } from '../store/Actions/userActions'
import { asyncLogin as employeeLogin } from '../store/Actions/employeeActions';
import { toast } from 'react-toastify';
import { MdErrorOutline } from 'react-icons/md';

const Login = ({ userType }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
  const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)


  const { register, handleSubmit, formState: { errors } } = useForm();

  const login = async (data) => {
    if (userType === "student") {
      const error = await dispatch(studentLogin(data))
      error ? toast.error(error.data.message)
        : toast.success("Login Successfully")
    } else if (userType === "employee") {
     const error11= await dispatch(employeeLogin(data))
      error11 ? toast.error(error11.data.message)
      : toast.success("Successfully Login")
    }
  }

  useEffect(() => {
    if (isStudentAuth || isEmployeeAuth) {
      navigate(`/${userType}`)
    }
  }, [isStudentAuth, isEmployeeAuth, navigate])

  const style = {
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div style={style} className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>

        <div className='w-full flex justify-around font-semibold text-xl'>
          <Link to={`/student/login`} className={userType === "student" ? "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg" : "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg"}>Student</Link>
          <Link to={`/employee/login`} className={userType === "student" ? "bg-white text-[#1F2937] w-1/2 text-center py-2 rounded-lg" : "bg-[#1F2937] text-white w-1/2 text-center py-2 rounded-lg"}>Employee</Link>
        </div>

        <div className="mt-5 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            {/* <Logo width="100%" /> */}
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight text-[#1F2937]">Login to know more</h2>

        <form onSubmit={handleSubmit(login)}
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
                  // pattern: {
                  //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  //   message: "Invalid email address"
                  // }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.email.message}</span></p>}
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required"
                  },
                })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><MdErrorOutline /> <span>{errors.password.message}</span></p>}
            </div>

            <Link to="/student/forget-password"
              className='text-blue-700 text-right font-semibold text-sm inline-block'
            >Forget Password?</Link>

            <Button
              type='submit'
              bgColor='bg-[#1F2937]'
              className='w-full font-semibold'
            >Login</Button>

            <span className='text-center inline-block w-full'>New to Internshala? Register
              (
              <Link to="/student/signup" className='text-blue-700 font-semibold'>Student</Link>
              /
              <Link to="/employee/signup" className='text-blue-700 font-semibold'>Company</Link>
              )
            </span>

          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
