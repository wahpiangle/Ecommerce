import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const User = () => {
    return (
        <div className='flex gap-3'>
            <Link href='/dashboard/profile' className="flex items-center">
                <Image
                    src='/assets/placeholder.png'
                    width={40}
                    height={40}
                    className='rounded-full'
                />
            </Link>
            <div className='flex flex-col text-sm'>
                <h1 className='text-primaryText'>User's name</h1>
                <p className='text-secondaryText'>Company Manager</p>
            </div>
        </div>
    )
}

export default User