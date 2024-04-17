import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStudentResume, setStudentResume } from '../../store/Actions/resumeActions'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from '../ResumeDocument/MyDocument'
import { RiDownload2Line } from 'react-icons/ri'
import Button from '../../Components/Button'
import { RxCross2 } from "react-icons/rx";


const ApplicantsDetails = () => {

  const style = {
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
  }

  const { id } = useParams()
  // console.log(id)
  const internships = useSelector((state) => state.internshipReducer.internshipData);
  // console.log(internships)
  const internship = internships?.find(internship => internship._id == id);
  // console.log(internship)

  const students = internship && internship?.students
  // console.log(students)

  const dispatch = useDispatch()
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDownload = (studentId) => {
    // Dispatch action to get student resume
    dispatch(getStudentResume(studentId));
    // Close confirmation dialog
    setShowConfirmation(true);
  };

  const setReume = () => {
    dispatch(setStudentResume())
    setShowConfirmation(false)
  }

  // useEffect(() => {
  //   students.map((studentId) => (
  //     dispatch(getStudentResume(studentId))
  //   ))
  // }, [])

  const updatedResume = useSelector((state) => state.resumeReducer?.resumeData?.updatedResume)
  // console.log(updatedResume)

  return (
    <>
      <div className='h-fitcontent w-screen p-16 relative'>
        <div className='flex py-4 bg-gray-200 rounded-lg px-10 mx-16 font-semibold'>
          <h1 className='w-1/4'>First Name</h1>
          <h1 className='w-1/4'>Last Name</h1>
          <h1 className='w-1/4'>Email</h1>
          <h1 className='w-1/4'>Applicant Resume</h1>
        </div>
        <ul>
          {internship && internship?.students.map((studentId) => (
            <div>
              <div className='py-3 px-12 bg-gray-100 rounded-lg flex gap-32 mx-16'>
                <h1 className='w-1/4'>{studentId}</h1>
                <h1 className='w-1/4'></h1>
                <h1 className='w-1/4'></h1>
                <div >
                  <RiDownload2Line onClick={() => handleDownload(studentId)} size={25} />
                </div>
              </div>
            </div>
          ))
          }
        </ul>
      </div>
      {/* Confirmation dialog */}
      {showConfirmation && (
        <div style={style} className={`mx-auto w-full max-w-xs bg-white rounded-xl p-5 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}>
          <div className=''>
            <p className='text-center leading-tight mt-5'>Are you sure you want to download this student's resume?</p>
            <div className='flex mt-5 justify-center gap-10'>

              <PDFDownloadLink document={<MyDocument updatedResume={updatedResume} />} fileName='resume'>
                <Button
                  type='submit'
                  bgColor='bg-[#1F2937]'
                  className='px-5 font-semibold'
                >Download</Button>
              </PDFDownloadLink>

            </div>
          </div>

          <Button
            type='submit'
            bgColor=''
            textColor='#1F2937'
            className='px-5 font-semibold absolute right-0 top-0'
            onClick={setReume}
          ><RxCross2 size={20}/></Button>

        </div>
        // <div>
        //   <p>Are you sure you want to download this student's resume?</p>
        //   <PDFDownloadLink document={<MyDocument updatedResume={updatedResume} />} fileName='resume'
        //   >
        //     <button>Yes</button>
        //   </PDFDownloadLink>
        //   <button onClick={setReume}>No</button>
        // </div>
      )}
    </>
  )
}

export default ApplicantsDetails
