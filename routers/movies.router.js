const router = require('express').Router(),
    movieCont = require('../controller/movie.cont');


router.get('/all', movieCont.getAllMovies)
router.get('/movie/:_id', movieCont.getMovieById)
router.get('/movie/select/after', movieCont.getAfterMovie)
router.get('/filter/type/lang/:lang', movieCont.getMovieByLang)
router.get('/filter/category/:category', movieCont.getMovieByCategory)
router.get('/filter/type/lang/:lang/category/:category', movieCont.getMovieByCategoryAndLang)

// dashbord





module.exports = router