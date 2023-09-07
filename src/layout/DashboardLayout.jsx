import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar'
import getMyInfo from '../Hooks/getMyInfo'
import Overview from '../pages/Dashboard/SubPages/Overview/Overview'
import AdminHome from '../pages/Dashboard/adminPages/AdminHome/AdminHome'

const DashboardLayout = () => {
    const { myInfo } = getMyInfo()
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1  md:ml-64 bg-gray-100'>

                <div className='p-5'>
                    {myInfo.user === 'user' ? <Overview></Overview> : <AdminHome></AdminHome>}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout