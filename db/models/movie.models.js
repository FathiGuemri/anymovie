const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    title: { required: true, type: String, },
    description: { required: true, type: String, },
    imageUrl: { type: String, required: true},
    addedMovie: {  type: Date, default: Date.now },
    timeMovie: { type: String, required: true, },
    movieUrls: { type: [{site: String, url: String, imgFromMovie: String}] , required: true },
    lang: { type: String, required: true },
    category: String ,
    videoTube: String,
    isNewMovie:{ type: Boolean, default: false}
})

let Movie = mongoose.model('movie', movieSchema);

module.exports = Movie
