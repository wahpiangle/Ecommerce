import React from 'react'
import Navbar from './components/Navbar'
import getCurrentUser from '@/app/actions/getCurrentUser'

const DashboardLayout = async({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <div>
        <Navbar currentUser={currentUser}/>
        {children}
    </div>
  )
}

export default DashboardLayout