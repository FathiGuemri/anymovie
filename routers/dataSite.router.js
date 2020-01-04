const router = require('express').Router(),
      dataSite = require('../controller/dataSite.cont');


  router.get('/data', dataSite.getDataSite)
  router.patch('/data', dataSite.patchDataSite)


  module.exports = router

