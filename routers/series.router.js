const router = require('express').Router(),
seriesCont = require('../controller/series.cont');


router.get('/all', seriesCont.getAllseries)
router.get('/serie/:_id', seriesCont.getSerieById)
router.get('/serie/select/after', seriesCont.getAfterSerie)

router.get('/filter/category/:category', seriesCont.getSerieByCategory)
router.get('/serie/episodes/getbyId/:ep_Id',  seriesCont.getEpisodesById)

module.exports = router