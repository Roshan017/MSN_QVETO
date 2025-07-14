import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='flex'>
        <div className="w-1/6">
        <div className="Sidemen fixed w-1/6 h-screen">
            {" "}
            <Sidebar/>
        </div>
        </div>
        <div className="AdminDash w-5/6">
            <Outlet/>
        </div>
    </div>
  );
};

export default AdminDashboard;