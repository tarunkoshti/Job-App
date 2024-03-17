import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { asyncLogin as studentLogin } from '../store/Actions/userActions'
import { asyncLogin as employeeLogin } from '../store/Actions/employeeActions';

const Login = ({ userType }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
  const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)


  const { register, handleSubmit } = useForm();

  const login = (data) => {
    if (userType === "student") {
      dispatch(studentLogin(data))
    } else if (userType === "employee") {
      dispatch(employeeLogin(data))
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
            <Input
              label="Email"
              placeholder="John@example.com"
              type="email"
              {...register("email", {
                required: true,
                // validate: {
                //     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                //         "Email address must be a valid address",
                // }
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Must be atleat 6 character"
              {...register("password", {
                required: true
              })}
            />

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
