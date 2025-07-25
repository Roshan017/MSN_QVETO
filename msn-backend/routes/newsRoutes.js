const express = require('express')
const router = express.Router();

const News = require('../models/News');
const { model } = require('mongoose');

<Route path="/admin-dashboard/add-news" element={<AddNewsForm />} />
//Add news to DB
router.post('/', async(req, res)=>{
    try{
        const { title, category, content, image, date } = req.body;
    const newNews = new News({ title, category, content, image, date });

            await news.save();
            console.log("Added to DB")
            res.status(201).json(`Added to DB: ${news.headline}`)

    }
    catch(e){
        res.status(500).json({e: e.message})

    }
})

//Get new from db

module.exports = router
