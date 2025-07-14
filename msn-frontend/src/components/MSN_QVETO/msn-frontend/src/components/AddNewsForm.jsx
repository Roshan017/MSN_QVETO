import React, { useState } from 'react';

const AddNewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
    date: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, category, content, image, date } = formData;

    if (!title || !category || !content || !image || !date) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("News added successfully.");
        setFormData({ title: '', category: '', content: '', image: '', date: '' });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add News Article</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddNewsForm;
