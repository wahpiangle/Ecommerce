'use client'

import { useState } from 'react'
import SidebarButton from './SidebarButton'
import { AiOutlineDashboard } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BsPersonCircle } from 'react-icons/bs'

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  const handleActiveClick = (title) =>{
    setActive(title)
  }

  return (
    <div className='bg-primary min-h-screen p-4 flex flex-col gap-2'>
      <SidebarButton title='Dashboard' link='/dashboard' icon={<AiOutlineDashboard/>} active={active} onClick={()=>handleActiveClick('Dashboard')}/>
      <SidebarButton title='Properties' link='/dashboard/properties' icon={<BiBuildings/>} active={active} onClick={()=>handleActiveClick('Properties')}/>
      <SidebarButton title='Orders' link='/dashboard/orders' icon={<FaFileInvoiceDollar/>} active={active} onClick={()=>handleActiveClick('Orders')}/>
      <SidebarButton title='Orders' link='/dashboard/profile' icon={<BsPersonCircle/>} active={active} onClick={()=>handleActiveClick('Profile')}/>
    </div>
  )
}

export default Sidebar