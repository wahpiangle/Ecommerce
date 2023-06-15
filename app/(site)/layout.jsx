import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import Navbar from './components/Navbar';

const MainLayout = ({children}) => {
    const currentUser = getCurrentUser();
  return (
    <div className='bg-primary'>
        <Navbar currentUser={currentUser}/>
        {children}
    </div>
  )
}

export default MainLayout