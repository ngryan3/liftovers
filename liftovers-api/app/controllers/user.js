var User = require("../models/user.js");
var bcrypt = require('bcryptjs');
var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

// Create and Save a new Note
exports.create = function (req, res) {
    // Create and Save a new Note
    if (!req.body.name) {
        return res.status(400).send({ message: "Name can not be empty" });
    }

    User.findOne({ email: req.body.email }, function (err, user_email) {
        if (err) {
            return callback(err)
        } else if (!user_email) {
            var user = new User({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: req.body.phone,
                methodOfCommunication: req.body.methodOfCommunication,
                password: req.body.password,
                securityQuestion: req.body.securityQuestion,
                securityAnswer: req.body.securityAnswer,
                // volunteer/ admin/ superAdmin
                // default will be volunteer when creating a user object
                // role: req.body.role,
                // waitingApproval/ active/ deleted
                status: req.body.status,
                volunteerId: req.body.volunteerId
            });

            user.save(function (err, data) {
                if (err) {
                    console.log(err);
                    res
                        .status(500)
                        .send({ message: "Some error occurred while creating the User." });
                } else {
                    res.send(data);
                }
            });
        } else {
            res.status(400).send({ message: 'Email already exists in database' })
        }

    })
};

exports.login = function (req, res) {
    // Retrieve and return all notes from the database.
    if (!req.body.email) {
        return res.status(400).send({ message: "Email can not be empty" });
    }

    User.findOne({ email: req.body.email }, function (err, user_email) {
        if (err) {
            return callback(err)
        } if (user_email) {
            User.find({ email: req.body.email })
                .then(item => {
                    let password = item[0].password;
                    let auth = null;
                    bcrypt.compare(req.body.password, password, function (err, result) {
                        if (result) {
                            res.status(300).send({ item })
                        } else {
                            res.status(500).send({ message: "Email and password do not match" })
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            res.status(400).send({ message: 'User Does not exist in our database' })
        }

    })
};

exports.forgot = function(req, res, next){
    async.waterfall([
        function(done) {
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.findOne({ email: req.body.email }, function(err, user) {
                if (!user) {
                    res.status(400).send({message: 'User does not exists in database'})
                    return
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function(err) {
                    done(err, token, user);
                });
            });
        },
        function(token, user, done) {
            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'liftoverstesting@gmail.com',
                    pass: 'liftovers123'
                }
            });
            var mailOptions = {
                to: user.email,
                from: 'liftoverstesting@gmail.com',
                subject: 'Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://localhost:3000/reset/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            smtpTransport.sendMail(mailOptions, function(err) {
                console.log('mail sent');
                res.status(300).send({message: 'success An e-mail has been sent'});
                done(err, 'done');
            });
        }
    ], function(err) {
        if (err) return next(err);
    });
};

exports.reset = function(req, res, next){
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (err){
            callback(err)
        }
        if (!user) {
            res.status(400).send({message: 'Password reset token is invalid or has expired.'});
            // return res.redirect('/forgot');
        } else{
            console.log('token still valid');
            res.status(200).send({message: 'Token is still valid'});

        }
    });
};

exports.changepassword = function(req, res, next){
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (err){
            callback(err)
        }
        if (!user) {
            res.status(400).send({message: 'Password reset token is does not exists or has expired.'});
            // return res.redirect('/forgot');
        } else{
            if (req.body.password === req.body.confpassword){
                console.log('token still valid');
                user.password = req.body.password;
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;

                user.save(function (err) {
                    if (err) {
                        console.log(err);
                        res
                            .status(500)
                            .send({ message: "Some error occurred while changing password." });
                    } else {
                        res.status(200).send({message: 'Token is still valid and password was changed'});
                    }
                });
            } else {
                console.log('passwords do not match');
                res.status(401).send({ message: "Passwords do not match. Try again"})
            }

        }
    });
};

getUsers = (origin, dest) => {
    return User.find();
};

exports.findAll = function(req, res) {
    // Retrieve and return all users (not deleted) from the database.
    let { page = 1, limit = 100 } = req.query;
    User.paginate({ status: {'$ne': "deleted"} }, { page, limit }).then(users => {
        if (!users)
            return res.status(404).send({ message: "No Users found." });
        return res.status(200).send(users);
    });
};

exports.findWait = function(req, res) {
    let { page = 1, limit = 100 } = req.query;
    User.paginate({status: "waitingApproval"}, { page, limit }).then(users => {
        if (!users)
            return res.status(404).send({ message: "No Users waiting for approval." });
        return res.status(200).send(users);
    });
}

exports.getOne = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(404).send({ message: "No such user." });
        } else {
            return res.status(200).send(user);
        }
    })
}

exports.deleteUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, { status: "deleted" })
        .then(ll => {
            console.log("changed user status to deleted");
        })
        .catch(error => {
            console.log(error);
        });
}

exports.approveUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, { status: "active" })
        .then(ll => {
            console.log("changed user status to active");
        })
        .catch(error => {
            console.log(error);
        });
}

exports.updateUser = function (req, res) {
    let update = {}
    if (req.body.name) {
        update.name = req.body.name
    }
    if (req.body.surname) {
        update.surname = req.body.surname
    }
    if (req.body.phone) {
        update.phone = req.body.phone
    }
    if (req.body.methodOfCommunication) {
        update.methodOfCommunication = req.body.methodOfCommunication
    }
    if (req.body.role) {
        update.role = req.body.role
    }
    User.findByIdAndUpdate(req.params.id, update)
        .then(ll => {
            console.log("updated user");
        })
        .catch(error => {
            console.log(error);
        })
}

