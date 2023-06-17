import Navbar from './components/Navbar'
import getCurrentUser from '@/app/actions/getCurrentUser'
import Sidebar from './components/Sidebar';

const DashboardLayout = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout