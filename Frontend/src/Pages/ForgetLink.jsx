import React from 'react'
import Input from '../Components/Input'
import { useForm } from 'react-hook-form'
import Button from '../Components/Button'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { asyncForgrtPassword as studentForget } from '../store/Actions/userActions'
import { asyncForgrtPassword as employeeForget } from '../store/Actions/employeeActions'

const ForgetLink = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentpathname = window.location.pathname
    const isStudent = currentpathname.includes("student")
    // const isEmploye = currentpathname.includes("employe")
    const { id } = useParams()

    const submit = async (data) => {
        if (isStudent){
            await dispatch(studentForget(id, data)) 
            navigate("/student")
        }
        else{
            await dispatch(employeeForget(id, data))
            navigate("/employee")
        }
    }

    const style = {
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
    }

    return (
        <div style={style} className={`mx-auto w-full max-w-md bg-white rounded-xl p-10 `}>

            <form onSubmit={handleSubmit(submit)}
                className='mt-5'
            >
                <div className='space-y-5'>

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Password must be 6 character long"
                        {...register("password", { required: true })}
                    />

                    <Button
                        type='submit'
                        bgColor='bg-[#1F2937]'
                        className='w-full font-semibold'
                    >Done</Button>
                </div>
            </form>
        </div>
    )
}

export default ForgetLink
