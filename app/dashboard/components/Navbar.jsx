'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import User from '../../components/User'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'next-auth/react'

const Navbar = ({ currentUser }) => {
    const [userModal, setUserModal] = useState(false);

    const handleUserModal = () => {
        setUserModal(!userModal);
    }

    return (
        <nav className='flex bg-primary w-full py-4 px-6 justify-between items-center'>
            <Link href='/' className='flex-1'>
                <Image src='/assets/logo-updated.png'
                    width={200}
                    height={50}
                    alt="logo"
                />
            </Link>
            <Searchbar />
            <User currentUser={currentUser} handleUserModal={handleUserModal} />
            {userModal && (
                <div className='absolute right-0 top-16 mr-2 bg-primary brightness-150 text-primaryText rounded-lg shadow-lg px-4 py-3 text-lg'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex hover:opacity-50 cursor-pointer items-center gap-2' onClick={() => signOut()}>
                            <BiLogOut className='text-lg' />
                            <h1>Logout</h1>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar