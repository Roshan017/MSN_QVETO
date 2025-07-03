import axios from 'axios'

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const fetchNews = ()=> API.get('/news');

export const postNews = (data)=>API.post('/news', data)