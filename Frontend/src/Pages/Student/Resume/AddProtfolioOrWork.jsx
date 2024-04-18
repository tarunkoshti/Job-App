import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../../../Components/Button'
import { addWorkSample, editWorkSample } from '../../../store/Actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";

const AddProtfolioOrWork = ({ edit = false }) => {

  const student = useSelector((state) => state.userReducer.userData?.student)
  // console.log(student)
  const { id } = useParams()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = async (data) => {
    console.log(data)
    for (const key in data) {
      if (data[key] !== "") {
        edit ? await dispatch(editWorkSample(id, student._id, data))
          : await dispatch(addWorkSample(student._id, data))
        navigate("/student/resume")
        break;
      }
    }
  }

  const backHandler = () => {
    navigate(-1)
  }

  const worksample = student?.resume?.worksamples.filter(item => item.id === id)

  return (
    < div className='w-full h-screen absolute top-[0]' >
      <div className='w-full h-[213%] overlay bg-black opacity-50'></div>
      <div className='w-full h-[100px
      ]: max-w-lg rounded-xl border bg-gray-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />
        <form
          onSubmit={handleSubmit(submit)}
          className='w-full p-10 flex flex-col gap-5'>
          <h1 className='text-center text-xl font-semibold'>Work Samples</h1>

          {/* add */}

          {
            !edit &&
            <div>
              <Input
                label="Blog link"
                placeholder="e.g. http://myblog.com"
                {...register("blogLink", {
                  // required: true
                })}
              />
              <Input
                label="Github link"
                placeholder="e.g. http://github.com"
                {...register("githubLink", {
                  // required: true
                })}
              />
              <Input
                label="Play store developer A/c (public link)"
                placeholder="e.g. http://play.google.com/store/apps/developer?id=myapps"
                {...register("playstoreLink", {
                  // required: true
                })}
              />
              <Input
                label="Behance portfolio link"
                placeholder="e.g. http://behance.net/my_profile"
                {...register("behanceLink", {
                  // required: true
                })}
              />
              <div className='w-full'>
                <Input
                  label="Other work sample link"
                  placeholder="e.g. http://myworksample.com"
                  {...register("otherworkLink", {
                    // required: true
                  })}
                />
                <p className='text-sm mt-1 text-gray-400'>Your work samples could be in the form of social media posts, presentations, documents, website etc. If you have multiple work samples, upload them to google drive and add the link here.</p>
              </div>
            </div>
          }

          {/* edit  */}

          {
            edit && worksample.key === "blogLink" &&
            <Input
              defaultValue={worksample?.value || ''}
              label="Blog link"
              placeholder="e.g. http://myblog.com"
              {...register("value", {
                required: true
              })}
            />
          }

          {
            edit && worksample.key === "githubLink" &&
            <Input
              defaultValue={worksample?.value || ''}
              label="Github link"
              placeholder="e.g. http://github.com"
              {...register("value", {
                required: true
              })}
            />
          }

          {
            edit && worksample.key === "playstoreLink" &&
            <Input
              defaultValue={worksample?.value || ''}
              label="Play store developer A/c (public link)"
              placeholder="e.g. http://play.google.com/store/apps/developer?id=myapps"
              {...register("value", {
                required: true
              })}
            />
          }

          {
            edit && worksample.key === "behanceLink" &&
            <Input
              defaultValue={worksample?.value || ''}
              label="Behance portfolio link"
              placeholder="e.g. http://behance.net/my_profile"
              {...register("value", {
                required: true
              })}
            />

          }

          {
            edit && worksample.key === "otherworkLink" &&
            <div className='w-full'>
              <Input
                defaultValue={worksample?.value || ''}
                label="Other work sample link"
                placeholder="e.g. http://myworksample.com"
                {...register("value", {
                  required: true
                })}
              />
              <p className='text-sm mt-1 text-gray-400'>Your work samples could be in the form of social media posts, presentations, documents, website etc. If you have multiple work samples, upload them to google drive and add the link here.</p>
            </div>
          }


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

export default AddProtfolioOrWork
