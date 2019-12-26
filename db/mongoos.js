const mongoose  =  require('mongoose');
const mongoPassword = 'Est-367426'

let uri ="mongodb://ugkr7z7fsvcq8qifu4ea:rlfVoXlHCP4JtNfmdUJQ@brpou01tbkrpeth-mongodb.services.clever-cloud.com:27017/brpou01tbkrpeth";
 mongoose.Promise = global.Promise
 mongoose.connect(uri , {useNewUrlParser: true}).then(() => {
        console.log('conected to mangodb succesfully :)')
 }).catch(e => console.log(e))

 exports.register = function(req, res){}

 module.exports = { mongoose }
