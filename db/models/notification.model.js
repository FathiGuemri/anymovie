const mongoose = require('mongoose');


let notifcationschema = mongoose.Schema({

  movieId: String,
  movietitle: String,
  site: String,
  url: String,
  imgFromMovie: String
})

let Notifcation = mongoose.model('notifcation', notifcationschema)


module.exports = Notifcation
