const express = require('express')
const router = express.Router();

const News = require('../models/News');
const { model } = require('mongoose');

//Add news to DB
router.post('/', async(req, res)=>{
    try{
            const news = new News(req.body)

            await news.save();
            console.log("Added to DB")
            res.status(201).json(`Added to DB: ${news.headline}`)

    }
    catch(e){
        res.status(400).json({e: e.message})

    }
})

//Get new from db
router.get('/', async (req, res) => {
    try {
        const filter = {};
        if (req.query.category) {
            filter.category = req.query.category;
        }
        if (req.query.title) {
            filter.title = { $regex: req.query.title, $options: 'i' };
        }

        let sort = {};
        if (req.query.sortBy) {
            const sortField = req.query.sortBy;
            const sortOrder = req.query.order === 'desc' ? -1 : 1;
            sort[sortField] = sortOrder;
        } else {
            sort = { date: -1 }; 
        }

        const newsList = await News.find(filter).sort(sort);
        res.status(200).json(newsList);
    } catch (e) {
        res.status(400).json({ e: e.message });
    }
});

module.exports = router