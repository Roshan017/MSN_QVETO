
import './App.css'
import NewsList from './components/NewsList';
import TrendingNews from './sections/TrendingNews';

function App() {
  

  return (
    <div className=" flex flex-col min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">MSN NEWS APP</h1>
      <NewsList/>
      <TrendingNews/>
    </div>
  );
}

export default App
