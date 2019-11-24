var User = require("../models/user.js");

// Create and Save a new Note
exports.create = function(req, res) {
  // Create and Save a new Note
  if (!req.body.name) {
    return res.status(400).send({ message: "Name can not be empty" });
  }

  User.findOne({email: req.body.email}, function (err, user_email) {
    if (err) {
      return callback(err)
    } else if (!user_email){
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

      user.save(function(err, data) {
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
      res.send("email address already exists please use a different email")
    }

  })
};

exports.findAll = function(req, res) {
  // Retrieve and return all notes from the database.
  let { page = 1, limit = 100 } = req.query;
  User.paginate({}, { page, limit }).then(users => {
    if (!users)
      return res.status(404).send({ message: "No Users found." });
    return res.status(200).send(users);
  });
};
