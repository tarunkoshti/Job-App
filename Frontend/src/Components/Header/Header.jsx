import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout as studentLogout } from '../../store/Actions/userActions'
import { asyncLogout as employeeLogout } from '../../store/Actions/employeeActions'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuth: isStudentAuth } = useSelector((state) => state.userReducer)
    const { isAuth: isEmployeeAuth } = useSelector((state) => state.employeeReducer)
    const authStatus = isStudentAuth || isEmployeeAuth
    // console.log(authStatus, isStudentAuth, isEmployeeAuth)

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

    const LogoutHandler = () => {
        if(isStudentAuth) {
            dispatch(studentLogout())
            navigate("/")
        }else if(isEmployeeAuth){
            dispatch(employeeLogout())
            navigate("/")
        }
    }

    return (
        <header className='w-full px-20 py-6 border-2 mb-5 bg-[#1F2937] text-[#ffffffc9] font-semibold shadow-lg'>
            <nav className='w-full flex justify-start items-center'>
                <div className='w-1/3'>
                    <NavLink to={authStatus ? (isStudentAuth ? "/student" : "/employee") : ""}>
                        Logo
                    </NavLink>
                </div>

                <ul className='w-1/3 flex justify-center gap-8 items-center'>
                    {middleItems.map((item) => (
                        <li key={item.name}>
                            <NavLink to={authStatus ? (isStudentAuth ? `/student${item.path}` : `/employee${item.path}`) : `${item.path}`}
                                className='px-4 py-2 rounded-lg bg-transparent text-[#ffffffc9] hover:bg-[#fbf5f514] active:bg-[#10151cc2] text-white'
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

                <ul className='w-1/3 flex justify-end gap-8 items-center'>
                    {rightItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <NavLink to={item.path} className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-opacity-70'>
                                    {item.name}
                                </NavLink>
                            </li>
                        ) : null)}
                </ul>
                {
                    authStatus && (
                        <NavLink className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-opacity-70'
                        onClick={LogoutHandler}>
                            Logout
                        </NavLink>
                    )
                }
            </nav>
        </header>
    )
}

export default Header
