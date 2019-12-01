var Provider = require("../models/provider.js");


// Create and Save a new Note
exports.create = function(req, res) {
  // Create and Save a new Note
  if (!req.body.contactName) {
    return res.status(400).send({ message: "Contact Name can not be empty" });
  }

  var provider = new Provider({
    contactName: req.body.contactName,
    contactSurname: req.body.contactSurname,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    methodOfCommunication: req.body.methodOfCommunication,
    location: req.body.location,
    hours: req.body.hours,
    acceptedFoods: req.body.acceptedFoods,
    unacceptableFoods: req.body.unacceptableFoods,
  });


  provider.save(function(err, data) {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Some error occurred while creating the Provider." });
    } else {
      res.send(data);
    }
  });
};


exports.findAll = function(req, res) {
  // Retrieve and return all notes from the database.
  let { page = 1, limit = 100 } = req.query;

  Provider.paginate({}, { page, limit }).then(providers => {
    if (!providers)
      return res.status(404).send({ message: "No Providers found." });
    return res.status(200).send(providers);
  });
};


exports.findId = function(req, res) {
  // Return povider whose id == id given in url.
  Provider.find({ _id: req.params.id }).then(poviders => {
      if (!poviders)
        return res.status(404).send({ message: "No poviders with given id found." });
      return res.status(200).send(poviders);
  });
};