const DataSite = require('../db/models/dataSite.models')
exports.patchDataSite = (req, res) => {

  DataSite.updateOne({_id: 0}, req.body).then(m => {
    res.json({success: true, m})
  }).catch(err => res.json({success: false, err}))

}

exports.getDataSite = (req, res) => {
  DataSite.findOne({_id: 0}).then(m => {
    res.json(m)
  }).catch(err => res.json({success: false, err}))

}
