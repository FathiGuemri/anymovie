const mongoose = require('mongoose');



let seriesSchema = new mongoose.Schema({
    title: { required: true, type: String },
    description: { required: true, type: String, },
    imageUrl: String,
    addedSeries: { type: Date, default: Date.now },
    category: String,
    videoTube: String,
    allepisodes:  [{type: mongoose.Schema.Types.ObjectId, ref: 'episode'}]
})

let Serie = mongoose.model('serie', seriesSchema);

let episodeSchema = mongoose.Schema({
    serieId: String,
    index: { type: Number, require: true },
    urls: { type: [{site: String, url: String, imgFromMovie: String}] , require: true },
    timeEpisode: { type: String, required: true},
})

 let Episode = mongoose.model('episode', episodeSchema)
 exports.Serie = Serie
exports.Episode = Episode





