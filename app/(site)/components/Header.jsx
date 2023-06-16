'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsFillCalendarEventFill } from 'react-icons/bs'
const Header = () => {
    const [selection, setSelection] = useState('purchase');
    const [location, setLocation] = useState('');
    return (
        <div className='flex bg-black gap-8'>
            <div>
                <h1 className='text-primaryText font-semibold text-6xl font-display'>Modern living for everyone</h1>
                <div className='text-black flex mt-8 bg-white rounded-md font-semibold w-fit'>
                    <button className={`hover:text-blueText border-b-[2px] py-3 px-6 ${selection === 'purchase' ? 'text-blueText border-blueText' : ''}`} onClick={() => setSelection('purchase')}>Purchase</button>
                    <button className={`hover:text-blueText border-b-[2px] py-3 px-6 ${selection === 'rent' ? 'text-blueText border-blueText' : ''}`} onClick={() => setSelection('rent')}>Rent</button>
                </div>
                <div className='flex bg-white w-fit rounded-md p-3'>
                    <div className='border-r-2 border-[#e1e1e1] px-6'>
                        <h2 className='text-secondaryText'>Location</h2>
                        {/* //TODO: Add location search */}
                        <h1 className='font-bold text-lg mt-1'>Malaysia</h1>
                    </div>
                    <div className='border-r-2 border-[#e1e1e1] px-6'>
                        <h2 className='text-secondaryText'>When</h2>
                        {/* //TODO: Add date selection */}
                        <div className='flex items-center gap-4 mt-1'>
                            <h1 className='font-bold text-lg'>Select Dates</h1>
                            <BsFillCalendarEventFill className='text-lg' />
                        </div>
                    </div>
                    <Link href={`/${selection}`} className='ml-3 my-1 bg-blueText text-primaryText px-3 rounded-lg text-lg font-semibold flex items-center hover:opacity-90'>
                        <button>
                            Browse Properties
                        </button>
                    </Link>
                </div>
            </div>
            <div className='object-cover relative w-[300px] h-[360px] z-0'>
                <Image src='/assets/header.jpg' fill alt='property' className='rounded-lg' />
            </div>
        </div>

    )
}

export default Header