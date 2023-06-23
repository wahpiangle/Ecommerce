'use client'

import { useState } from 'react'
import SidebarButton from './SidebarButton'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'

const Sidebar = ({ menuModal }) => {
  const [active, setActive] = useState('Dashboard')

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
      <div className='bg-primary min-h-full p-4 flex-col gap-2 sm:flex hidden'>
        <SidebarButton title='Dashboard' link='/dashboard' icon={<AiOutlineDashboard />} active={active} onClick={() => handleActiveClick('Dashboard')} />
        <SidebarButton title='Properties' link='/dashboard/properties' icon={<BiBuildings />} active={active} onClick={() => handleActiveClick('Properties')} />
        <SidebarButton title='Orders' link='/dashboard/orders' icon={<FaFileInvoiceDollar />} active={active} onClick={() => handleActiveClick('Orders')} />
        <SidebarButton title='Orders' link='/dashboard/profile' icon={<BsPersonCircle />} active={active} onClick={() => handleActiveClick('Profile')} />
      </div>
      {
        menuModal &&
        <div
          className={`absolute z-10 flex sm:hidden h-full w-full `}
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