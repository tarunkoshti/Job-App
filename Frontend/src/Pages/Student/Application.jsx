import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allapplyinternship, currentUser } from '../../store/Actions/userActions'


const Application = () => {

  const dispatch = useDispatch()
  const appliedinternships = useSelector((state) => state.internshipReducer.internshipData.internships)
  console.log(appliedinternships)
  const { student } = useSelector((state) => state.userReducer.userData)


  useEffect(() => {
    dispatch(currentUser())
    dispatch(allapplyinternship(student._id))
  }, [dispatch])
  
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
    </div>
  )
}

export default Application
