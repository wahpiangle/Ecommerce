'use client'

import { useEffect, useMemo, useState } from 'react'
import SidebarButton from './SidebarButton'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'

const Sidebar = ({ menuModal, pathName }) => {
  const [active, setActive] = useState('dashboard')
  useMemo(()=>{
    setActive(pathName)
  },[pathName])

  const handleActiveClick = (title) => {
    setActive(title)
  }
  const mountedStyle = { animation: "inAnimation 100ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 100ms ease-out",
    animationFillMode: "forwards"
  };
  return (
    <>
      <div className='bg-primary min-h-full p-4 flex-col gap-2 lg:flex hidden'>
        <SidebarButton title='Dashboard' link='/dashboard' icon={<AiOutlineDashboard />} active={active} onClick={() => handleActiveClick('dashboard')} />
        <SidebarButton title='Properties' link='/dashboard/properties' icon={<BiBuildings />} active={active} onClick={() => handleActiveClick('properties')} />
        <SidebarButton title='Orders' link='/dashboard/orders' icon={<FaFileInvoiceDollar />} active={active} onClick={() => handleActiveClick('orders')} />
        <SidebarButton title='Orders' link='/dashboard/profile' icon={<BsPersonCircle />} active={active} onClick={() => handleActiveClick('profile')} />
      </div>
      {
        menuModal &&
        <div
          className={`absolute z-10 flex lg:hidden h-full w-full `}
          style={menuModal ? mountedStyle : unmountedStyle}
        >
          <div className='bg-primary min-h-full p-4 flex-col gap-2 '>
            <SidebarButton title='Dashboard' link='/dashboard' icon={<AiOutlineDashboard />} active={active} onClick={() => handleActiveClick('Dashboard')} />
            <SidebarButton title='Properties' link='/dashboard/properties' icon={<BiBuildings />} active={active} onClick={() => handleActiveClick('Properties')} />
            <SidebarButton title='Orders' link='/dashboard/orders' icon={<FaFileInvoiceDollar />} active={active} onClick={() => handleActiveClick('Orders')} />
            <SidebarButton title='Orders' link='/dashboard/profile' icon={<BsPersonCircle />} active={active} onClick={() => handleActiveClick('Profile')} />
          </div>
        </div>

      }
    </>
  )
}

export default Sidebar