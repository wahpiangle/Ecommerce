import React from 'react'
import Navbar from './components/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default DashboardLayout