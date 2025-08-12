import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import Dashboard from '../Dahboard/Dashboard';
import News from '../News/News';
import AddNews from '../AddNews/AddNews';
import { useState, useEffect } from 'react';
import {
  UserCircle,
  Tag,
  Briefcase,
  FlaskConical,
  HeartPulse,
  Palette,
  Megaphone,
  Star,
  BookOpen,
} from 'lucide-react'

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('/admin-dashboard/dashboard'); // Default active page

  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased flex">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {/* Top Bar */}
        <header className="p-6 bg-white shadow-sm flex justify-end items-center rounded-tr-2xl">
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">Welcome, Admin!</span>
            <UserCircle size={32} className="text-gray-500" />
          </div>
        </header>

        {/* Page Content */}
        {activePage === '/admin-dashboard/dashboard' && <Dashboard/>}
        {activePage === '/admin-dashboard/news' && <News/>}
        {activePage === '/admin-dashboard/add-news' && <AddNews />}
        {(activePage === '/admin-dashboard/categories' || activePage === '/admin-dashboard/users' || activePage === '/admin-dashboard/settings') && (
          <div className="p-8 flex-grow flex items-center justify-center text-gray-500 text-2xl">
            {activePage.charAt(0).toUpperCase() + activePage.slice(1)} Page Coming Soon!
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;