import React from 'react';
import {BrowserRouter , Router , Routes , Route} from 'react-router-dom';
import './App.css'
import './AdminPanel/AdminDashboard/AdminDashboard.css';
import './AdminPanel/News/News.css';
import './AdminPanel/Sidebar/Sidebar.css'
import './AdminPanel/Dahboard/index.css';
import NewsList from './components/NewsList';
import TrendingNews from './sections/TrendingNews';
import AdminDashboard from '../src/AdminPanel/AdminDashboard/AdminDashboard';
import Dashboard from './AdminPanel/Dahboard/Dashboard';
import News from './AdminPanel/News/News';
import AddNews from './AdminPanel/AddNews/AddNews';
import Categories from './AdminPanel/Categories/Categories';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/*UserSide*/}
        <Route element={<TrendingNews/>} >
          <Route path='/' element={<NewsList/>} />
        </Route>

        {/*AdminSide*/}
        <Route path='/admin-dashboard' element={<AdminDashboard/>}>
          <Route index element={<Dashboard/>} />
          <Route path='/admin-dashboard/news' element={<News/>} />
          <Route path='/admin-dashboard/add-news' element={<AddNews/>} />
          <Route path='/admin-dashboard/categpries' element={<Categories/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
