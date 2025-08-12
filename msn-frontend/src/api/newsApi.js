import axios from 'axios'

// Fallback to localhost if VITE_API_URL is not set
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const fetchNews = (q) => API.get('/news', { params: q ? { q } : {} });

export const postNews = (data) => API.post('/news', data);

export const deleteNews = (id) => API.delete(`/news/${id}`);