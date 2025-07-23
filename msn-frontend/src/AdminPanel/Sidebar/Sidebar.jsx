import {
  Home,
  Newspaper,
  PlusCircle,
  List,
  Users,
  Settings,
  UserCircle
} from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => {
  const navItems = [
    { name: 'Dashboard', icon: Home, page: '/admin-dashboard/dashboard' },
    { name: 'News', icon: Newspaper, page: '/admin-dashboard/news' },
    { name: 'Add News', icon: PlusCircle, page: '/admin-dashboard/add-news' },
    { name: 'Categories', icon: List, page: '/admin-dashboard/categories' },
    { name: 'Users', icon: Users, page: '/admin-dashboard/users' },
    { name: 'Settings', icon: Settings, page: '/admin-dashboard/settings' },
  ];

  return (
    <div className="w-64 bg-gray-50 p-6 flex flex-col rounded-l-2xl shadow-lg">
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
          <Newspaper size={20} />
        </div>
        <span className="text-xl font-semibold text-gray-800">News Admin</span>
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <button
                onClick={() => setActivePage(item.page)}
                className={`flex items-center w-full p-3 rounded-xl text-left transition-all duration-200
                  ${activePage === item.page
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-blue-600'
                  }`}
              >
                <item.icon size={20} className="mr-3" />
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center p-3 rounded-xl text-gray-600">
          <UserCircle size={24} className="mr-3" />
          <span className="font-medium">Admin User</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;