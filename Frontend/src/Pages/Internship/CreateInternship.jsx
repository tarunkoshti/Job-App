import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Select from '../../Components/Select'
import { useDispatch } from 'react-redux'
import { asyncCreateInternship } from '../../store/Actions/employeeActions'
import { useNavigate } from 'react-router-dom'

const CreateInternship = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const create = async (data) => {
        await dispatch(asyncCreateInternship(data))
        navigate("/employee")
    }

    return (
        <div className={`mx-auto w-full max-w-lg bg-white rounded-xl p-10 `}>
            <h1 className='text-center font-semibold text-lg'>Create Internship</h1>
            <form onSubmit={handleSubmit(create)}
                className='mt-5'
            >
                <div className='space-y-5'>
                    <Input
                        label="Profile"
                        placeholder="Enter Profile"
                        type="text"
                        {
                        ...register("profile")
                        }
                    />
                    <Input
                        label="Skills"
                        placeholder="Enter Skills"
                        type="text"
                        {
                        ...register("skills")
                        }
                    />
                    <Select
                        options={["In office", "Remote"]}
                        label="Internship Type"
                        className="mb-4"
                        {...register("internshiptype")}
                    />
                    <Input
                        label="Opening"
                        placeholder="Enter Number of openings"
                        type="Number"
                        {
                        ...register("openings")
                        }
                    />

                    {/* <div className='w-full flex justify-between'>
                        <Input
                            label="From"
                        />
                        <Input
                            label="To"

                        />

                    </div> */}

                    <Input
                        label="Duration"
                        placeholder="Enter Internship Duration"
                        type="text"
                        {...register("duration")}
                    />
                    <Input
                        label="Responsibility"
                        placeholder="Enter Responsibility"
                        type="text"
                        {...register("responsibility")}
                    />

                    <Select
                        options={["Fixed", "Negotiable", "Performance based", "Unpaid"]}
                        label="Stipend Status"
                        className="mb-4"
                        {...register("stipend.status")}
                    />

                    <Input
                        label="Stipend Amount"
                        placeholder="Enter Stipend Amount"
                        type="number"
                        {...register("stipend.amount")}
                    />

                    <Input
                        label="Perks"
                        placeholder="Enter Perks"
                        type="text"
                        {...register("perks")}
                    />

                    <Input
                        label="Assements"
                        placeholder="Enter assements"
                        type="text"
                        {...register("assements")}
                    />
                    
                    <Input
                        label="Location"
                        placeholder="Enter location"
                        type="text"
                        {...register("location")}
                    />

                    <Input
                        label="Company Name"
                        placeholder="Enter Company Name"
                        type="text"
                        {...register("company")}
                    />

                    <Button
                        type='submit'
                        bgColor='bg-[#1F2937]'
                        className='w-full font-semibold'
                    >Create</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateInternship
