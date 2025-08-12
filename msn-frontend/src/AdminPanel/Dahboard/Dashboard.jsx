import React from 'react';
import { useState, useEffect } from 'react';
import {
  Newspaper,
  CheckCircle,
  DraftingCompass,
  Tag,
  Briefcase,
  FlaskConical,
  HeartPulse,
  Palette,
  Megaphone,
  Star,
  BookOpen,
  ClipboardList,
  Activity,
  BarChart3,
  CalendarDays
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
    })
  }
};

const Dashboard = () => {
  const [stats, setStats] = useState({ totalNews: 0, published: 0, draft: 0, recentActivity: [] });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const data = await mockApi.fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  },[]);

  return (
    <div className="p-8  flex-grow">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Total News</div>
            <div className="text-4xl font-bold text-gray-900">{stats.totalNews}</div>
          </div>
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <Newspaper size={28} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Published</div>
            <div className="text-4xl font-bold text-gray-900">{stats.published}</div>
          </div>
          <div className="p-3 bg-green-100 rounded-full text-green-600">
            <CheckCircle size={28} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-500 mb-1">Draft</div>
            <div className="text-4xl font-bold text-gray-900">{stats.draft}</div>
          </div>
          <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
            <DraftingCompass size={28} />
          </div>
        </div>
      </div>

      {/* Recent Activity Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-100 text-blue-600">1W</button>
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100">1M</button>
          </div>
        </div>
        {/* Placeholder for chart */}
        <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-sm">
          <BarChart3 size={48} className="text-gray-300 mr-2" />
          Activity Chart Placeholder
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-4 px-2">
          {stats.recentActivity.map((item, index) => (
            <span key={index}>{item.month}</span>
          ))}
        </div>
      </div>

      {/* More Recent Activity (List) */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Latest Updates</h2>
        <ul className="space-y-4">
          <li className="flex items-center p-3 bg-gray-50 rounded-xl">
            <Activity size={20} className="text-blue-500 mr-3" />
            <span className="text-gray-700">New user registered: John Doe</span>
            <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center p-3 bg-gray-50 rounded-xl">
            <ClipboardList size={20} className="text-green-500 mr-3" />
            <span className="text-gray-700">Article "Tech Innovations" published</span>
            <span className="ml-auto text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="flex items-center p-3 bg-gray-50 rounded-xl">
            <CalendarDays size={20} className="text-yellow-500 mr-3" />
            <span className="text-gray-700">Draft article "Future of AI" updated</span>
            <span className="ml-auto text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;