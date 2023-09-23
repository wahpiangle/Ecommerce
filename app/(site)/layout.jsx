import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import Navbar from './components/Navbar';

const MainLayout = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className='bg-primary min-h-screen'>
      <Navbar currentUser={currentUser} />
      <div className='bg-black lg:px-32 md:px-24 sm:px-12 px-10 py-8'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout