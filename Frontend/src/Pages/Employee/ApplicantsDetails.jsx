import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStudentResume } from '../../store/Actions/resumeActions'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from '../ResumeDocument/MyDocument'
import { RiDownload2Line } from 'react-icons/ri'

const ApplicantsDetails = () => {

  const { id } = useParams()
  // console.log(id)
  const internships = useSelector((state) => state.internshipReducer.internshipData);
  // console.log(internships)
  const internshipData = internships?.filter(internship => internship._id == id);
  // console.log(internshipData)

  const intern = internshipData;
  // console.log(intern[0])

  const students = intern && intern[0]?.students
  // console.log(students)

  const dispatch = useDispatch()

  useEffect(() => {
    students.map((studentId) => (
      dispatch(getStudentResume(studentId))
    ))
  }, [])

  const updatedResume = useSelector((state) => state.resumeReducer?.resumeData?.updatedResume)
  // console.log(updatedResume)

  return (
    <>
      <div className='h-fitcontent w-screen bg-slate-500 p-16'>
        <div >
          {/* download resume */}
          <PDFDownloadLink document={<MyDocument updatedResume={updatedResume} />} fileName='resume'>
            <RiDownload2Line size={25} />
          </PDFDownloadLink>
        </div>
      </div>
    </>
  )
}

export default ApplicantsDetails
