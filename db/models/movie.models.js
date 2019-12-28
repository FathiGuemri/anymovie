const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    title: { required: true, type: String, },
    description: { required: true, type: String, },
    imageUrl: { type: String, required: true},
    addedMovie: {  type: Date, default: Date.now },
    timeMovie: { type: String, required: true, },
    movieUrls: { type: [String], required: true },
    lang: { type: String, required: true },
    category: String ,
    videoTube: String,
})

let Movie = mongoose.model('movie', movieSchema);

module.exports = Movie
