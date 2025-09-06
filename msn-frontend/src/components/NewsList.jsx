import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/news") // Yahan apni API ka URL
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="news-list grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full m-2">
      {news.map((item) => (
        <NewsCard
          key={item._id || item.id}
          img={item.img}
          heading={item.title}
          category={item.category}
          discription={item.content}
          author={item.author}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default NewsList;
