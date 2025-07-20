import React, { useState } from "react";

const AddNewsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    image: null, // store as File
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] }); // File object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.title || !formData.category || !formData.content || !formData.image || !formData.date) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      // Step 1: Upload image to Cloudinary
      const data = new FormData();
      data.append("file", formData.image);
      data.append("upload_preset", "unsigned_msn_upload");
      data.append("cloud_name", "dckks6tn6");

      const cloudRes = await fetch("https://api.cloudinary.com/v1_1/dckks6tn6/image/upload", {
        method: "POST",
        body: data,
      });

      const cloudData = await cloudRes.json();
      const imageUrl = cloudData.secure_url;

      // Step 2: Submit form data to backend
      const response = await fetch("http://localhost:5000/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          category: formData.category,
          content: formData.content,
          image: imageUrl, // Use uploaded URL
          date: formData.date,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ News added successfully!");
        setFormData({
          title: "",
          category: "",
          content: "",
          image: null,
          date: "",
        });
        // Optionally redirect to homepage here
      } else {
        setMessage(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setMessage("Server error.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📰 Add News Article</h2>
      {message && <p className="mb-3 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border p-2" />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="border p-2" />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} className="border p-2" />
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="border p-2" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="border p-2" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Add News</button>
      </form>
    </div>
  );
};

export default AddNewsForm;
