'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { usePathname } from 'next/navigation'

const DashboardLayout = ({ children }) => {
  const [menuModal, setMenuModal] = useState(false);
  const pathName = usePathname().split('/')[2] || 'dashboard';
  const session = useSession();
  return (
    <div className=''>
      <Navbar currentUser={session?.data?.user} setMenuModal={setMenuModal} />
      <div className='flex min-h-screen'>
        <Sidebar menuModal={menuModal} pathName={pathName}/>
        <div className={`px-4 py-6 bg-black w-full text-primaryText min-h-full ${menuModal && 'brightness-50'}`} onClick={() => setMenuModal(false)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout