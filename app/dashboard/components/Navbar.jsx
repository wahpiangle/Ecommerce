'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import User from '../../components/User'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = ({ currentUser }) => {
    const [menuModal, setMenuModal] = useState(false);

    return (
        <nav className='flex bg-primary w-full py-4 px-6 gap-4 justify-between items-center'>
            <Link href='/' className='flex-1 sm:block hidden'>
                <Image src='/assets/logo-updated.png'
                    width={200}
                    height={50}
                    alt="logo"
                />
            </Link>
            <AiOutlineMenu className='text-primaryText text-xl flex-1 sm:hidden'/>
            <Searchbar />
            <User currentUser={currentUser}/>

        </nav>
    )
}

export default Navbar