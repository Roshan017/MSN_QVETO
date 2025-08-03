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
} from 'lucide-react';

const mockApi = {
  fetchDashboardStats: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          totalNews: 120,
          published: 85,
          draft: 35,
          recentActivity: [
            { month: 'Jan', value: 80 },
            { month: 'Feb', value: 110 },
            { month: 'Mar', value: 60 },
            { month: 'Apr', value: 90 },
            { month: 'May', value: 150 },
            { month: 'Jun', value: 100 },
            { month: 'Jul', value: 200 },
          ],
        });
      }, 500);
    });
  },

  fetchNewsArticles: async (query = '') => {
    return new Promise(resolve => {
      setTimeout(() => {
        const allArticles = [
          { id: '1', title: 'Government Announces New Policy', category: 'Politics', status: 'Published', date: 'May 85', icon: <Megaphone size={16} /> },
          { id: '2', title: 'Sports Event Draws Large Crowd', category: 'Sports', status: 'Published', date: 'Draft 35', icon: <Star size={16} /> },
          { id: '3', title: 'Breakthrough in Cancer Research', category: 'Health', status: 'Published', date: 'Jan. 23', icon: <HeartPulse size={16} /> },
          { id: '4', title: 'Stock Market Hits Record High', category: 'Business', status: 'Published', date: 'Feb. 23', icon: <Briefcase size={16} /> },
          { id: '5', title: 'Local Art Exhibition Opens', category: 'Entertainment', status: 'Draft', date: 'Feb. 23', icon: <Palette size={16} /> },
          { id: '6', title: 'Advancements in Renewable Energy', category: 'Science', status: 'Published', date: 'Apr. 23', icon: <FlaskConical size={16} /> },
          { id: '7', title: 'New Book Release Dominates Charts', category: 'Entertainment', status: 'Published', date: 'Jun. 10', icon: <BookOpen size={16} /> },
          { id: '8', title: 'Tech Giant Unveils New Gadget', category: 'Technology', status: 'Draft', date: 'Jul. 01', icon: <Tag size={16} /> },
        ];
        const filteredArticles = allArticles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredArticles);
      }, 700);
    });
  },

  submitNewsArticle: async (articleData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Submitting article:', articleData);
        // In a real app, you'd send this to your backend
        resolve({ success: true, message: 'Article added successfully!' });
      }, 1000);
    });
  }
};

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('/admin-dashboard/'); // Default active page

  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased flex">
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        {/* Top Bar (Optional, but good for user profile/logout) */}
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
        {/* Render other pages if implemented */}
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