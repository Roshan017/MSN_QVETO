import React, { useEffect, useState } from 'react'
import { fetchNews } from '../api/newsApi'

const TrendingNews = () => {

    const [newsList, setNewsList] = useState([{
    _id: "default-1",
    headline: "India Wins T20 World Cup!",
    desc: "India clinches victory in a thrilling final against South Africa.",
    image: "https://via.placeholder.com/400x250",
    category: "Sports",
    createdAt: new Date(),
  },])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getNews = async()=>{
            try{
                    const res = await fetchNews();
                    setNewsList(res.data)
            }
            catch(e){
                console.log("Error Getting news: ", e)
            }
            finally{
                setLoading(false)
            }
        };
        getNews();
    })

  return (
     <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📰 Trending News</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div
              key={news._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={news.image || "https://via.placeholder.com/300"}
                alt={news.headline}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{news.headline}</h3>
                {news.desc && <p className="text-sm text-gray-600 mt-2">{news.desc}</p>}
                {news.category && (
                  <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default TrendingNews