'use client'
import DoughnutElement from './components/DoughnutElement'
import LatestSales from './components/LatestSales'
import RevenueChart from './components/RevenueChart'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const Dashboard = () => {
  const [menuModal, setMenuModal] = useState(true);
  const session = useSession();

  const list = [
    {
      title: 'House 1',
      location: 'Location 1',
      price: 100,
      image: '/assets/placeholder.png'
    },
    {
      title: 'House 2',
      location: 'Location 2',
      price: 200,
      image: '/assets/placeholder.png'
    },
    {
      title: 'House 3',
      location: 'Location 3',
      price: 300,
      image: '/assets/placeholder.png'
    }
  ]
  return (
    <>
      <Navbar currentUser={session?.data?.user} setMenuModal={setMenuModal} />
      <div className='flex'>
        <Sidebar menuModal={menuModal}/>
        <div className={`px-4 py-6 bg-black w-full text-primaryText h-full ${menuModal && 'brightness-50'}`} onClick={()=>setMenuModal(false)}>
          <h1 className='text-primaryText text-2xl font-semibold'>Dashboard</h1>
          <div className='my-4 flex gap-8 flex-wrap justify-center'>
            <DoughnutElement title='Properties Sold' totalValue={100} dataValue={60} color='#51b7ff' />
            <DoughnutElement title='Properties Rented' totalValue={100} dataValue={60} color='#ffb342' />
            <DoughnutElement title='Total Customers' totalValue={100} dataValue={60} color='#4dff53' />
            <DoughnutElement title='Rating' totalValue={5} dataValue={4.1} color='#ff5a5a' />
          </div>
          <div className='my-6 flex gap-4'>
            <RevenueChart dataValue={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1000, 1000]} />
            <LatestSales list={list} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard