import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobDetail } from '../../store/Actions/jobActions';
import { useParams } from 'react-router-dom';



const Singlejob = () => {

    const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch();
    const job = useSelector((state) => state.jobReducer.jobData); 
    

    useEffect(() => {
      dispatch(jobDetail(id));
    }, [dispatch]);



  return (
    <div>{job.title}</div>
  )
}

export default Singlejob