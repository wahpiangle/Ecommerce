'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import User from '../../components/User'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import { FaHouseUser } from 'react-icons/fa'

const Navbar = ({ currentUser }) => {
    const [userModal, setUserModal] = useState(false);

    const handleUserModal = () => {
        setUserModal(!userModal);
    }

    return (
        <nav className='flex bg-primary w-full py-4 px-6 items-center justify-between'>
            <Link href='/' className='flex-1'>
                <Image src='/assets/logo-updated.png'
                    width={200}
                    height={50}
                    alt="logo"
                />
            </Link>
            <div className='flex text-primaryText text-lg gap-8 items-center flex-1 justify-center'>
                <Link href='/purchase' className='cursor-pointer hover:opacity-75'>Purchase</Link>
                <Link href='/rent' className='cursor-pointer hover:opacity-75'>Rent</Link>
                <Link href='/dashboard' className='cursor-pointer flex items-center gap-2 bg-blueText py-2 px-3 hover:opacity-75 rounded-lg z-10'>
                    <FaHouseUser />
                    <h1 className='whitespace-nowrap'>Seller Dashboard</h1>
                </Link>
            </div>
            <User currentUser={currentUser} handleUserModal={handleUserModal} />
            {userModal && (
                <div className='absolute right-0 top-16 mr-2 bg-primary brightness-150 text-primaryText rounded-lg shadow-lg px-10 py-3'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex hover:opacity-50 cursor-pointer items-center gap-2 text-lg' onClick={() => signOut()}>
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