import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const initialNewsItems  = [
  { id: 1, title: "Government Announces", category: "Politics", status: "Published", date: "May 85" },
  { id: 2, title: "Sports Event Draws Large", category: "Sports", status: "Published", date: "Draft 35" },
  { id: 3, title: "Breakthrough in Cancer", category: "Health", status: "Published", date: "Jan. 23" },
  { id: 4, title: "Stock Market Hits Record", category: "Business", status: "Published", date: "Feb. 23" },
  { id: 5, title: "Local Art Exhibition", category: "Entertainment", status: "Draft", date: "Feb. 23" },
  { id: 6, title: "Advancements in Renewable Energy", category: "Science", status: "Published", date: "Apr. 23" },
  { id: 7, title: "Government Announces", category: "Politics", status: "Published", date: "May 85" },
  { id: 8, title: "Sports Event Draws Large", category: "Sports", status: "Published", date: "Draft 35" },
  { id: 9, title: "Breakthrough in Cancer", category: "Health", status: "Published", date: "Jan. 23" },
  { id: 10, title: "Stock Market Hits Record", category: "Business", status: "Published", date: "Feb. 23" },
  { id: 11, title: "Local Art Exhibition", category: "Entertainment", status: "Draft", date: "Feb. 23" },
  { id: 12, title: "Advancements in Renewable Energy", category: "Science", status: "Published", date: "Apr. 23" },
  { id: 13, title: "Government Announces", category: "Politics", status: "Published", date: "May 85" },
  { id: 14, title: "Sports Event Draws Large", category: "Sports", status: "Published", date: "Draft 35" },
  { id: 15, title: "Breakthrough in Cancer", category: "Health", status: "Published", date: "Jan. 23" },
  { id: 16, title: "Stock Market Hits Record", category: "Business", status: "Published", date: "Feb. 23" },
  { id: 17, title: "Local Art Exhibition", category: "Entertainment", status: "Draft", date: "Feb. 23" },
  { id: 18, title: "Advancements in Renewable Energy", category: "Science", status: "Published", date: "Apr. 23" },
];

const categoryColors = {
  Politics: "green",
  Sports: "blue",
  Health: "lightblue",
  Business: "orange",
  Entertainment: "red",
  Science: "teal",
};

function News() {

  const [newsItems, setNewsItems] = useState(initialNewsItems);

   const handleDelete = (id) => {
      setNewsItems(newsItems.filter(item => item.id !== id));
  };

  return (
    <>
    <h1 className='Ntitle'>News</h1>
    <div className="wraptable">
    <table className="news-table">
      <thead>
        <tr>
          <th className='headtitle'>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Date</th>
          <th className='Action'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {newsItems.map((item, idx) => (
          <tr key={idx}>
            <td className='headtitle'>{item.title}</td>
            <td>
              <span className="category" style={{ backgroundColor: categoryColors[item.category] }}>
                {item.category}
              </span>
            </td>
            <td>{item.status}</td>
            <td>{item.date}</td>
            <td className='Action'>
              <span className="action">Edit</span>
              <span className="action" onClick={() => handleDelete(item.id)} >Delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default News;