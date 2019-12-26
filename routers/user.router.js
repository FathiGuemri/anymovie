const router =  require('express').Router()
const userCont = require('../controller/user.cont')
const BP = require('body-parser')

router.post('/signup',   userCont.register)
router.post('/login', userCont.sign_in)

module.exports = router