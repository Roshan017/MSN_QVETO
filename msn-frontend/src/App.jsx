import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsList from "./components/NewsList";
// import newsList2 from "./components/NewsList";
import TrendingNews from "./sections/TrendingNews";
import AdminDashboard from "../src/AdminPanel/AdminDashboard/AdminDashboard";
import Dashboard from "./AdminPanel/Dahboard/Dashboard";
import News from "./AdminPanel/News/News";
import AddNews from "./AdminPanel/AddNews/AddNews";
import Categories from "./AdminPanel/Categories/Categories";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*UserSide*/}
          <Route element={<TrendingNews />}>
            <NewsList />
          </Route>

          {/*AdminSide*/}
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin-dashboard/news" element={<News />} />
            <Route path="/admin-dashboard/add-news" element={<AddNews />} />
            <Route
              path="/admin-dashboard/categpries"
              element={<Categories />}
            />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className=" flex flex-col min-h-screen items-center justify-center bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-blue-600">MSN NEWS APP</h1>
        {/* <NewsList /> */}
      </div>
    </>
  );
}

export default App;
