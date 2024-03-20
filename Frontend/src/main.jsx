import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Student from './Components/Student.jsx'
import Employee from './Components/Employee.jsx'
import StudentHome from './Pages/Student/StudentHome.jsx'
import EmployeeHome from './Pages/Employee/EmployeeHome.jsx'
import AllInternship from './Pages/Internship/AllInternship.jsx'
import AllJob from './Pages/Job/AllJob.jsx'
import Application from './Pages/Student/Application.jsx'
import Singlejob from './Pages/Student/Singlejob.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import Singleinternship from './Pages/Student/Singleinternship.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/student",
        element: <Student />,
        children: [
          {
            path: "",
            element: (
              <AuthLayout authentication={true}>
                <StudentHome />
              </AuthLayout>
            ),
          },
          {
            path: "login",
            element: (
              <AuthLayout authentication={false}>
                <Login userType="student" />
              </AuthLayout>
            ),
          },
          {
            path: "signup",
            element: (
              <AuthLayout authentication={false}>
                <Signup userType="student" />
              </AuthLayout>
            ),
          },
          {
            path: "internships",
            element: (
              <AuthLayout authentication={true}>
                <AllInternship />
              </AuthLayout>
            ),
          },
          {
            path: "jobs",
            element: (
              <AuthLayout authentication={true}>
                <AllJob />
              </AuthLayout>
            ),
          },
          {
            path: "job/read/:id",
            element: (
              <AuthLayout authentication={true}>
               <Singlejob />
              </AuthLayout>
            ),
             
          },
          {
            path: "internship/singleintership/:id",
            element: (
              <AuthLayout authentication={true}>
               <Singleinternship />
              </AuthLayout>
            ),
             
          },
          {
            path: "application",
            element: (
              <AuthLayout authentication={true}>
                <Application />
              </AuthLayout>
            ),
          },
        ]
      },
      {
        path: "/employee",
        element: <Employee />,
        children: [
          {
            path: "",
            element: (
              <AuthLayout authentication={true}>
                <EmployeeHome />
              </AuthLayout>
            ),
          },
          {
            path: "login",
            element: (
              <AuthLayout authentication={false}>
                <Login userType="employee" />
              </AuthLayout>
            ),
          },
          {
            path: "signup",
            element: (
              <AuthLayout authentication={false}>
                <Signup userType="employee" />
              </AuthLayout>
            ),
          },
          {
            path: "internships",
            element: (
              <AuthLayout authentication={true}>
                element: <AllInternship />
              </AuthLayout>
            ),
          },
          {
            path: "jobs",
            element: (
              <AuthLayout authentication={true}>
                element: <AllJob />
              </AuthLayout>
            ),
          },
        ]
      },
      {
        path: "/internships",
        element: (
          <AuthLayout authentication={false}>
            <AllInternship />
          </AuthLayout>
        )
      },
      {
        path: "/jobs",
        element: (
          <AuthLayout authentication={false}>
            <AllJob />
          </AuthLayout>
        ) 
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
