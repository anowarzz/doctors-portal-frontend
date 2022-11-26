import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashBoardNavbar from '../components/Shared/DashBoardNavbar/DashBoardNavbar';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  
  console.log(isAdmin);
  
  
  
  return (
        <div>
          <DashBoardNavbar />
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

     <Outlet />

  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-y-2">

      <li className='font-semibold shadow border'><Link to = '/dashboard'>My Appointments</Link></li>

  { isAdmin &&
   <> 
     <li className='font-semibold shadow border'><Link to = '/dashboard/allUsers'>All Users</Link></li>

     <li className='font-semibold shadow border'><Link to = '/dashboard/addDoctor'>Add A  Doctor</Link></li>

     <li className='font-semibold shadow border'><Link to = '/dashboard/manageDoctors'>Manage Doctors</Link></li>

    </>
  } 

    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;