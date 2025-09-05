import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsList from "./components/NewsList";
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
            <Route path="/" element={<NewsList />} />
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

      <div className=" flex flex-col min-h-screen items-center justify-center bg-gray-100 ">
        <h1 className="text-4xl font-bold text-blue-600">MSN NEWS APP</h1>
        <NewsList />
        <TrendingNews />
        <div className="max-w-7xl mx-auto cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full justify-around ">
          <NewsCard
            img="https://www.informalnewz.com/wp-content/uploads/2024/09/Heavy-Rains-Update.jpg"
            category="Weather"
            heading="Heavy Rain Lashes Delhi NCR, Schools Shut Down"
            discription="Continuous rainfall since early morning causes waterlogging and traffic jams in several areas."
            author="By ANI"
            date="07 July 2025"
          />
          <NewsCard
            img="https://cdn1.img.sputniknews.in/img/07e7/0a/08/4673874_167:0:2876:2032_1920x0_80_0_0_8c100d11b846c0acc898919f9c18828c.jpg"
            category="Sports"
            heading="T20 World Cup 2025: India Defeats Pakistan"
            discription="Virat Kohli’s brilliant innings leads India to a 5-wicket victory over Pakistan."
            author="By Sports Desk"
            date="07 July 2025"
          />
          <NewsCard
            img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Petrol_0.jpg?size=690:388"
            category="Economy"
            heading="Petrol and Diesel Prices Hiked Again"
            discription="Petrol price increases by Rs 2 while diesel gets costlier by Rs 1.5 per litre from today."
            author="By PTI"
            date="07 July 2025"
          />
          <NewsCard
            img="https://d1c4d7gnm6as1q.cloudfront.net/Pictures/480xany/1/2/6/64126_line2extensioninkolkataphotomodi1_228281.jpg"
            category="Local"
            heading="New Metro Line Inaugurated in Kolkata"
            discription="Prime Minister flags off Kolkata’s third metro line aiming to ease city traffic."
            author="By City Reporter"
            date="07 July 2025"
          />
          <NewsCard
            img="https://www.timesbull.com/wp-content/uploads/2025/07/Apple-iPhone-17-Pro-.jpg"
            category="Technology"
            heading="Apple to Launch iPhone 17 This September"
            discription="The new iPhone 17 is expected to come with advanced AI features and improved battery life."
            author="By Tech Guru"
            date="07 July 2025"
          />
          <NewsCard
            img="https://people.com/thmb/lelKAaFsXP8SJVqJbIWPgch-YCg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(599x0:601x2)/screen-shot-2019-07-17-at-11.15.40-am-45c6400aba5a4483aa8ca7b03a70c86a.jpg"
            category="Entertainment"
            heading="Chris Evans’ New Movie ‘Rescue Mission’ Breaks Records"
            discription="The Hollywood actor’s latest action film tops box office charts worldwide."
            author="By Entertainment Desk"
            date="07 July 2025"
          />
        </div>
      </div>
    </>
  );
}

export default App;
