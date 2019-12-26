const router =  require('express').Router()
const userCont = require('../controller/user.cont')
const BP = require('body-parser')

router.post('/signup',  BP.json(), userCont.register)
router.post('/login',BP.json(), userCont.sign_in)

module.exports = router