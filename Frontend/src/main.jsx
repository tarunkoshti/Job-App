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
            element: <StudentHome />,
          },
          {
            path: "login",
            element: <Login userType="student" />,
          },
          {
            path: "signup",
            element: <Signup userType="student" />,
          },
          {
            path: "internships",
            element: <AllInternship />
          },
          {
            path: "jobs",
            element: <AllJob />
          },
          {
            path: "application",
            element: <Application />
          },
        ]
      },
      {
        path: "/employee",
        element: <Employee />,
        children: [
          {
            path: "",
            element: <EmployeeHome />,
          },
          {
            path: "login",
            element: <Login userType="employee" />,
          },
          {
            path: "signup",
            element: <Signup userType="employee" />,
          },
          {
            path: "internships",
            element: <AllInternship />
          },
          {
            path: "jobs",
            element: <AllJob />
          },
        ]
      },
      {
        path: "/internships",
        element: <AllInternship />
      },
      {
        path: "/jobs",
        element: <AllJob />
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
