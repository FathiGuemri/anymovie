const { mongoose } = require('../db/mongoos'),
  Movie = require('../db/models/movie.models'),
  Notifcation = require('../db/models/notification.model'),
  User = require('../db/models/user.model'),
  ObjectId = require('mongoose').Types.ObjectId;


// get Document movie bay ID
exports.getMovieById = (req, res) => {
  Movie.findOne({ _id: req.params._id }).then(movie => {
    res.json(movie)
  }).catch(err => {
    res.status(401).json(err)
  })
}

// get all docmuent movies
exports.getAllMovies = (req, res) => {
  Movie.find({}).sort({ title: -1 }).then(movies => {
    res.json(movies)
  })
}

// get all docmuent and fullter by category  movies
exports.getMovieByCategory = (req, res) => {
  Movie.find({ category: req.params.category }).then(movie => {
    res.json(movie)
  })
}

exports.getMovieByCategoryAndLang = (req, res) => {
  Movie.find({ category: req.params.category, lang: req.params.lang }).then(movie => {
    res.json(movie)
  })
}

exports.getAfterMovie = (req, res) => {
  Movie.find({}).then(movies => {

    res.json(movies[movies.length - 1])
  })
}
// get all docmuent and fullter by language movies
exports.getMovieByLang = (req, res) => {
  Movie.find({ lang: req.params.lang }).then(movie => {
    res.json(movie)
  })
}

// create new document movie



exports.createMovie = (req, res) => {
  let data = req.body
  let b64encoded = req.file.buffer.toString('base64');
  data.imageUrl = "data:" + req.file.mimetype + ";base64," + b64encoded;
  data.movieUrls = eval(data.movieUrls)
  let movie = new Movie(data)
  movie.save().then(movie => {
    res.status(200).json({ msg: 'تم اضافت الفيلم بنجاح', movie })

  }).catch(err => {
    res.status(401).json({ err })
  })
}

exports.editeMovisById = (req, res) => {
  Movie.updateOne({ _id: req.params._id }, req.body).then((eiditedMovie) => {
    res.json({ msg: 'تم تعديل الفيلم بنجاح', eiditedMovie })
  }).catch(err => res.json(err))



}

exports.deleteMovie = (req, res) => {
  Movie.deleteOne({ _id: req.params._id }).then(deletedMovie => {
    res.status(200).json({ msg: 'تم حذف الفيلم بنجاح' })
  }).catch(err => res.status(401).json(err))
}

exports.addToNewMovie = (req, res) => {
    Movie.updateOne({_id: req.params._id}, {isNewMovie: req.body.isNewMovie}).then(m => {
      res.json({success: true, m})
    }).catch(err => res.json({success: false, err}))
    console.log(req.body.isNewMovie)
  }

exports.deleteToNewMovie = (req, res) => {
  Movie.updateOne({_id: req.params._id}, {isNewMovie: req.body.isNewMovie}).then(m => {
    res.json({success: true, m})
  }).catch(err => res.json({success: false, err}))
  console.log(req.body.isNewMovie)
}






