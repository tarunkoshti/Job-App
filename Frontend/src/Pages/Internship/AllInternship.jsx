import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InternshipCard from '../../Components/InternshipCard';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchInternships } from '../../store/Actions/internshipActions';
import ViewInternshipCard from '../../Components/ViewInternshipCard';



const AllInternship = () => {

  const dispatch = useDispatch();
  const internships = useSelector((state) => state.internshipReducer.internshipData)


  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  const navigate = useNavigate()

  // Loading state
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (fetchInternships !== null) {
      setLoader(false)
    }
  })

  function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Construct the color code in hexadecimal format
    const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16
    )}`;

    return colorCode;
  }

 

  return (
    <>
      {/* main-div */}
      <div className="w-full  flex items-center justify-center gap-10 py-5">
        {/* ViewInternshipCard - full width on smaller screens */}
        <div
          id="job"
          className="w-full h-screen sm:w-full md:w-[400px]  flex flex-col items-center justify-start gap-5 overflow-y-auto snap-mandatory border-zinc-200 border rounded-lg"
        >
          <div className="flex flex-col items-center py-10 pb-5">
            {internships &&
              internships.map((internship, index) => (
                <ViewInternshipCard
                  key={index}
                  index={index}
                  internship={internship}
                  color={generateRandomColor()}
                />
              ))}
          </div>
        </div>

        {/* Outlet hidden on small screens */}
        <div
          id="job"
          className="hidden md:block w-1/2 h-screen overflow-y-auto overflow-x-hidden snap-mandatory border border-gray-200  rounded-lg"
        >
          <div className=" shrink-0 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllInternship
