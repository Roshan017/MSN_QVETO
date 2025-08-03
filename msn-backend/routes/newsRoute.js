const express = require('express')
const router = express.Router();

const News = require('../models/News');
// Add news to DB
router.post('/', async(req, res)=>{
    try{
        const { title, category, content, image, date } = req.body;
        const newNews = new News({ title, category, content, image, date });
        await newNews.save();
        console.log("Added to DB")
        res.status(201).json(`Added to DB: ${newNews.title}`)
    }
    catch(e){
        res.status(500).json({e: e.message})
    }
})

// Get news from DB
router.get('/', async (req, res) => {
    try {
        const q = req.query.q;
        let news;
        if (q) {
            news = await News.find({
                $or: [
                    { title: { $regex: q, $options: 'i' } },
                    { category: { $regex: q, $options: 'i' } }
                ]
            });
        } else {
            news = await News.find();
        }
        res.json(news);
    } catch (e) {
        res.status(500).json({ e: e.message });
    }
});

// Delete news from DB
router.delete('/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (e) {
        res.status(500).json({ e: e.message });
    }
});

module.exports = router
