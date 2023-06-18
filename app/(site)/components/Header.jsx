'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    const [selection, setSelection] = useState('purchase');
    return (
        <div className='flex bg-black gap-12 lg:flex-row flex-col items-center'>
            <div>
                <h1 className='text-primaryText font-semibold text-6xl font-display sm:text-left text-center'>Modern living for everyone</h1>
                <div className='text-black flex mt-8 bg-white rounded-t-lg font-semibold w-full sm:justify-start justify-center'>
                    <button className={`hover:text-blueText border-b-[2px] py-3 px-6 flex-1 ${selection === 'purchase' ? 'text-blueText border-blueText' : ''}`} onClick={() => setSelection('purchase')}>Purchase</button>
                    <button className={`hover:text-blueText border-b-[2px] py-3 px-6 flex-1 ${selection === 'rent' ? 'text-blueText border-blueText' : ''}`} onClick={() => setSelection('rent')}>Rent</button>
                </div>
                <div className='flex bg-white rounded-b-lg w-full p-3'>
                    <div className='border-r-2 border-[#e1e1e1] px-6 flex-1'>
                        <h2 className='text-secondaryText'>Location</h2>
                        {/*TODO: Add location search */}
                        <h1 className='font-bold text-lg mt-1'>Malaysia</h1>
                    </div>
                    <div className='border-r-2 border-[#e1e1e1] px-6 flex-1'>
                        <h2 className='text-secondaryText'>When</h2>
                        {/*TODO: Add date selection*/}
                        <div className='flex items-center gap-4 mt-1'>
                            <h1 className='font-bold text-lg whitespace-nowrap'>Select Dates</h1>
                            <BsFillCalendarEventFill className='text-lg' />
                        </div>
                    </div>
                    <Link href={`/${selection}`} className='ml-3 my-1 flex-1 sm:flex hidden bg-blueText whitespace-nowrap text-primaryText px-3 rounded-lg text-lg font-semibold items-center hover:opacity-90'>
                        <button>
                            Browse Properties
                        </button>
                    </Link>
                    <Link className='sm:hidden flex items-center my-auto h-[50px] ml-2 bg-blueText flex-1 rounded-lg justify-center w-[50px]' href={`/${selection}`}>
                        <AiOutlineSearch className='text-2xl text-primaryText' />
                    </Link>
                </div>
            </div>
            <div className='object-cover'>
                <Image src='/assets/header.jpg' alt='property' className='rounded-lg' width={380} height={340} />
            </div>
        </div>

    )
}

export default Header