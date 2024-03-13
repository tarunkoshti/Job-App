import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


const App = () => {

  return (
    <div className='bg-white h-screen min-h-screen w-full'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
