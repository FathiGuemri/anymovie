const {mongoose} = require('../db/mongoos'),
        bcrypt  = require('bcryptjs')
        jwt = require('jsonwebtoken');
        User = require('../db/models/user.model')

exports.register = function(req, res) {
let newUser = User(req.body);
newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
newUser.save((err, user) => {
    if (err) {
        return res.status(400).send({
            message: err
          });
    } else {
        user.hash_password = undefined;
        res.json({user, msg: 'تم التسجيل بنجاح'})
    }
})
}

exports.sign_in = function(req, res) {
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            res.status(401).json({ message: 'تسجيل الدخول فشل . المستخدم ليس موجود' });
        } else if (user) {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({ message: 'تسجيل الدخول فشل. كلمة مرور خاطئة.' });
            } else {
                return res.json({
                    auth_token: jwt.sign(
                        { email: user.email, fullName: user.fullName, isAdmin: user.isAdmin, _id: user._id}, 'RESTFULAPIs'),
                         success: true
                        });
            }
        }
    })

}

exports.loginRequired = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({message: 'مستخدم غير مصرح به!'})
    }

}

exports.isAdmin = function(req, res,  next) {
    if(req.user.isAdmin) {
        next();
    } else {
       return res.status(401).json({message: 'لا يمكن دخول هذه الرابط ,انت لست مسؤول في الموقع'})
    }
}
