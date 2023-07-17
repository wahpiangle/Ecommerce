'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'next-auth/react'
import { FaHouseUser } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const Navbar = ({ currentUser }) => {
    const [navModal, setNavModal] = useState(false);

    return (
        <nav className='flex bg-primary w-full py-4 px-6 items-center justify-between'>
            <Link href='/' className='flex-1'>
                <Image src='/assets/logo-updated.png'
                    width={200}
                    height={50}
                    alt="logo"
                />
            </Link>
            <div className='hidden text-primaryText text-lg gap-8 items-center flex-1 justify-center lg:flex'>
                <Link href={{pathname: '/properties', query: {type: 'purchase'}}} className='cursor-pointer hover:opacity-75'>Purchase</Link>
                <Link href={{pathname: '/properties', query: {type: 'rent'}}} className='cursor-pointer hover:opacity-75'>Rent</Link>
                <Link href='/dashboard' className='cursor-pointer flex items-center gap-2 bg-blueText py-2 px-3 hover:opacity-75 rounded-lg z-10'>
                    <FaHouseUser />
                    <h1 className='whitespace-nowrap'>Seller Dashboard</h1>
                </Link>
            </div>
            <div className='lg:hidden flex flex-1 justify-end' onClick={() => setNavModal(prevState => !prevState)}>
                <AiOutlineMenu className='text-3xl cursor-pointer text-primaryText items-end' />
            </div>
            {navModal && (
                <div className='absolute right-0 top-16 mr-2 sm:hidden bg-[#25292c] text-primaryText rounded-lg shadow-lg p-4'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <Link href={{pathname: '/properties', query: {type: 'purchase'}}} className='cursor-pointer hover:brightness-90'>Purchase</Link>
                        <Link href={{pathname: '/properties', query: {type: 'rent'}}} className='cursor-pointer hover:brightness-90'>Rent</Link>
                        <Link href='/dashboard' className='cursor-pointer hover:brightness-90 flex items-center gap-2 bg-blueText py-2 px-3 rounded-lg z-10'>
                            <FaHouseUser />
                            <h1 className='whitespace-nowrap'>Seller Dashboard</h1>
                        </Link>
                        <div className='flex cursor-pointer items-center gap-2 bg-secondaryText py-2 px-3 rounded-lg hover:brightness-90' onClick={() => signOut()}>
                            <BiLogOut className='text-lg' />
                            <h1>Logout</h1>
                        </div>
                    </div>
                </div>
            )}
            <Menu as="div" className="relative lg:flex text-left flex-1 justify-end hidden">
                <div>
                    <Menu.Button className="flex items-center gap-2 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none">
                        <Image src={currentUser?.image || '/assets/placeholder.png'} width={40} height={40} className='rounded-full' alt='user-image' />
                        <p>{currentUser?.name}</p>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute top-12 right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-3 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={`${active ? 'bg-secondaryText text-white' : 'text-gray-900'} gap-2 flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        <BiLogOut className='text-xl'/>
                                        <button
                                            onClick={() => signOut()}
                                        >
                                            Sign Out
                                        </button>
                                    </div>

                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </nav>
    )
}

export default Navbar