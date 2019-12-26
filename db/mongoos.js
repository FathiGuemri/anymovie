const mongoose  =  require('mongoose');
const mongoPassword = 'Est-367426'

let uri ="mongodb://03afe9f04ddd62ddeef5de17e68a439d:" + encodeURIComponent(mongoPassword) + "@mongodb:27017/03afe9f04ddd62ddeef5de17e68a439d";
 mongoose.Promise = global.Promise
 mongoose.connect(uri , {useNewUrlParser: true}).then(() => {
        console.log('conected to mangodb succesfully :)')
 }).catch(e => console.log(e))

 exports.register = function(req, res){}

 module.exports = { mongoose }
