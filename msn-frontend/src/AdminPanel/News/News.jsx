import { useState, useEffect } from 'react';
import {
  Newspaper,
  Search,
  Edit,
  Trash2,
  Tag,
  Briefcase,
  FlaskConical,
  HeartPulse,
  Palette,
  Megaphone,
  Star,
  BookOpen
} from 'lucide-react';

const mockApi = {
  fetchDashboardStats: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          totalNews: 120,
          published: 85,
          draft: 35,
          recentActivity: [
            { month: 'Jan', value: 80 },
            { month: 'Feb', value: 110 },
            { month: 'Mar', value: 60 },
            { month: 'Apr', value: 90 },
            { month: 'May', value: 150 },
            { month: 'Jun', value: 100 },
            { month: 'Jul', value: 200 },
          ],
        });
      }, 500);
    });
  },

  fetchNewsArticles: async (query = '') => {
    return new Promise(resolve => {
      setTimeout(() => {
        const allArticles = [
          { id: '1', title: 'Government Announces New Policy', category: 'Politics', status: 'Published', date: 'May 85', icon: <Megaphone size={16} /> },
          { id: '2', title: 'Sports Event Draws Large Crowd', category: 'Sports', status: 'Published', date: 'Draft 35', icon: <Star size={16} /> },
          { id: '3', title: 'Breakthrough in Cancer Research', category: 'Health', status: 'Published', date: 'Jan. 23', icon: <HeartPulse size={16} /> },
          { id: '4', title: 'Stock Market Hits Record High', category: 'Business', status: 'Published', date: 'Feb. 23', icon: <Briefcase size={16} /> },
          { id: '5', title: 'Local Art Exhibition Opens', category: 'Entertainment', status: 'Draft', date: 'Feb. 23', icon: <Palette size={16} /> },
          { id: '6', title: 'Advancements in Renewable Energy', category: 'Science', status: 'Published', date: 'Apr. 23', icon: <FlaskConical size={16} /> },
          { id: '7', title: 'New Book Release Dominates Charts', category: 'Entertainment', status: 'Published', date: 'Jun. 10', icon: <BookOpen size={16} /> },
          { id: '8', title: 'Tech Giant Unveils New Gadget', category: 'Technology', status: 'Draft', date: 'Jul. 01', icon: <Tag size={16} /> },
        ];
        const filteredArticles = allArticles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.category.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredArticles);
      }, 700);
    });
  },

  submitNewsArticle: async (articleData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Submitting article:', articleData);
        // In a real app, you'd send this to your backend
        resolve({ success: true, message: 'Article added successfully!' });
      }, 1000);
    });
  }
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 0);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

 useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const fetchedArticles = await mockApi.fetchNewsArticles(debouncedSearchTerm);
        setArticles(fetchedArticles); // Update articles state with fetched data
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]); // Clear articles on error
      } finally {
        setLoading(false); // Set loading to false after fetching (whether success or error)
      }
    };

    // Only fetch if debouncedSearchTerm is not empty or if it becomes empty (to clear results)
    fetchArticles();
  }, [debouncedSearchTerm]); // Re-run effect when debouncedSearchTerm changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    // In a real app, you'd make an API call to delete the article
    console.log(`Deleting article with ID: ${id}`);
    setArticles(articles.filter(article => article.id !== id));
    // Show a success message to the user
  };


  return (
    <div className="p-8 flex-grow">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">News</h1>

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
                <tr key={article.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        {article.icon || <Newspaper size={16} />}
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
                      onClick={() => handleDelete(article.id)}
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
    </div>
  );
};

export default News;