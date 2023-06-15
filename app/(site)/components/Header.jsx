'use client'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex bg-black gap-8'>
            <div>
                <h1 className='text-primaryText font-semibold text-6xl font-display'>Modern living for everyone</h1>
                <p className='text-secondaryText mt-6 text-lg'>We provide a complete service for the sale, purchase or rental of real estate.</p>
                <button className='bg-blueText text-primaryText rounded-lg p-3 mt-6 text-lg'>Explore properties now!</button>
            </div>
            <div className='object-cover relative w-[300px] h-[360px]'>
                <Image src='/assets/header.jpg' fill alt='property' className='rounded-lg' />
            </div>
        </div>

    )
}

export default Header