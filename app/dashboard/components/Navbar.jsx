import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'
import User from './User'

const Navbar = () => {
    return (
        <nav className='flex bg-primary w-full py-4 px-5 justify-between items-center'>
            <Link href='/dashboard'>
                <Image src='/assets/logo-updated.png' width={200} height={50} />
            </Link>
            <Searchbar/>
            <User/>
        </nav>
    )
}

export default Navbar