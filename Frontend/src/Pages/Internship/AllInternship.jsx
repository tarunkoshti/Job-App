import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InternshipCard from '../../Components/InternshipCard';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchInternships } from '../../store/Actions/internshipActions';
import ViewInternshipCard from '../../Components/ViewInternshipCard';
import { IoMdSearch } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';



const AllInternship = () => {

  const dispatch = useDispatch();
  const internships = useSelector((state) => state.internshipReducer.internshipData)


  useEffect(() => {
    dispatch(fetchInternships());
  }, [dispatch]);

  const [internshipTitleInput, setInternshipTitleInput] = useState("")
  const [internshipLocationInput, setinternshipLocationInput] = useState("")
  const [filterredInternships, setFilteredInternships] = useState([])

  useEffect(() => {
    if (internships && !internshipTitleInput && !internshipLocationInput) {
      // console.log("hello")
      setFilteredInternships(internships);
    }

  }, [internships, internshipTitleInput, internshipLocationInput]);

  const handleInternshipSearch = () => {
    // console.log(internshipLocationInput, internshipTitleInput)
    if (internshipTitleInput === "" && internshipLocationInput === "") {
      setFilteredInternships(internships);
      console.log(internships)
    }
    else {
      const filtered = internships.filter((internship) => {
        return (
          (internship.location && internship.location.toLowerCase().startsWith(internshipLocationInput.toLowerCase()))
          &&
          (internship.profile && internship.profile.toLowerCase().startsWith(internshipTitleInput.toLowerCase()))
        );
      });
      setFilteredInternships(filtered);
      // console.log(filtered)
    }
  }

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

  const style = {
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)'
  }

  return (
    <>

      {/* search bar */}
      <div className='py-10'>
        <div className="flex items-center bg-white hover-border text-black w-1/2 rounded-full m-auto overflow-hidden"
        style={style}>

          <div className="w-full flex items-center gap-2 pl-5 h-12">
            <div><IoMdSearch size={20} className="text-gray-500" /></div>
            <input
              type="text"
              placeholder="Internship title"
              className="w-full bg-transparent h-full outline-none text-gray-700 font-medium"
              value={internshipTitleInput}
              onChange={(e) => setInternshipTitleInput(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center gap-2 pl-5 h-12">
            <div><IoLocationSharp className="text-gray-500" /></div>
            <input
              type="text"
              placeholder="City or remote"
              className="w-full h-full outline-none text-gray-700 font-medium"
              value={internshipLocationInput}
              onChange={(e) => setinternshipLocationInput(e.target.value)}
            />
          </div>
          <div className="h-12">
            <button
              type="submit"
              className="w-full h-full rounded-tr-full rounded-br-full outline-none bg-[#2507B3] text-white text-sm px-5"
              onClick={handleInternshipSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* main-div */}
      <div className="w-full flex items-center justify-center gap-10">
        {/* ViewInternshipCard - full width on smaller screens */}
        <div
          id="job"
          className="w-full h-screen sm:w-full md:w-[400px]  flex flex-col items-center justify-start gap-5 overflow-y-auto snap-mandatory border-zinc-200 border rounded-lg"
        >
          <div className="flex flex-col items-center py-10 pb-5">
            {filterredInternships &&
              filterredInternships.map((internship, index) => (
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
          className="hidden md:block w-1/2 h-screen overflow-y-auto overflow-x-hidden snap-mandatory border-2 border-zinc-200  rounded-lg"
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
