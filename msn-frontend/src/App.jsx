import React from 'react';
import {BrowserRouter , Router , Routes , Route} from 'react-router-dom';
import './App.css';
import NewsList from './components/NewsList';
import TrendingNews from './sections/TrendingNews';
import AdminDashboard from '../src/AdminPanel/AdminDashboard/AdminDashboard';
import Dashboard from './AdminPanel/Dahboard/Dashboard';
import News from './AdminPanel/News/News';
import AddNews from './AdminPanel/AddNews/AddNews';
import Categories from './AdminPanel/Categories/Categories';
import NewsCard from "./components/NewsCard";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/*UserSide*/}
        <Route path='/' element={
          <>
            <NewsList />
            <TrendingNews />
            <Footer />
          </>
        } />

        {/*AdminSide*/}
        <Route path='/admin-dashboard' element={<AdminDashboard/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
