const router = require('express').Router(),
  seriesCont = require('../controller/series.cont'),
  movieCont = require('../controller/movie.cont'),
  multer = require('multer');




var storage = multer.memoryStorage()
var upload = multer({ storage: storage })


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
