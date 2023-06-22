import DoughnutElement from './components/DoughnutElement'
import RevenueChart from './components/RevenueChart'

const Dashboard = () => {
  return (
    <div className='px-4 py-6 bg-black w-full'>
      <h1 className='text-primaryText text-2xl font-semibold'>Dashboard</h1>
      <div className='my-4 flex gap-8 flex-wrap justify-center'>
        <DoughnutElement title='Properties Sold' totalValue={100} dataValue={60} color='#51b7ff'/>
        <DoughnutElement title='Properties Rented' totalValue={100} dataValue={60} color='#ffb342'/>
        <DoughnutElement title='Total Customers' totalValue={100} dataValue={60} color='#4dff53'/>
        <DoughnutElement title='Rating' totalValue={5} dataValue={4.1} color='#ff5a5a'/>
      </div>
      <div className='my-8'>
        <RevenueChart dataValue={[100,200,300,400, 500,600,700,800,900,1000,1000,1000]}/>
      </div>
    </div>
  )
}

export default Dashboard