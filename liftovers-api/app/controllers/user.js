var User = require("../models/user.js");
var bcrypt = require('bcryptjs');

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
                    let password = item[0].password
                    let auth = null
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

getUsers = (origin, dest) => {
    return User.find();
};

exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    let { page = 1, limit = 100 } = req.query;
    User.paginate({}, { page, limit }).then(users => {
        if (!users)
            return res.status(404).send({ message: "No Users found." });
        return res.status(200).send(users);
    });
};

exports.getOne = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(404).send({ message: "No such user." });
        } else {
            return res.status(200).send(user);
        }
    })
}

exports.updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(ll => {
            console.log("updated user");
        })
        .catch(error => {
            console.log(error);
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
