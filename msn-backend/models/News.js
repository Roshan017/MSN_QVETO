const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  // Accept both string and Date for flexibility
  date: { 
    type: Date, 
    required: true,
    set: val => val ? new Date(val) : val
  },
}, { timestamps: true });

module.exports = mongoose.model("News", newsSchema);
