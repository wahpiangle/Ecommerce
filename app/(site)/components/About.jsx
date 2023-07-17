import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className='text-primaryText mt-24 flex lg:flex-row flex-col gap-8 sm:gap-16 bg-primary rounded-lg p-12'>
            <div className='min-w-fit min-h-fit'>
                <Image
                    src='/assets/dealer.jpg'
                    width={500}
                    height={400}
                    alt='dealer'
                    className='rounded-lg'
                />
            </div>
            <div>
                <h1 className='font-bold text-3xl leading-10'>
                    We make it easy for property buyers, tenants & landlords.
                </h1>
                <p className='text-secondaryText mt-4'>
                    Whether it's selling your current home, buying your next one or finding a rental property, we can help. We're a full-service estate agency, with local experts on hand to help you at every stage of your property journey.
                </p>
                <div className='flex gap-4 mt-6'>
                    <Link href={{pathname: '/properties', query: {type: 'purchase'}}}>
                        <button className='bg-blueText text-primaryText rounded-lg py-2 px-4 text-lg hover:opacity-50 font-semibold'>To Purchase</button>
                    </Link>
                    <Link href={{pathname: '/properties', query: {type: 'rent'}}} className='hover:opacity-75 bg-secondaryText text-primaryText rounded-lg'>
                        <button className=' rounded-lg py-2 px-4 text-lg font-semibold'>To Rent</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About