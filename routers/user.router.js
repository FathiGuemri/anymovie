const router =  require('express').Router()
const userCont = require('../controller/user.cont')

router.post('/signup',   userCont.register)
router.post('/login', userCont.sign_in)
router.post('/notification', userCont.postNotification)
router.get('/notification', userCont.getNotification)
router.delete('/notification/:id', userCont.deleteNotification)

module.exports = router
