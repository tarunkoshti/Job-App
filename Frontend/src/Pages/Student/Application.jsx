import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allapplyinternship, currentUser } from '../../store/Actions/userActions'
import { allapplyjob } from '../../store/Actions/userActions'

const Application = () => {

  const dispatch = useDispatch()
  const appliedinternships = useSelector((state) => state.internshipReducer.internshipData?.internships);

  const appliedjobs = useSelector((state) => state.jobReducer.jobData?.jobs)

  console.log(appliedjobs)
  console.log(appliedinternships )

  const student = useSelector((state) => state.userReducer.userData?.student)
  
  
  useEffect(() => {
    dispatch(allapplyinternship(student._id))
  
  }, [dispatch])

  useEffect(() => {
    dispatch(allapplyjob(student._id))
    
  }, [dispatch])
  
  // const applications = [...appliedinternships, ...appliedjobs];
  return (
    <div className='bg-gray-300 mx-20'>
      <h1 className='text-3xl text-center font-semibold'>My Application</h1>

      <ul>
        {appliedinternships && appliedinternships.map((i, index) => (
          <div className='px-10 bg-blue-200 my-2'>
            <h1>{index + 1}</h1><h1>{i.company}</h1>
          </div>
        ))}
      </ul>

      <ul>
        {appliedjobs && appliedjobs.map((i, index) => (
          <div className='px-10 bg-blue-200 my-2'>
            <h1>{index + 1}</h1><h1>{i.company}</h1>
          </div>
        ))}
      </ul>


    </div>
  )
}

export default Application
