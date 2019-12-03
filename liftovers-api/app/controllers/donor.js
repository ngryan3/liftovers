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
  // Retrieve and return all donors (not deleted) from the database.
  let { page = 1, limit = 100 } = req.query;

  Donor.paginate({ status: {'$ne': "deleted"} }, { page, limit }).then(donors => {
    if (!donors)
      return res.status(404).send({ message: "No Donors found." });
    return res.status(200).send(donors);
  });
};


exports.findId = function(req, res) {
  // Return donor whose id == id given in url.
  Donor.find({ _id: req.params.id }).then(donors => {
      if (!donors)
        return res.status(404).send({ message: "No donors with given id found." });
      return res.status(200).send(donors);
  });
};


exports.deleteDonor = function(req, res) {
  Donor.findOneAndUpdate({ _id: req.params.id }, { status: "deleted" })
      .then(donor => {
        if (!donor) {
          console.log("no donors with given id found");
        }
        else {
          console.log("changed donor status to deleted");
        }
      })
      .catch(error => {
          console.log(error);
      });
};


exports.updateDonor = function (req, res) {
  let update = {}

  if (req.body.contactName) {
      update.contactName = req.body.contactName
  }
  if (req.body.contactSurname) {
      update.contactSurname = req.body.contactSurname
  }
  if (req.body.contactEmail) {
      update.contactEmail = req.body.contactEmail
  }
  if (req.body.contactPhone) {
      update.contactPhone = req.body.contactPhone
  }
  if (req.body.methodOfCommunication) {
      update.methodOfCommunication = req.body.methodOfCommunication
  }
  if (req.body.location) {
      update.location = req.body.location
  }
  if (req.body.hours) {
      update.hours = req.body.hours
  }
  if (req.body.typeOfFood) {
      update.typeOfFood = req.body.typeOfFood
  }
  if (req.body.recurring) {
      update.recurring = req.body.recurring
  }
  if (req.body.recurringTimes) {
      update.recurringTimes = req.body.recurringTimes
  }
  if (req.body.accessNotes) {
      update.accessNotes = req.body.accessNotes
  }

  Donor.findByIdAndUpdate(req.params.id, update)
      .then(donor => {
          if (!donor) {
              console.log("no donors with given id found");
          }
          else {
              console.log("updated donors");
          }
      })
      .catch(error => {
          console.log(error);
      });
};