const mongoose   = require('mongoose');
const bcrypt =require('bcryptjs')

 let UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        default: false,
        type: Boolean
    },
    notifcationReq: [{type: mongoose.Schema.Types.ObjectId, ref: 'notifcation'}]

})
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password)
}

let User = mongoose.model('user',UserSchema)


module.exports  = User;

