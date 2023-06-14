'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import User from './User'

const Navbar = ({currentUser}) => {
    const [userModal, setUserModal] = useState(false);

    const handleUserModal = () => {
        setUserModal(!userModal);
    }

    return (
        <nav className='flex bg-primary w-full py-4 px-6 justify-between items-center'>
            <Link href='/dashboard'>
                <Image src='/assets/logo-updated.png'
                    width={200}
                    height={50}
                    alt="logo"
                />
            </Link>
            <Searchbar/>
            <User currentUser={currentUser} handleUserModal={handleUserModal}/>
            {userModal &&(
                <div className='absolute right-0 top-16 mr-2 bg-primary brightness-150 text-primaryText rounded-lg shadow-lg px-10 py-3'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Link href='/dashboard'>
                            <h1 className='hover:opacity-50 cursor-pointer'>Dashboard</h1>
                        </Link>
                        <Link href='/api/logout'>
                            <h1 className='hover:opacity-50 cursor-pointer'>Logout</h1>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar