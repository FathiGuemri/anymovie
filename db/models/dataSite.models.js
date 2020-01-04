const mongoose = require('mongoose');

let dataSitSchema = new mongoose.Schema({
  _id: {type: String, default: 0},
  hostName: {type: String, default: 'anymovie.com'},
  AdsTop: {type: String, default: ''},
  email: {type: String, default: 'admin@anymovie.com'},
  phone: {type: String, default: '50788781'},
  address: {type: String, default: 'Ghomrassen'},
  facebook: {type: String, default: 'https://www.facebook.com'},
  twitter: {type: String, default: 'https://www.twitter.com'},
  youtube: {type: String, default: 'https://www.youtube.com'},
})

let DataSite = mongoose.model('DataSite', dataSitSchema);

module.exports = DataSite
