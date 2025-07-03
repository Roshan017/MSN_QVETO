const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    headline: {type: String, required: true},
    desc: String,
    image: String,
    category: String,

    createdAt: {type:Date, default: Date.now}
})


module.exports = mongoose.model('News',newsSchema)