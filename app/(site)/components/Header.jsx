'use client'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
    return (
        <div className='flex bg-black gap-12 items-center'>
            <div>
                <h1 className='text-primaryText font-semibold md:text-6xl text-3xl font-display sm:text-left text-center'>Modern living for everyone</h1>
            </div>
            <div className='object-cover'>
                <Image src='/assets/header.jpg' alt='property' className='rounded-lg' width={300} height={250} />
            </div>
        </div>

    )
}

export default Header