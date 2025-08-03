import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Newspaper,
  Search,
  Edit,
  Trash2
} from 'lucide-react';

// Optionally set axios baseURL if backend runs on a different port
axios.defaults.baseURL = 'http://localhost:5000'; // Set this to your backend URL and port

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setMessage('');
      setMessageType('');
      try {
        const response = await axios.get('/api/news', {
          params: searchTerm ? { q: searchTerm } : {}
        });
        // Defensive: ensure response.data is an array
        if (Array.isArray(response.data)) {
          setArticles(response.data);
        } else if (Array.isArray(response.data.articles)) {
          setArticles(response.data.articles);
        } else {
          setArticles([]);
          setMessage('No news articles found.');
          setMessageType('error');
        }
      } catch (error) {
        console.error('Error fetching news articles:', error);
        setMessage('Failed to load news articles.');
        setMessageType('error');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id) => {
    setMessage('');
    setMessageType('');
    try {
      await axios.delete(`/api/news/${id}`);
      setArticles(articles.filter(article => article._id !== id));
      setMessage('Article deleted successfully!');
      setMessageType('success');
    } catch (error) {
      console.error(`Error deleting article with ID ${id}:`, error);
      setMessage('Failed to delete article.');
      setMessageType('error');
    }
  };


return (
    <div className="p-8 flex-grow">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">News</h1>

      {message && (
          <div className={`p-4 rounded-xl text-sm mb-4 ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

      <div className="mb-6 flex items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search news..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <span className="text-blue-500 text-lg">Loading news articles...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.length > 0 ? (
                articles.map((article) => (
                  <tr key={article._id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                          {/* fallback to Newspaper icon if not present */}
                          {article.icon ? article.icon : <Newspaper size={16} />}
                        </div>
                        <div className="text-sm font-medium text-gray-900">{article.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${article.category === 'Politics' ? 'bg-indigo-100 text-indigo-800' : ''}
                        ${article.category === 'Sports' ? 'bg-blue-100 text-blue-800' : ''}
                        ${article.category === 'Health' ? 'bg-green-100 text-green-800' : ''}
                        ${article.category === 'Business' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${article.category === 'Entertainment' ? 'bg-red-100 text-red-800' : ''}
                        ${article.category === 'Science' ? 'bg-teal-100 text-teal-800' : ''}
                        ${article.category === 'Technology' ? 'bg-purple-100 text-purple-800' : ''}
                      `}>
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${article.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {article.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4 p-2 rounded-full hover:bg-blue-50 transition-colors duration-150">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(article._id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50 transition-colors duration-150"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    No news articles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default News;