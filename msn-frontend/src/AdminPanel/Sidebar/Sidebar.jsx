import React from 'react'
import { Link, Links } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  const links=[
    {to:"/admin-dashboard" , name: "Dashboard" , icon: <MdOutlineDashboard />},
    {to:"/admin-dashboard/news" , name: "News" , icon: <BsNewspaper />},
    {to:"/admin-dashboard/add-news" , name: "AddNews" , icon: <IoMdAddCircle />},
    {to:"/admin-dashboard/categpries" , name: "Categories" , icon: <TbCategoryFilled />}
  ]
  return (
    <div className="Sideb">
      <div className="flex flex-col items-center justify-center">
        <div className="user">
        <FaCircleUser />
        </div>
        {links.map((items,i) => (
          <Link 
          to={items.to}
          key={i}
          className="menu flex hover:scale-103 transition-all duration-150">
            <div className="icons">
              {items.icon}
            </div>
            <div className="itext">
              {items.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;