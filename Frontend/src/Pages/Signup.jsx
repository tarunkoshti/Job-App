import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSignup } from '../store/Actions/userActions'


const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.userReducer)

    const { register, handleSubmit } = useForm();

    const create = (data) => {
        dispatch(asyncSignup(data))
    }

    useEffect(() => {
        if (isAuth) {
            navigate("/login")
        }
    }, [isAuth, navigate])

    const style = {
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
    }

    return (
        <div className="flex items-center justify-center p-8">
            <div style={style} className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-[#1F4959]">Sign-up and apply for free</h2>

                <form onSubmit={handleSubmit(create)}
                    className='mt-8'
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
                        <div className='w-full flex gap-2'>
                            <Input
                                label="Firstname"
                                placeholder="John"
                                {...register("firstname", {
                                    required: true
                                })}
                            />

                            <Input
                                label="Lastname"
                                placeholder="Doe"
                                {...register("lastname", {
                                    required: true
                                })}
                            />
                        </div>

                        <p className='text-xs'>By signing up, you agree to our <Link className='text-blue-700'>Terms and Conditions</Link>.</p>

                        <Button
                            type='submit'
                            bgColor='bg-[#1F4959]'
                            className='w-full font-semibold'
                        >Signup</Button>

                        <span className='text-center inline-block'>Already registered? <Link to="/student/login" className='text-blue-700'>Login</Link></span>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
