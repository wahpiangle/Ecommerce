import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import Navbar from './components/Navbar';

const  MainLayout = async({children}) => {
    const currentUser = await getCurrentUser();
  return (
    <div className='bg-primary'>
        <Navbar currentUser={currentUser}/>
        {children}
    </div>
  )
}

export default MainLayout