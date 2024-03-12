import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'


const App = () => {

  return (
    <div className='bg-white h-screen min-h-screen w-full flex items-center justify-center'>
      <Outlet />
    </div>
  )
}

export default App
