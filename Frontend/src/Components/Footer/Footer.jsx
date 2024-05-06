import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Footer = () => {

    const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
    const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)
    const authStatus = isStudentAuth || isEmployeeAuth

    return (
      <div className="py-8 mt-10 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32">
          <img className="w-24 md:w-32" src="Job Seeking2.png" alt="Footer" />
          <div className="flex items-center gap-5 mt-4 md:mt-0">
            <FaInstagram className="text-2xl md:text-3xl" />
            <FaFacebook className="text-2xl md:text-3xl" />
            <FaLinkedinIn className="text-2xl md:text-3xl" />
            <RiTwitterXFill className="text-2xl md:text-3xl" />
            <FaYoutube className="text-2xl md:text-3xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-32 px-4 md:px-8 lg:px-32 py-10">
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-lg">Company</h6>
            <br />
            <h6>About Us</h6>
            <h6>Careers</h6>
            <h6>Contact Us</h6>
            <h6>Blog</h6>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-lg">Resource</h6>
            <br />
            <h6>Help Center</h6>
            <h6>How It Works</h6>
            <h6>Business</h6>
            <h6>Pages</h6>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-lg">Projects</h6>
            <br />
            <h6>Design & Multimedia</h6>
            <h6>IT & Programming</h6>
            <h6>Sales & Marketing</h6>
            <h6>Writing & Translating</h6>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-lg">Freelancer</h6>
            <br />
            <h6>Design</h6>
            <h6>Marketing</h6>
            <h6>Engineering</h6>
            <h6>Animator</h6>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around font-semibold  md:px-32 lg:px-0 py-4 md:py-8">
          <h6 className="mb-2 md:mb-0">Job Seekers 2024</h6>
          <h6 className="mb-2 md:mb-0">Terms & Conditions</h6>
          <h6 className="mb-2 md:mb-0">Privacy Policy</h6>
          <h6 className="mb-2 md:mb-0">Accessibility Statement</h6>
        </div>
      </div>
    );

}

export default Footer