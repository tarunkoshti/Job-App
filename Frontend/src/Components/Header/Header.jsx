import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUploadProfileImage, asyncLogout as studentLogout } from '../../store/Actions/userActions'
import { asyncLogout as employeeLogout } from '../../store/Actions/employeeActions'
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    const fileInputRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
    const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)
    const student = useSelector((state) => state.userReducer.userData?.student)
    const employe = useSelector((state) => state.employeeReducer.employeeData?.employe)
    const authStatus = isStudentAuth || isEmployeeAuth
    const user = student || employe
    // console.log(authStatus, isStudentAuth, isEmployeeAuth)

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const Dropdown = () => {
        setDropdown(!dropdown)
    }

    const backHandler = () => {
        setIsProfileOpen(false)
        setDropdown(false)
    }

    const middleItems = [
        {
            name: "Home",
            path: "",
        },
        {
            name: "Internships",
            path: "/internships",
        },
        {
            name: "Jobs",
            path: "/jobs",
        }
    ]

    const rightItems = [
        {
            name: "Login",
            path: "/student/login",
            active: !authStatus
        },
        {
            name: "Signup",
            path: "/student/signup",
            active: !authStatus
        },
        // {
        //     name: "Student-Signup",
        //     path: "/student/signup",
        //     active: !authStatus
        // },
        // {
        //     name: "Employee-Signup",
        //     path: "/employee/signup",
        //     active: !authStatus
        // }
    ]

    const LogoutHandler = async () => {
        if (isStudentAuth) {
            await dispatch(studentLogout())
            setIsProfileOpen(false)
            setDropdown(false)
            navigate("/")
        } else if (isEmployeeAuth) {
            await dispatch(employeeLogout())
            setIsProfileOpen(false)
            setDropdown(false)
            navigate("/")
        }
    }

    const handleProfileImageChange = (e) => {
        const imageFile = e.target.files[0];
        console.log(imageFile)
        if (imageFile) {
            if (student) {
                const id = student._id
                dispatch(asyncUploadProfileImage(id, imageFile))
            }
            else {
                const id = employe._id
            }
        }
    };

    return (
        <header className='w-full px-20 py-5 mb-5 bg-white text-[#1F2937] font-semibold shadow-lg '>
            <nav className='w-full flex justify-start items-center relative'>
                <div className='w-1/3'>
                    <NavLink to={authStatus ? (isStudentAuth ? "/student" : "/employee") : ""}>
                        < img className='h-12' src="logo.jpg" alt="./logo.jpg" />
                    </NavLink>
                </div>

                <ul className='w-1/3 flex justify-center gap-8 items-center'>
                    {middleItems.map((item) => (
                        <li key={item.name}>
                            <NavLink to={authStatus ? (isStudentAuth ? `/student${item.path}` : `/employee${item.path}`) : `${item.path}`}
                                className='text-[#1F2937]'
                            // style={(e) => {
                            //     return {
                            //         backgroundColor: e.isActive ? "#10151cc2" : "",
                            //         color: e.isActive ? "white" : "#ffffffc9",
                            //         transition: ".2s"
                            //     }
                            // }}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {
                    !authStatus && (
                        <ul className='w-1/3 flex justify-end gap-8 items-center'>
                            {rightItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <NavLink to={item.path} className={`px-4 py-2 rounded-lg  border-2 border-[#1F2937] text-[#1F2937] ${item.name === "Signup" ? "bg-[#1F2937] text-white" : ""}`}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ) : null)}
                        </ul>
                    )
                }
                {
                    authStatus && (
                        <div className='w-1/3 flex justify-end gap-8 items-center'>

                            <div className='h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer'
                                onClick={toggleProfile}>

                                {/* {user.firstname.charAt(0).toUpperCase()} */}
                                <img className='rounded-full h-full w-full' src={user.avatar.url} alt="" />
                            </div>

                            {/* <NavLink className='px-4 py-2 rounded-lg bg-[#1F2937] text-white'
                                onClick={LogoutHandler}>
                                Logout
                            </NavLink> */}

                        </div>
                    )
                }


            </nav>

            {/*  profile options */}
            {authStatus && isProfileOpen ? (
                <div className="w-full max-w-72 absolute top-5 right-5 bg-white p-4 rounded-lg shadow-lg">

                    <RxCross2 onClick={backHandler} size={25} className='absolute right-5 top-5 cursor-pointer' />

                    <div className='w-full flex flex-col items-center border-b py-2 mb-4'>
                        <div className='h-12 w-12 rounded-full border-2 relative'>
                            <img className='rounded-full h-full w-full' src={user.avatar.url} alt="" />
                            <AiOutlineEdit size={26}
                                className='absolute bottom-0 -right-8 rounded-full p-1 cursor-pointer'
                                onClick={() => fileInputRef.current.click()} />

                            {/* // hidden input */}

                            <input ref={fileInputRef} type="file" accept="image/*"
                                className='hidden'
                                onChange={handleProfileImageChange}
                            />

                        </div>
                        <h6 className='capitalize font-semibold text-sm'>{user.firstname} {user.lastname}</h6>
                        <span className='font-normal text-sm'>{user.email}</span>
                    </div>
                    <div className='w-full flex flex-col gap-3 font-normal px-2'>

                        {student ? <div className='w-full flex flex-col gap-3'>
                            <Link
                                onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))}
                                to="/student" className='hover:text-blue-600'>Home</Link>
                            <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/student/application" className='hover:text-blue-600'>My Application</Link>
                            <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/student/bookmark" className='hover:text-blue-600'>My Bookmarks</Link>
                            <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/student/resume" className='hover:text-blue-600'>Edit Resume</Link>
                            <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/student/edit/preference" className='hover:text-blue-600'>Edit Preferences</Link>
                        </div>
                            : <div className='w-full flex flex-col gap-3'>
                                <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/employee" className='hover:text-blue-600'>Home</Link>
                                <Link onClick={() => (
                                    setIsProfileOpen(false),
                                    setDropdown(false))} to="/employee/application" className='hover:text-blue-600'>My Application</Link>
                            </div>}

                        <div className='w-full'>
                            <button
                                className='w-full flex justify-between items-center mb-3 hover:text-blue-600'
                                onClick={Dropdown}>
                                <span>Manage Account</span>
                                <RiArrowDropDownLine size={25} />
                            </button>
                            {dropdown && (
                                <div className='w-5/6 ml-auto flex flex-col gap-3'>
                                    <Link onClick={() => setIsProfileOpen(false)} to={isStudentAuth ? "/student/reset-password" : "/employee/reset-password"} className='hover:text-blue-600'>Change Password</Link>
                                    <Link onClick={() => setIsProfileOpen(false)} to={isStudentAuth ? "/student/forget-password" : "/employee/forget-password"} className='hover:text-blue-600'>Forget Password</Link>
                                    <Link onClick={LogoutHandler} className='hover:text-blue-600'>Logout</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : ""
            }
        </header>
    )
}

export default Header
