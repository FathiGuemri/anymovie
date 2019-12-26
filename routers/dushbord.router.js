const router = require('express').Router(),
  seriesCont = require('../controller/series.cont'),
  movieCont = require('../controller/movie.cont'),
  multer = require('multer');


// Multer File upload settings
const DIR = './uploads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  //   limits: {
  //     fileSize: 1024 * 1024 * 5
  //   },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


var upload = multer({ storage: storage })

router.post('/movies/add', upload.single('image'), movieCont.createMovie)
router.put('/movies/edit/:_id', upload.single('image'), movieCont.editeMovisById)
router.delete('/movies/delete/:_id', movieCont.deleteMovie)


router.post('/series/serie/add', upload.single('image'), seriesCont.createSerie)
router.put('/series/serie/edit/:_id', upload.single('image'), seriesCont.editeSerisById)
router.delete('/series/serie/delete/:_id', seriesCont.deleteSeries)

router.get('/series/episodes/get',  seriesCont.getEpisodes)
router.get('/series/episodes/getbyId/:serieId',  seriesCont.getEpisodesById)
router.post('/series/add/episode/:serieId',  seriesCont.addEpisode)
router.put('/series/edit/episode/:serieId/:id', seriesCont.editEpisode)
router.delete('/series/delete/episode/:serieId/:id', seriesCont.deleteEpisode)



module.exports = router