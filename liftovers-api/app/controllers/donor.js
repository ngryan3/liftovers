var Donor = require("../models/donor.js");

// Create and Save a new Note
exports.create = function(req, res) {
  // Create and Save a new Note
  if (!req.body.contactName) {
    return res.status(400).send({ message: "Contact Name can not be empty" });
  }

  var donor = new Donor({
    contactName: req.body.contactName,
    contactSurname: req.body.contactSurname,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    methodOfCommunication: req.body.methodOfCommunication,
    location: req.body.location,
    hours: req.body.hours.hours,
    typeOfFood: req.body.typeOfFood,
    recurring: req.body.recurring,
    recurringTimes: req.body.recurringTimes,
    accessNotes: req.body.accessNotes,
  });

  donor.save(function(err, data) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while creating the Donor." });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = function(req, res) {
  // Retrieve and return all notes from the database.
  let { page = 1, limit = 100 } = req.query;
  Donor.paginate({}, { page, limit }).then(donors => {
    if (!donors)
      return res.status(404).send({ message: "No Donors found." });
    return res.status(200).send(donors);
  });
};