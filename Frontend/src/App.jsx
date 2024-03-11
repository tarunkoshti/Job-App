import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
